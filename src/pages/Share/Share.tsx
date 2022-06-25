import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

import { Layout } from "../../components";

import * as S from "./Share.style";
import { LIST } from "./mock";
import { Delivery, Ingredient } from "./types";

import LargeLogo from "../../assets/svg/logo-lg.svg";
import Header from "../../components/common/Header";

// TODO: Infinite Scroll

interface Props {
  shareType: "delivery" | "ingredient";
}

// const SIZE = 2;

function Share({ shareType }: Props) {
  // TODO: api get (shareType)
  const [size, setSize] = useState(0);
  const [list, setList] = useState<Delivery[] | Ingredient[]>([]);
  const [currentList, setCurrentList] = useState<Delivery[] | Ingredient[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchMoreTrigger = useRef<HTMLInputElement>(null);

  // const fetchMoreObserver = new IntersectionObserver(([{ isIntersecting }]) => {
  //   if (isIntersecting) {
  //     setSize(size + 10);
  //     setCurrentList((currentList) => [...currentList, list.slice(size)]);
  //   }
  // });

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `${process.env.REACT_APP_URL}/api/items/${shareType}`
      );

      setList(data);
    };

    fetchData();
  }, [shareType]);

  // useEffect(() => {
  //   if (!fetchMoreTrigger.current) return;

  //   fetchMoreObserver.observe(fetchMoreTrigger.current);

  //   return () => fetchMoreObserver.disconnect();
  // }, [fetchMoreObserver]);

  return (
    <Layout>
      <Header />

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          gap: "98px",
        }}
      >
        <S.Input type="button" value="배달 쉐어" />
        <S.Input type="button" value="재료 쉐어" />
      </div>

      <section
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        {LIST.map((item) => (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",

              padding: "0px 16px",
              borderRadius: "8px",
            }}
            key={item?.id}
          >
            <img
              style={{
                width: "328px",
                height: "150px",
              }}
              src={LargeLogo}
              alt=""
            />

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "2.89",

                padding: "7px 24px",
              }}
            >
              <div
                style={{
                  fontFamily: "Pretendard",
                  fontWeight: 700,
                  fontSize: "18px",
                  lineHeight: "28px",
                  color: "#010101",
                }}
              >
                {item?.title}
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span
                  style={{
                    fontFamily: "Pretendard",
                    fontWeight: 600,
                    fontSize: "15px",
                    lineHeight: "24px",
                    color: "#010101",
                  }}
                >
                  {item?.price}원
                  <span
                    style={{
                      display: "inline-block",
                      marginLeft: "4px",
                      fontFamily: "Poppins",
                      fontWeight: 400,
                      fontSize: "11px",
                      lineHeight: "16px",
                      textDecorationLine: "line-through",
                      color: "#A8A8A8",
                      opacity: 0.6,
                    }}
                  >
                    원가 {item?.originalPrice}
                  </span>
                </span>

                <div style={{ display: "flex", gap: "4px" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "2px 8px",
                      background: "#FF5C21",
                      borderRadius: "4px",
                    }}
                  >
                    인원: {item?.maxPeopleNumber - 1}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "2px 8px",
                      background: "#FF5C21",
                      borderRadius: "4px",
                    }}
                  >
                    장소: {item?.region}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div ref={fetchMoreTrigger}></div>;
      </section>
    </Layout>
  );
}

export default Share;
