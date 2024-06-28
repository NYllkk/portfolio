"use client";
import React from "react";
import "./skills.css";
import { Icon } from "@iconify/react";
import "swiper/css";
import "swiper/css/pagination";
import {
  SKILL_ICON_STYLE,
  SKILL_ICON_TECHNOLOGY,
  SKILL_ICONS_MAIN,
} from "@/app/constants/AllConstants";
import CommonHeading from "../heading/CommonHeading";

export default function Skills() {
  return (
    <div id="skills" className="maxWidth py-20 text-center skill_section">
      <CommonHeading text="Skills" />
      <div className=" flex justify-evenly px-20 pt-10 skills">
        {SKILL_ICONS_MAIN.map((item, i) => (
          <>
            <div className="group flex relative">
              <div
                key={i}
                className="svg_section flex justify-center items-center"
              >
                <Icon icon={item.icon} fontSize="40px" />
              </div>
              <span
                className="group-hover:opacity-100 transition-opacity text-sm rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto tooltip_text"
              >
                {item.name}
              </span>
            </div>
          </>
        ))}
      </div>
      <div className=" flex justify-evenly px-20 pt-10 skills">
        {SKILL_ICON_STYLE.map((item, i) => (
          <>
            <div className="group flex relative">
              <div
                key={i}
                className="svg_section flex justify-center items-center"
              >
                <Icon icon={item.icon} fontSize="40px" />
              </div>
              <span
                className="group-hover:opacity-100 transition-opacity text-sm rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto tooltip_text"
              >
                {item.name}
              </span>
            </div>
          </>
        ))}
      </div>
      {/* <div className=" flex justify-evenly px-20 pt-10 skills">
        {SKILL_ICON_TECHNOLOGY.map((item, i) => (
          <>
            <div className="group flex relative">
              <div
                key={i}
                className="svg_section flex justify-center items-center"
              >
                <Icon icon={item.icon} fontSize="40px" />
              </div>
              <span
                className="group-hover:opacity-100 transition-opacity text-sm rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto tooltip_text"
              >
                {item.name}
              </span>
            </div>
          </>
        ))}
      </div> */}
      <div className="skills flex justify-evenly px-20 pt-10">
        {SKILL_ICON_TECHNOLOGY.map((item, i) => (
          <div key={i} className="group flex relative skill-item">
            <div className="svg_section flex justify-center items-center">
              <Icon icon={item.icon} fontSize="40px" />
            </div>
            <span
              className="group-hover:opacity-100 transition-opacity text-sm rounded-md absolute left-1/2 
        -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto tooltip_text"
            >
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
