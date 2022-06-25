import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logo_sm from '../../assets/svg/logo-sm.svg';
import Slide from '../../components/Slide';

function Main() {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <HeaderPart>
        <img src={logo_sm} alt=""></img>
        <HeaderBtn>버튼 1</HeaderBtn>
        <HeaderBtn>버튼 2</HeaderBtn>
      </HeaderPart>
      <MainPart>
        <SlideSection>{/* <Slide /> */}</SlideSection>
        <NavigationSection>
          <NavigationBtn onClick={() => navigate('11')}>배달쉐어</NavigationBtn>
          <NavigationBtn onClick={() => navigate('22')}>재료쉐어</NavigationBtn>
        </NavigationSection>
        <Preview>
          <A>
            <span>1인가구 식생활 가이드</span>
            <button>{'이동 >'}</button>
          </A>
        </Preview>
        <Guide></Guide>
      </MainPart>
    </Wrapper>
  );
}

const A = styled.div`
  position: relative;
  width: 85%;
  background-color: #000;
  text-align: center;
  justify-content: center;
  padding: 10px;
  border-radius: 20px;

  button {
    position: absolute;
    padding: 2px;
    border: 1px solid #fff;
    border-radius: 20px;
    top: 7px;
    right: 5px;
  }
`;

const Wrapper = styled.div`
  width: 360px;
  margin: 0 auto;
`;

const HeaderPart = styled.header`
  display: flex;
  justify-content: space-between;
  text-align: center;
  margin: 20px 0;
`;

const HeaderBtn = styled.button`
  background-color: #000;
  padding: 5px;
  border-radius: 50px;
`;

const MainPart = styled.main``;

const SlideSection = styled.section``;
const SlideList = styled.ul``;
const NavigationSection = styled.section`
  display: flex;
  justify-content: space-between;
  text-align: center;
  margin: 30px;
`;
const NavigationBtn = styled.button`
  background-color: #000;
  padding: 20px 5px;
  border-radius: 25px;
`;

const Preview = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;
const Guide = styled.article``;

export default Main;
