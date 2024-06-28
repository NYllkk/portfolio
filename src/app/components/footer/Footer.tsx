import { MAIN_TEXT, SOCIAL_ICONS } from "@/app/constants/AllConstants";
import { anonymousPro } from "@/app/utils/fonts";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import "./footer.css";
import Link from "next/link";

export default function Footer() {
  return (
    <div className={`${anonymousPro.className} pt-20 text-center footer`}>
      <div className=" flex items-center justify-between maxWidth footer_section">
        <div className="flex items-center ">
          <p>Made with </p>
          <Icon
            className="px-1"
            icon="fluent-emoji-flat:heart-suit"
            fontSize="25px"
          />
          <p>by {MAIN_TEXT.NAME}</p>
        </div>
        <div className="flex items-center">
          {SOCIAL_ICONS.map((item, i) => (
            <Link key={i} href={item.slug} target="_blank">
              <Icon icon={item.icon} fontSize="28px" className="px-1" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
