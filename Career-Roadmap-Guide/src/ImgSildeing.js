import React from "react";

import i1 from "./img/img1.png";
import i2 from "./img/img2.jpg";
import i3 from "./img/img3.jpg";

// Import Swiper styles
import "swiper/css";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade,Virtual } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/virtual";

const ImgSildeing = function () {
  const data = [
    { id: 1, url: i1 },
    { id: 2, url: i2 },
    { id: 3, url: i3 },
  ];
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade, Virtual]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      loop={true}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      style={{
        width: "100%",
        marginTop: "20px",
        height: "50%",
        paddingBottom: "-40px",
      }}
      
    >
      {data.map((element, index) => {
        return (
          <SwiperSlide key={index}>
            <img src={element.url} alt="" className="imgSilder" />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ImgSildeing;
