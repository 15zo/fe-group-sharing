import React, { useState } from "react";

import writeIcon from "../../assets/svg/writeIcon.svg";
import x_btn from "../../assets/svg/x_btn.svg";
import recruit_1 from "../../assets/svg/recruit_1.svg";
import recruit_2 from "../../assets/svg/recruit_2.svg";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function WriteBanner() {
  const navigate = useNavigate();
  const [inOpen, setIsOpen] = useState(false);
  const showMenuBar = () => {
    setIsOpen(!inOpen);
  };
  return (
    <Wrapper onClick={showMenuBar}>
      {inOpen ? (
        <FixBtn>
          <img src={x_btn} alt="" width="100px" />
          <button onClick={() => navigate("/delivery")}>
            <img src={recruit_1} alt="" width="100px" />
          </button>
          <button onClick={() => navigate("/ingredient")}>
            <img src={recruit_2} alt="" width="100px" />
          </button>
        </FixBtn>
      ) : (
        <FixBtn>
          <img src={writeIcon} alt="" width="100px" />
        </FixBtn>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.button``;

const FixBtn = styled.button`
  position: relative;
  button {
    &:not(:last-child) {
      position: absolute;
      top: 0px;
      left: 0px;
    }

    position: absolute;
    top: -27px;
    left: 0px;
  }
`;
export default WriteBanner;
