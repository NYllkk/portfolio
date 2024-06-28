"use client";
import React from "react";
import { PROJECTS_LIST } from "@/app/constants/AllConstants";
import { anonymousPro } from "@/app/utils/fonts";
import "./Project.css";
import CommonHeading from "../heading/CommonHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

export default function Project() {
  return (
    <div id="projects" className="maxWidth py-20 text-center project_section">
      <CommonHeading text="Projects" />

      <Swiper
        className="mySwiper"
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
      >
        {PROJECTS_LIST.map((item, i) => (
          <SwiperSlide key={i} style={{padding: '20px'}}>
            <div  className= {`${anonymousPro.className} row-span-3 rounded-lg project_card`}>
              <img className="rounded-t-lg" src={item.image_url} alt="" />
              <div className="p-5 project_card_content">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight ">
                    {item.title}
                  </h5>
                <p className="mb-3 ">
                  {" "}
                  {item.description}
                </p>
                
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
