"use client";
import { MAIN_TEXT, navItems } from "@/app/constants/AllConstants";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import "./header.css";
import { anonymousPro, orbitron } from "@/app/utils/fonts";
import { Link as ScrollLink } from "react-scroll";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <main className="sticky_header">
      <div className="header maxWidth">
        <div className="flex justify-between py-5 place-items-center navbar">
          <div className="logo">
            <h2 className={`${orbitron.className} pl-2`}>
              {MAIN_TEXT.LOGO_NAME}
            </h2>
          </div>
          <div>
            <ul className="list-none flex ">
              {navItems.map((item, i) => (
                <li key={i} className="px-4 toggle-links">
                  <ScrollLink
                    to={item.slug}
                    smooth={true}
                    duration={500}
                    className={anonymousPro.className}
                  >
                    {item.name}
                  </ScrollLink>
                </li>
              ))}
              <li className="toggle-btn">
                <button
                  onClick={() => {
                    handleMenu();
                  }}
                >
                  <Image
                    className="backgroundImg"
                    src={showMenu ? "/Images/cross.png" : "/Images/menu.png"}
                    width={20}
                    height={20}
                    alt="logo"
                  />
                </button>
              </li>
            </ul>
          </div>
        </div>
        {showMenu && (
          <div className="toggle-menu">
            <ul>
              {/* <li className={`${orbitron.className} py-2 menu_logo`}>
                {MAIN_TEXT.LOGO_MENU_NAME}
              </li> */}
              {navItems.map((item, i) => (
                <li key={i} className="py-2" >
                  <ScrollLink
                    to={item.slug}
                    smooth={true}
                    duration={500}
                    className={anonymousPro.className}
                    onClick={()=>{setShowMenu(false)}}
                    >
                    {item.name}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </main>
  );
}
