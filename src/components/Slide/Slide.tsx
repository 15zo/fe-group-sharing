import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick.theme.css';

function Slide() {
  return (
    <StyledSlider {...settings}>
      <SlideItem>
        <img
          src="	https://static.coupangcdn.com/wa/cmg_paperboy/image/1655874672812/C2_2_%E1%84%8B%E1%85%B5%E1%86%AF%E1%84%92%E1%85%AA%283%29.jpg"
          alt="1"
          width={'360px'}
        />
      </SlideItem>

      <SlideItem>
        <img
          src="	https://static.coupangcdn.com/wa/cmg_paperboy/image/1655874672812/C2_2_%E1%84%8B%E1%85%B5%E1%86%AF%E1%84%92%E1%85%AA%283%29.jpg"
          alt="2"
          width={'360px'}
        />
      </SlideItem>
      <SlideItem>
        <img
          src="	https://static.coupangcdn.com/wa/cmg_paperboy/image/1655874672812/C2_2_%E1%84%8B%E1%85%B5%E1%86%AF%E1%84%92%E1%85%AA%283%29.jpg"
          alt="3"
          width={'360px'}
        />
      </SlideItem>
      <SlideItem>
        <img
          src="	https://static.coupangcdn.com/wa/cmg_paperboy/image/1655874672812/C2_2_%E1%84%8B%E1%85%B5%E1%86%AF%E1%84%92%E1%85%AA%283%29.jpg"
          alt="4"
          width={'360px'}
        />
      </SlideItem>
    </StyledSlider>
  );
}

const settings = {
  dots: true,
  infinity: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: true,
  slidesToShow: 1,
  slideToScroll: 1,
  centerMode: true,
  centerPadding: '0px',
};

const StyledSlider = styled(Slider)`
  .slick-list {
    width: 360px;
    margin: 0px auto;
  }
`;

const SlideItem = styled.li``;

export default Slide;
