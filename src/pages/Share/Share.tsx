import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

import { Layout } from "../../components";

import * as S from "./Share.style";
import { Delivery, Ingredient } from "./types";

import LargeLogo from "../../assets/svg/logo-lg.svg";
import Header from "../../components/common/Header";
import WriteBanner from "../../components/common/WriteBanner";

interface Props {
  shareType: "delivery" | "ingredient";
}

function Share({ shareType }: Props) {
  const navigate = useNavigate();
  const { search } = useLocation();

  const [page, setPage] = useState(0);
  const [list, setList] = useState<Delivery[] | Ingredient[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchMoreTrigger = useRef<HTMLInputElement>(null);

  const fetchMoreObserver = new IntersectionObserver(([{ isIntersecting }]) => {
    if (isIntersecting) setPage((page) => page + 1);
  });

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `${process.env.REACT_APP_URL}/api/items/${shareType}?page=${page}`
      );

      setList((prev) => [...prev, ...data]);
    };

    fetchData();
  }, [page, shareType]);

  useEffect(() => {
    if (!fetchMoreTrigger.current) return;

    fetchMoreObserver.observe(fetchMoreTrigger.current);

    return () => fetchMoreObserver.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <Header />
      <WriteBanner />

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          gap: "98px",
        }}
      >
        <S.Input
          type="button"
          style={{
            cursor: "pointer",
            // FIXME:
            borderBottom: search === "delivery" ? "2px solid black" : "",
          }}
          value="배달 쉐어"
          onClick={() => {
            navigate("/delivery");
            setList([]);
            setPage(0);
          }}
        />

        <S.Input
          type="button"
          style={{
            cursor: "pointer",
            border: search === "ingredient" ? "2px solid gray" : "",
          }}
          value="재료 쉐어"
          onClick={() => {
            navigate("/ingredient");
            setList([]);
            setPage(0);
          }}
        />
      </div>

      <section
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        {list.map((item) => (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",

              padding: "0px 16px",
              borderRadius: "8px",
            }}
            key={item?.id}
            onClick={() =>
              navigate(`../${shareType}/${item?.id}`, { replace: true })
            }
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
