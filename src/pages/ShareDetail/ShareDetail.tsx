import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { Layout } from "../../components";
import Header from "../../components/common/Header";
import { Delivery, Ingredient } from "../Share/types";

function ShareDetail() {
  const { id } = useParams();

  const [data, setData] = useState<Delivery | Ingredient>();

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `${process.env.REACT_APP_URL}/api/items/${id}`
      );

      setData(data);
    };

    fetchData();
  }, [id]);

  return (
    <Layout>
      <Header />

      {data && (
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24.5px",
          }}
        >
          <img src={data?.filePath} alt="" />

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
              {data?.title}
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
                {data?.price}원
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
                  {data?.originalPrice}
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
                  {data?.maxPeopleNumber - 1}
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
                  {data?.region}
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              padding: "11px 16px",
              fontFamily: "Pretendard",
              fontWeight: 400,
              fontSize: "13px",
              lineHeight: "20px",

              display: "flex",
              alignItems: "center",
              letterSpacing: "0.4px",

              color: "#757575",
            }}
          >
            {data?.contents}
          </div>
        </section>
      )}
    </Layout>
  );
}

export default ShareDetail;
