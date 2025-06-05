import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" flex flex-col ">
      <div className="  bg-[#062F28] py-11 grid grid-cols-4 gap-[120px] section-padding-x">
        <div className=" flex flex-col gap-4">
          <p className=" text-[25px] text-[#E5E034] font-normal font-beth">
            BOI.
          </p>
          <p className="text-[#FEF1D5] text-sm font-normal font-inter">
            "BOI – Bringing books closer to you! Discover a world of stories,
            knowledge, and inspiration with our carefully curated collection.
            Shop with ease, enjoy secure payments, and get your favorite books
            delivered to your doorstep. Start your reading journey with BOI
            today!
          </p>
        </div>

        <div className=" flex flex-col gap-5">
          <p className="text-[#FEF1D5] text-[24px] font-medium font-inter">
            Help
          </p>
          <div className=" flex flex-col gap-4">
            <Link
              to={`#`}
              className=" text-sm text-[#FEF1D5] font-normal font-inter"
            >
              About Us
            </Link>
            <Link
              to={`#`}
              className=" text-sm text-[#FEF1D5] font-normal font-inter"
            >
              Frequently Asked Questions
            </Link>
            <Link
              to={`#`}
              className=" text-sm text-[#FEF1D5] font-normal font-inter"
            >
              Return & Refund Policy
            </Link>
            <Link
              to={`#`}
              className=" text-sm text-[#FEF1D5] font-normal font-inter"
            >
              Shipping Information
            </Link>
            <Link
              to={`#`}
              className=" text-sm text-[#FEF1D5] font-normal font-inter"
            >
              Terms & Conditions
            </Link>
            <Link
              to={`#`}
              className=" text-sm text-[#FEF1D5] font-normal font-inter"
            >
              Privacy Policy
            </Link>
          </div>
        </div>

        <div className=" flex flex-col gap-5">
          <p className="text-[#FEF1D5] text-[24px] font-medium font-inter">
            Discover
          </p>
          <div className=" flex flex-col gap-4">
            <Link
              to={`#`}
              className=" text-sm text-[#FEF1D5] font-normal font-inter"
            >
              Home
            </Link>
            <Link
              to={`#`}
              className=" text-sm text-[#FEF1D5] font-normal font-inter"
            >
              Books
            </Link>
            <Link
              to={`#`}
              className=" text-sm text-[#FEF1D5] font-normal font-inter"
            >
              Categories
            </Link>
            <Link
              to={`#`}
              className=" text-sm text-[#FEF1D5] font-normal font-inter"
            >
              Shipping Information
            </Link>
            <Link
              to={`#`}
              className=" text-sm text-[#FEF1D5] font-normal font-inter"
            >
              Blog
            </Link>
            <Link
              to={`#`}
              className=" text-sm text-[#FEF1D5] font-normal font-inter"
            >
              Articles
            </Link>
          </div>
        </div>

        <div className=" flex flex-col gap-5">
          <p className="text-[#FEF1D5] text-[24px] font-medium font-inter">
            Contact Us
          </p>
          <div className=" flex flex-col gap-4">
            <p className=" text-sm text-[#FEF1D5] font-normal font-inter">
              {" "}
              <strong>Address:</strong> 123 Bricklane, Fiction City, London,
              56784{" "}
            </p>
            <p className=" text-sm text-[#FEF1D5] font-normal font-inter">
              <strong>Email:</strong> support@boi.com{" "}
            </p>
            <p className=" text-sm text-[#FEF1D5] font-normal font-inter">
              <strong>Phone:</strong> +1 (800) 123-4568
            </p>
            <p className=" text-sm text-[#FEF1D5] font-normal font-inter">
              Follow us in social media for the latest updates:
            </p>

            <div className=" flex items-center gap-4">
              <Link
                to={`#`}
                className=" w-[35px] h-[35px] aspect-square bg-[#FEF1D5] rounded-full flex justify-center items-center"
              >
                <FaFacebookF />
              </Link>
              <Link
                to={`#`}
                className=" w-[35px] h-[35px] aspect-square bg-[#FEF1D5] rounded-full flex justify-center items-center"
              >
                <FaInstagram />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className=" section-padding-x py-[6px] bg-[#AD1D43] flex items-center justify-center gap-7">
        <p className=" text-[#FEF1D5] text-sm font-normal font-inter">
          © 2025 BOI.All rights are reserved.
        </p>
        <div className=" flex items-center gap-7">
          <Link
            to={`#`}
            className="text-sm text-[#FEF1D5] font-normal font-inter underline"
          >
            Privacy Policy
          </Link>
          <Link
            to={`#`}
            className="text-sm text-[#FEF1D5] font-normal font-inter underline"
          >
            Terms of Use
          </Link>
          <Link
            to={`#`}
            className="text-sm text-[#FEF1D5] font-normal font-inter underline"
          >
            Cookie Settings
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
