import React, { useEffect, useRef, useState } from "react";
import { Popover } from "antd";
import SublinkSection from "./SublinkSection";
import { NavLink } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";

const Navbar = () => {
  const [openPopover, setOpenPopover] = useState(null);

  const navLinks = [
    { id: 1, title: "Home", link: "/" },
    {
      id: 2,
      title: "Authors",
      sublinks: [
        { id: 1, title: "J.K. Rowling", link: "/authors/jk-rowling" },
        {
          id: 2,
          title: "George R.R. Martin",
          link: "/authors/george-rr-martin",
        },
        { id: 3, title: "Stephen King", link: "/authors/stephen-king" },
        { id: 4, title: "Agatha Christie", link: "/authors/agatha-christie" },
        { id: 5, title: "Dan Brown", link: "/authors/dan-brown" },
        { id: 6, title: "Margaret Atwood", link: "/authors/margaret-atwood" },
        { id: 7, title: "Haruki Murakami", link: "/authors/haruki-murakami" },
        { id: 8, title: "Toni Morrison", link: "/authors/toni-morrison" },
      ],
    },
    {
      id: 3,
      title: "Publishers",
      sublinks: [
        {
          id: 1,
          title: "Penguin Random House",
          link: "/publishers/penguin-random-house",
        },
        { id: 2, title: "HarperCollins", link: "/publishers/harpercollins" },
        {
          id: 3,
          title: "Simon & Schuster",
          link: "/publishers/simon-schuster",
        },
        { id: 4, title: "Macmillan", link: "/publishers/macmillan" },
        { id: 5, title: "Hachette", link: "/publishers/hachette" },
        { id: 6, title: "Scholastic", link: "/publishers/scholastic" },
      ],
    },
    {
      id: 4,
      title: "Genre",
      sublinks: [
        { id: 1, title: "Fiction", link: "/genre/fiction" },
        { id: 2, title: "Non-Fiction", link: "/genre/non-fiction" },
        { id: 3, title: "Science Fiction", link: "/genre/science-fiction" },
        { id: 4, title: "Fantasy", link: "/genre/fantasy" },
        { id: 5, title: "Mystery", link: "/genre/mystery" },
        { id: 6, title: "Romance", link: "/genre/romance" },
        { id: 7, title: "Biography", link: "/genre/biography" },
        { id: 8, title: "History", link: "/genre/history" },
      ],
    },
    {
      id: 5,
      title: "Language",
      sublinks: [
        { id: 1, title: "English", link: "/language/english" },
        { id: 2, title: "Bengali", link: "/language/bengali" },
        { id: 3, title: "Hindi", link: "/language/hindi" },
        { id: 4, title: "Spanish", link: "/language/spanish" },
        { id: 5, title: "French", link: "/language/french" },
        { id: 6, title: "German", link: "/language/german" },
        { id: 7, title: "Japanese", link: "/language/japanese" },
      ],
    },
    { id: 6, title: "Best Sellers", link: "/best-sellers" },
    { id: 7, title: "New Releases", link: "/new-releases" },
    {
      id: 8,
      title: "Collections",
      sublinks: [
        { id: 1, title: "Classics", link: "/collections/classics" },
        { id: 2, title: "Award Winners", link: "/collections/award-winners" },
        { id: 3, title: "Staff Picks", link: "/collections/staff-picks" },
        { id: 4, title: "Book Club Favorites", link: "/collections/book-club" },
        {
          id: 5,
          title: "Signed Editions",
          link: "/collections/signed-editions",
        },
      ],
    },
  ];

   const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem("selectedLanguage") || "en"
  );
  const [googleTranslateLoaded, setGoogleTranslateLoaded] = useState(false);
  const googleTranslateRef = useRef(null);

  const languages = [
    { code: "en", name: "English" },
    { code: "bn", name: "Bengali" },
    { code: "es", name: "Spanish" },
    { code: "fr", name: "French" },
    { code: "de", name: "German" },
    { code: "ar", name: "Arabic" },
    { code: "zh-CN", name: "Chinese" },
    { code: "hi", name: "Hindi" },
    { code: "ja", name: "Japanese" },
  ];

  useEffect(() => {
    const initializeGoogleTranslate = () => {
      window.googleTranslateElementInit = () => {
        googleTranslateRef.current =
          new window.google.translate.TranslateElement(
            {
              pageLanguage: "en",
              includedLanguages: languages.map((lang) => lang.code).join(","),
              layout:
                window.google.translate.TranslateElement.InlineLayout
                  .HORIZONTAL,
              autoDisplay: false,
            },
            "google_translate_element"
          );

        // Set the initial language from our state
        setTimeout(() => {
          const select = document.querySelector(".goog-te-combo");
          if (select) {
            select.value = selectedLanguage;
            const event = new Event("change", { bubbles: true });
            select.dispatchEvent(event);
          }
        }, 500);

        setGoogleTranslateLoaded(true);
      };

      if (!window.google || !window.google.translate) {
        const script = document.createElement("script");
        script.src =
          "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script.async = true;
        document.body.appendChild(script);
      } else {
        window.googleTranslateElementInit();
      }
    };

    initializeGoogleTranslate();

    return () => {
      if (window.googleTranslateElementInit) {
        delete window.googleTranslateElementInit;
      }
    };
  }, []);




  // Handle language change from our custom select
  const handleLanguageChange = (e) => {
    const langCode = e.target.value;
    setSelectedLanguage(langCode);
    localStorage.setItem("selectedLanguage", langCode);

    if (window.google && window.google.translate) {
      const select = document.querySelector(".goog-te-combo");
      if (select) {
        select.value = langCode;
        const event = new Event("change", { bubbles: true });
        select.dispatchEvent(event);

        // Fallback method if the event doesn't trigger translation
        setTimeout(() => {
          if (!document.body.classList.contains(`translated-${langCode}`)) {
            if (window.google.translate.translatePage) {
              window.google.translate.translatePage(langCode);
            }
          }
        }, 300);
      }
      if(selectedLanguage ){
        window.location.reload();
      }
      // if (langCode === 'en') {
      //   const select = document.querySelector(".goog-te-combo");
      //   if (select) {
      //     select.value = 'en';
      //     const event = new Event("change", { bubbles: true });
      //     select.dispatchEvent(event);
      //   }
      // }
    }
  };

  useEffect(() => {
    const checkCurrentTranslation = () => {
      for (const lang of languages) {
        if (document.body.classList.contains(`translated-${lang.code}`)) {
          setSelectedLanguage(lang.code);
          localStorage.setItem("selectedLanguage", lang.code);
          return;
        }
      }
    };

    // Run immediately and also after a delay
    checkCurrentTranslation();
    const timer = setTimeout(checkCurrentTranslation, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="py-6 sticky top-0 z-[999] px-11 bg-[#18443C] flex justify-between gap-5 items-center">
      <nav
        className="flex items-center gap-7"
    
      >
        {navLinks.map((item, index) =>
          item.sublinks ? (
            <Popover
              key={index}
              content={<SublinkSection items={item.sublinks} />}
              trigger="hover"
              placement="bottom"
              color="#F8D34E"
              open={openPopover === index}
              onOpenChange={(visible) => setOpenPopover(visible ? index : null)}
            >
              <div className="cursor-pointer font-normal flex items-center gap-1 text-lg text-[#FEF1D5] hover-link relative group">
                <p>{item.title}</p>
                <span
                  className={`transform transition-transform duration-300 ${
                    openPopover === index
                      ? "rotate-180"
                      : "group-hover:rotate-180"
                  }`}
                >
                  <IoMdArrowDropdown color="#E7B24E" />
                </span>
              </div>
            </Popover>
          ) : (
            <NavLink
              key={index}
              to={item.link}
              className={({ isActive }) =>
                `${
                  isActive ? "text-[#E7B24E]" : "text-[#FEF1D5]"
                } text-lg font-normal hover-link relative`
              }
            >
              {item.title}
            </NavLink>
          )
        )}
      </nav>

       <div className="language-selector">
                {/* Hidden Google Translate Element */}
                <div
                  id="google_translate_element"
                  style={{ display: "none" }}
                ></div>

                {/* Custom Select Dropdown */}
                <select
                  translate="no"
                  value={selectedLanguage}
                  onChange={handleLanguageChange}
                  className="custom-language-select"
                  disabled={!googleTranslateLoaded}
                >
                  {languages.map((language) => (
                    <option
                      translate="no"
                      key={language.code}
                      value={language.code}
                    >
                      {language.name}
                    </option>
                  ))}
                </select>
              </div>

      <div
        className="max-w-[300px] rounded-[12px] bg-[#ABBF96]/30 px-4 py-2 flex items-center gap-2"
        
      >
        <span>
          <IoIosSearch color="#FEF1D5" />
        </span>
        <input
          type="text"
          placeholder="Search Books"
          className="bg-transparent outline-none text-[#FEF1D5] placeholder-[#FEF1D5] placeholder-opacity-50 text-base font-normal"
        />
      </div>
    </div>
  );
};

export default Navbar;
