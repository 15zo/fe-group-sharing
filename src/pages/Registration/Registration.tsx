import React, { useState } from "react";
import axios from "axios";
import moment from "moment";
import DatePicker from "react-datepicker";

import { Layout } from "../../components";
import Header from "../../components/common/Header";
import Input from "./Input";
import { useLocation, useNavigate } from "react-router-dom";

function Registration() {
  const location = useLocation();
  const navigate = useNavigate();

  console.log(location.pathname);

  const [values, setValues] = useState({
    contents: "",
    file: new File([], ""),
    location: "",
    maxPeopleNumber: 0,
    originalPrice: 0,
    price: 0,
    region: "서울/송파구",
    title: "",
  });

  const [endAt, setEndAt] = useState(moment().format("YYYY-MM-DD"));

  const changeValues = async (
    { target }: React.ChangeEvent<HTMLInputElement>,
    idx?: number
  ) => {
    const { name, value, files } = target;

    if (files) {
      const file = files[0];

      setValues({
        ...values,
        file,
      });
    }

    if (name === "endAt") {
      setEndAt(value);
    }

    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <Layout>
      <Header />

      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          margin: "0 30.5px",
        }}
        onSubmit={async (e) => {
          e.preventDefault();

          navigate("/delivery");

          const formData = new FormData();
          formData.append("contents", values.contents);
          formData.append("endAt", new Date(endAt).toISOString());
          formData.append("file", values?.file);
          formData.append("location", values?.location);
          formData.append("maxPeopleNumber", `${values?.maxPeopleNumber}`);
          formData.append("originalPrice", `${values?.originalPrice}`);
          formData.append("price", `${values?.price}`);
          formData.append("region", `${values?.region}`);
          formData.append("title", `${values?.title}`);

          await axios.post(
            `${process.env.REACT_APP_URL}/api/items/${
              location.pathname.split("/")[2]
            }`,
            formData
          );
        }}
      >
        <div>
          <Input
            type="file"
            name="file"
            accept="image/*"
            style={{ display: "none" }}
            multiple={false}
            value={values.file.name}
            onChange={changeValues}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <Input
            type="text"
            name="contents"
            placeholder="글 제목"
            onChange={changeValues}
          />

          <div style={{ display: "flex", gap: "8px" }}>
            <Input name="price" placeholder="₩ 가격" onChange={changeValues} />
            <Input
              name="originalPrice"
              placeholder="₩ 원가"
              onChange={changeValues}
            />
          </div>

          <div style={{ display: "flex", gap: "8px" }}>
            <Input name="region" defaultValue="서울/송파구" readOnly />
            <Input
              name="location"
              placeholder="쉐어 장소(ex: 강남역)"
              value={values.location}
              onChange={changeValues}
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "8px",
              }}
            >
              <Input
                type="date"
                name="endAt"
                placeholder="D-00 일"
                value={endAt}
                onChange={changeValues}
              />

              {/* <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontFamily: "Noto Sans KR",
                  fontWeight: 400,
                  fontSize: "12px",
                  lineHeight: "8px",
                  color: "#808080",
                }}
              >
                까지
              </div> */}
            </div>

            <div
              style={{
                display: "flex",
                gap: "8px",
              }}
            >
              <Input
                name="maxPeopleNumber"
                placeholder="모집 인원"
                onChange={changeValues}
                value={values.maxPeopleNumber}
              />
              {/* 
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontFamily: "Noto Sans KR",
                  fontWeight: 400,
                  fontSize: "12px",
                  lineHeight: "8px",
                  color: "#808080",
                }}
              >
                명 모집
              </div> */}
            </div>
          </div>
        </div>

        <div style={{ minHeight: "236px" }}>
          <input
            type="text"
            name="contents"
            style={{
              fontFamily: "Pretendard",
              fontWeight: 400,
              fontSize: "13px",
              height: "40px",
              lineHeight: "20px",
              padding: "11px 16px",

              display: "flex",
              width: "100%",
              letterSpacing: "0.4px",
              color: "#808080",
              minHeight: "236px",
            }}
            placeholder="내용을 입력해주세요"
            onChange={changeValues}
          />
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            height: "42px",
            borderRadius: "4px",
            background: "#FF5C21",
          }}
        >
          모집하기
        </button>
      </form>
    </Layout>
  );
}

export default Registration;
