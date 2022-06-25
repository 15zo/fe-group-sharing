import React from "react";
import styled from "styled-components";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";

function Slide() {
  return (
    <Slider {...settings}>
      <SlideItem>
        <img
          src="	https://static.coupangcdn.com/wa/cmg_paperboy/image/1655874672812/C2_2_%E1%84%8B%E1%85%B5%E1%86%AF%E1%84%92%E1%85%AA%283%29.jpg"
          alt="1"
          width={"360px"}
        />
      </SlideItem>

      <SlideItem>
        <img
          src="	https://static.coupangcdn.com/wa/cmg_paperboy/image/1655874672812/C2_2_%E1%84%8B%E1%85%B5%E1%86%AF%E1%84%92%E1%85%AA%283%29.jpg"
          alt="2"
          width={"360px"}
        />
      </SlideItem>
      <SlideItem>
        <img
          src="	https://static.coupangcdn.com/wa/cmg_paperboy/image/1655874672812/C2_2_%E1%84%8B%E1%85%B5%E1%86%AF%E1%84%92%E1%85%AA%283%29.jpg"
          alt="3"
          width={"360px"}
        />
      </SlideItem>
      <SlideItem>
        <img
          src="	https://static.coupangcdn.com/wa/cmg_paperboy/image/1655874672812/C2_2_%E1%84%8B%E1%85%B5%E1%86%AF%E1%84%92%E1%85%AA%283%29.jpg"
          alt="4"
          width={"360px"}
        />
      </SlideItem>
    </Slider>
  );
}

const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "0px",
};

const SlideItem = styled.li``;

export default Slide;
