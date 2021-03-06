import { useEffect, useState } from "react";
import styled from "styled-components";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useAxios from "../../hooks/useAxios";

function Slide() {
  const [slideData, setSlideData] = useState<any>([]);

  const [{ response }] = useAxios({
    method: "get",
    url: "http://3.37.220.123:9080/api/banner",
  });

  useEffect(() => {
    if (response) {
      setSlideData(response);
    }
  });

  return (
    <Slider {...settings}>
      {slideData.map(({ id, imageUrl }: any) => (
        <SlideItem key={id}>
          <img src={imageUrl} alt="id" width={"328px"} />
        </SlideItem>
      ))}
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
