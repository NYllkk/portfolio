"use client";
import React from "react";
import { orbitron } from "@/app/utils/fonts";

export default function CommonHeading({ text }) {
  return <h1 className={`${orbitron.className}`}>{text}</h1>;
}
