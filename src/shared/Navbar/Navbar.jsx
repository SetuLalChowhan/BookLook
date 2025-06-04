import React, { useState } from "react";
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

  

  return (
    <div className="py-6 px-11 bg-[#18443C] flex justify-between gap-5 items-center">
      <nav
        className="flex items-center gap-7"
        data-aos="fade-down"
        data-aos-delay="200"
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

      <div
        className="max-w-[300px] rounded-[12px] bg-[#ABBF96]/30 px-4 py-2 flex items-center gap-2"
        data-aos="fade-down"
        data-aos-delay="200"
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
