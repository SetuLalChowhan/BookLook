import React from "react";
import { NavLink } from "react-router-dom";

const SublinkSection = ({ items }) => {
  return (
    <div className=" flex flex-col gap-3 w-[180px] items-start">
      {items?.map((item, index) => (
        <NavLink
          key={index}
          to={item.link}
          className={({ isActive }) =>
            `${
              isActive ? "text-[#E7B24E]" : ""
            } text-sm font-normal hover:text-black hover:font-medium  relative`
          }
        >
          {item.title}
        </NavLink>
      ))}
    </div>
  );
};

export default SublinkSection;
