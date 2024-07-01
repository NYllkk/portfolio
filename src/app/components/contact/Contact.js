"use client";
import { anonymousPro, orbitron } from "@/app/utils/fonts";
import React, { useState } from "react";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "./Contact.css";
import { Icon } from "@iconify/react/dist/iconify.js";
import { CONTACT_DETAILS } from "@/app/constants/AllConstants";
import emailjs from "emailjs-com";
import CommonHeading from "../heading/CommonHeading";
import DownloadResumeButton from "../downloadbutton/DownloadResumeButton";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const formOptions = { resolver: yupResolver(Schema) };
  const { register, handleSubmit, formState, reset, setValue, trigger } =
    useForm(formOptions);
  const { errors } = formState;

  const onSubmit = (e) => {
    setLoading(true);
    const payload = { ...e };

    emailjs
      .send(
        "service_50cqphl", // Replace with your EmailJS service ID
        "template_aifqihm", // Replace with your EmailJS template ID  "template_aifqihm"
        payload,
        "AIXZA-8orrxA0RDCe" // Replace with your EmailJS user ID
      )
      .then((response) => {
        reset();
        setLoading(false);
      })
      .catch((err) => {
        reset();
        setLoading(false);
      });
  };

  return (
    <div id="contact" className="maxWidth py-20 text-center skill_section">
      <CommonHeading text="Get in touch" />

      <div className="grid grid-cols-12 gap-4 contact">
        <div className="contact_form col-span-8">
          <form
            className={`${anonymousPro.className} pt-10`}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="mb-5 ">
              <label className="block mb-2 " htmlFor="">
                Name
              </label>
              <input
                {...register("name")}
                className="text-sm rounded-lg block w-full p-2.5 "
                id="grid-first-name"
                type="text"
              />
              <p className="text-left text-red-500 text-xs pt-2">
                {errors.name?.message}
              </p>
            </div>
            <div className="mb-5">
              <label className="block mb-2 " htmlFor="">
                Email
              </label>
              <input
                {...register("email")}
                className="text-sm rounded-lg block w-full p-2.5 "
                id="grid-password"
                type="email"
              />
              <p className=" text-left text-red-500 text-xs pt-2">
                {errors.email?.message}
              </p>
            </div>
            <div className="mb-5">
              <label htmlFor="" className="block mb-2">
                Message
              </label>
              <textarea
                {...register("message")}
                className="text-sm rounded-lg block w-full p-2.5"
              ></textarea>
              <p className=" text-left text-red-500 text-xs pt-2">
                {errors.message?.message}
              </p>
            </div>
            <button type="submit" className="save_btn">
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
        <div
          className={`${anonymousPro.className} col-span-4 flex items-center justify-center`}
        >
          <div className="contact_section">
            {CONTACT_DETAILS.map((item, i) => (
              <div key={i} className="flex items-center pb-3">
                <Icon
                  icon={item.icon}
                  style={{ color: "#18d26f" }}
                  fontSize="40px"
                />
                <p className="pl-5 text-left">{item.text}</p>
              </div>
            ))}
            <div className="contact_section">
              <div className="flex items-center pb-3">
                <Icon icon="typcn:download" style={{ color: "rgb(24, 210, 111" }} />
                <p className="pl-5 text-left"><DownloadResumeButton /></p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Schema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(2, "Too Short!")
    .max(20, "Please enter 20 characters only")
    .matches(/^[A-Za-z\s’']*$/, "Please enter letters only")
    .matches(/^[A-Z]/, "First letter should be uppercase."),
  email: Yup.string()
    .required("Email is required")
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please enter valid email address"
    ),
  message: Yup.string().required("Message is required"),
});
