import React from 'react';
import styled from 'styled-components';
import logo_sm from '../../assets/svg/logo-sm.svg';
import search from '../../assets/svg/search.svg';
import bell from '../../assets/svg/bell.svg';

function Header() {
  return (
    <HeaderPart>
      <img src={logo_sm} alt="" />
      <Category>
        <img src={search} alt="" width="24px" />
        <img src={bell} alt="" width="24px" />
      </Category>
    </HeaderPart>
  );
}

const Category = styled.div`
  display: flex;
  gap: 20px;
`;

const HeaderPart = styled.header`
  display: flex;
  justify-content: space-between;
  text-align: center;
  margin: 20px 0;
`;

export default Header;
