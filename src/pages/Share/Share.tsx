import React from "react";
import { Layout } from "../../components";

// FIXME: remove img
import LargeLogo from "../../assets/svg/logo-lg.svg";
import * as S from "./Share.style";

// TODO: Infinite Scroll

interface Props {
  shareType: string;
}

const LIST = [
  {
    id: 0,
    title: "제목입니다.",
    price: 1234,
    category: "재료",
    endAt: new Date().toLocaleString(),
    filePath: LargeLogo,
    placeName: "아이템 1",
    limit: 4,
    userId: 123,
  },
  {
    id: 1,
    title: "제목입니다요.",
    price: 1234,
    category: "재료",
    endAt: new Date().toLocaleString(),
    filePath: LargeLogo,
    placeName: "아이템 2",
    limit: 4,
    userId: 234,
  },
  {
    id: 2,
    title: "제목입니다요요",
    price: 1234,
    category: "재료",
    endAt: new Date().toLocaleString(),
    filePath: LargeLogo,
    placeName: "아이템 3",
    limit: 4,
    userId: 345,
  },
];

function Share({ shareType }: Props) {
  // TODO: api get (shareType)

  return (
    <Layout>
      <section>
        <input>배달 쉐어</input>
        <input>재료 쉐어</input>

        <button>현 위치</button>
      </section>

      <section>
        {LIST.map((item) => (
          <S.Item key={item?.id}>
            <S.ItemHeader>
              <div>몇시 배달: {item?.endAt}</div>
              <div>북마크 여부</div>
            </S.ItemHeader>

            <S.ItemImage src={item?.filePath} alt="" />

            <S.ItemBottom>
              <div>
                <span>제목: {item?.title}</span>
                <span>가격: {item?.price}</span>
              </div>

              <div>
                <span>인원: {item?.limit - 1}</span>
                <span>장소: {item?.placeName}</span>
              </div>
            </S.ItemBottom>
          </S.Item>
        ))}
      </section>
    </Layout>
  );
}

export default Share;
