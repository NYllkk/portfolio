"use client";
import React from "react";
import "./About.css";
import { anonymousPro } from "@/app/utils/fonts";
import { MAIN_TEXT } from "@/app/constants/AllConstants";
import { motion } from "framer-motion";
import CommonHeading from "../heading/CommonHeading";

export default function About() {
  const text = MAIN_TEXT.ABOUT_SECTION_LINES.split(" ");

  return (
    <div id="about" className="maxWidth about-section py-20 text-center">
      <CommonHeading text="About" />
      <p className={`${anonymousPro.className} px-20 pt-10`}>
        {text.map((el, i) => (
          <motion.span
            initial={{ opacity: 0.1 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.25,
              delay: i / 10,
            }}
            key={i}
          >
            {el}{" "}
          </motion.span>
        ))}

      </p>
    </div>
  );
}
