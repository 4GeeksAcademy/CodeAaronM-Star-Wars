import React, { useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

import "@fortawesome/fontawesome-svg-core/styles.css"; // Import Font Awesome CSS
import "../../styles/cards.css"; // Import your custom card styles (optional)
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const AboutUs = () => {
  return (
    <div className="AboutUs" id="Integrantes">
      <h3 className="Titulo1">
        <span style={{ color: "#0066CC" }}>In</span>
        <span style={{ color: "#0099FF" }}>te</span>
        <span style={{ color: "#FFCC00" }}>gr</span>
        <span style={{ color: "#FF9933" }}>an</span>
        <span style={{ color: "#0066CC" }}>tes</span>
      </h3>
      <Swiper
        className="carrosel"
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        style={{ width: "70%", height: "20rem" }}
      >
        <SwiperSlide>
          <div className="card-item" style={{ width: "18rem" }}>
            <img
              src="https://w7.pngwing.com/pngs/312/283/png-transparent-man-s-face-avatar-computer-icons-user-profile-business-user-avatar-blue-face-heroes-thumbnail.png"
              className="card-img-top"
              alt="perfil"
            />
            <div className="card-body">
              <h4>Alex</h4>
              <h6>Secretario General</h6>
            </div>
            <div
              className="icon-container pb-3"
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
              <a href="https://www.instagram.com/" target="_blank">
                <FaInstagram style={{ fontSize: "2rem" }} />
              </a>
              <a href="https://www.linkedin.com/feed/" target="_blank">
                <FaLinkedin style={{ fontSize: "2rem" }} />
              </a>
              <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank">
                <MdOutlineEmail style={{ fontSize: "2.2rem" }} />
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card-item" style={{ width: "18rem" }}>
            <img
              src="https://w7.pngwing.com/pngs/312/283/png-transparent-man-s-face-avatar-computer-icons-user-profile-business-user-avatar-blue-face-heroes-thumbnail.png"
              className="card-img-top"
              alt="perfil"
            />
            <div className="card-body">
              <h4>Alex</h4>
              <h6>Secretario General</h6>
            </div>
            <div
              className="icon-container pb-3"
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
              <a href="https://www.instagram.com/" target="_blank">
                <FaInstagram style={{ fontSize: "2rem" }} />
              </a>
              <a href="https://www.linkedin.com/feed/" target="_blank">
                <FaLinkedin style={{ fontSize: "2rem" }} />
              </a>
              <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank">
                <MdOutlineEmail style={{ fontSize: "2.2rem" }} />
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card-item" style={{ width: "18rem" }}>
            <img
              src="https://w7.pngwing.com/pngs/312/283/png-transparent-man-s-face-avatar-computer-icons-user-profile-business-user-avatar-blue-face-heroes-thumbnail.png"
              className="card-img-top"
              alt="perfil"
            />
            <div className="card-body">
              <h4>Alex</h4>
              <h6>Secretario General</h6>
            </div>
            <div
              className="icon-container pb-3"
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
              <a href="https://www.instagram.com/" target="_blank">
                <FaInstagram style={{ fontSize: "2rem" }} />
              </a>
              <a href="https://www.linkedin.com/feed/" target="_blank">
                <FaLinkedin style={{ fontSize: "2rem" }} />
              </a>
              <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank">
                <MdOutlineEmail style={{ fontSize: "2.2rem" }} />
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card-item" style={{ width: "18rem" }}>
            <img
              src="https://w7.pngwing.com/pngs/312/283/png-transparent-man-s-face-avatar-computer-icons-user-profile-business-user-avatar-blue-face-heroes-thumbnail.png"
              className="card-img-top"
              alt="perfil"
            />
            <div className="card-body">
              <h4>Alex</h4>
              <h6>Secretario General</h6>
            </div>
            <div
              className="icon-container pb-3"
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
              <a href="https://www.instagram.com/" target="_blank">
                <FaInstagram style={{ fontSize: "2rem" }} />
              </a>
              <a href="https://www.linkedin.com/feed/" target="_blank">
                <FaLinkedin style={{ fontSize: "2rem" }} />
              </a>
              <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank">
                <MdOutlineEmail style={{ fontSize: "2.2rem" }} />
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
