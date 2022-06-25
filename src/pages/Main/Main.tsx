import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Slide from "../../components/Slide";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";

function Main() {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Header />
      <MainPart>
        <SlideSection>
          <Slide />
        </SlideSection>
        <NavigationSection>
          <NavigationTitle>Categories</NavigationTitle>
          <NavigationPlus>더보기</NavigationPlus>
          <NavigationBtn
            onClick={() => navigate("../delivery", { replace: true })}
          >
            <span>적절한 1인분을 함께</span>
            배달쉐어
          </NavigationBtn>
          <NavigationBtn
            onClick={() => navigate("../ingredient", { replace: true })}
          >
            <span>적절한 1인분을 함께</span>
            재료쉐어
          </NavigationBtn>
        </NavigationSection>
        <Guide>
          <GuideTitle>1인가구 식생활 가이드</GuideTitle>
          <GuidePlus>더보기</GuidePlus>
        </Guide>
      </MainPart>
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 360px;
  margin: 0 auto;
  padding: 0 16px;
`;

const MainPart = styled.main``;

const SlideSection = styled.section``;
const NavigationSection = styled.section`
  display: flex;
  justify-content: space-between;
  text-align: center;
  position: relative;
  margin: 40px;
`;
const NavigationBtn = styled.button`
  span {
    font-size: 12px;
    color: orange;
  }
  border: 1px solid black;
  margin-top: 30px;
  color: black;
  padding: 20px 5px;
  font-weight: 700;
`;

const NavigationTitle = styled.span`
  position: absolute;
  color: black;
  font-weight: 700;
  font-size: 16px;
`;

const NavigationPlus = styled.span`
  position: absolute;
  right: 5px;
  top: 4px;
  color: gray;
  opacity: 0.5;
  font-size: 12px;
`;

const Guide = styled.article`
  display: flex;
  justify-content: space-between;
  text-align: center;
  position: relative;
  margin: 40px;
`;

const GuideTitle = styled.div`
  color: #000;
  font-weight: 700;
  text-align: center;
  justify-content: center;
`;
const GuidePlus = styled.span`
  position: absolute;
  right: 5px;
  top: 4px;
  color: gray;
  opacity: 0.5;
  font-size: 12px;
`;

export default Main;
