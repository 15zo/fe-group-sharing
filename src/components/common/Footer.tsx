import React from 'react';
import styled from 'styled-components';
import fullHome from '../../assets/svg/fullHome.svg';
import fullItemList from '../../assets/svg/fullItemList.svg';
import fullWrite from '../../assets/svg/fullWrite.svg';
import fullInfo from '../../assets/svg/fullInfo.svg';
import home from '../../assets/svg/home.svg';
import itemList from '../../assets/svg/itemList.svg';
import write from '../../assets/svg/write.svg';
import info from '../../assets/svg/info.svg';
import { useLocation } from 'react-router-dom';

function Footer() {
  const location = useLocation();
  return (
    <FooterContainer>
      {location.pathname === '/main' ? <img src={fullHome} alt="" /> : <img src={home} alt="" />}
      {location.pathname === '/delivery' ? (
        <img src={fullItemList} alt="" />
      ) : (
        <img src={itemList} alt="" />
      )}
      {location.pathname === '/ingredient' ? (
        <img src={fullWrite} alt="" />
      ) : (
        <img src={write} alt="" />
      )}
      {location.pathname === '/userInfo' ? (
        <img src={fullInfo} alt="" />
      ) : (
        <img src={info} alt="" />
      )}
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export default Footer;
