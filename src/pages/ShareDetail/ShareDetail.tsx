import React from "react";

import { Layout } from "../../components";

interface Props {
  filePath: string;
  title: string;
  price: number;
  maxPeopleNumber: number;
  region: string;
  contents: string;
}

function ShareDetail({
  filePath,
  title,
  price,
  maxPeopleNumber,
  region,
  contents,
}: Props) {
  return (
    <Layout>
      <section>
        {/* TODO: 이미지 슬라이드 */}
        <img src={filePath} alt="" />

        <div>
          <div>
            <div>제목: {title}</div>
            <div>가격: {price}</div>

            <div>
              <span>인원: {maxPeopleNumber}</span>
              <span>장소: {region}</span>
            </div>
          </div>

          <div>
            인원
            {/* TODO: 참여하기 */}
          </div>
        </div>

        <div>{contents}</div>
      </section>
    </Layout>
  );
}

export default ShareDetail;
