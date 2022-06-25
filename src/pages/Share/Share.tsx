import React, { useEffect, useRef, useState } from "react";
import { Layout } from "../../components";

import * as S from "./Share.style";
import { LIST } from "./mock";

// TODO: Infinite Scroll

interface Props {
  shareType: string;
}

function Share({ shareType }: Props) {
  // TODO: api get (shareType)
  const [page, setPage] = useState(0);
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMoreTrigger = useRef<HTMLInputElement>(null);

  const fetchMoreObserver = new IntersectionObserver(([{ isIntersecting }]) => {
    if (isIntersecting) setPage((page) => page + 1);
  });

  // TODO: API CALL
  useEffect(() => {
    setLoading(true);

    const list = LIST;

    console.log(list);

    // setList((prev) => [...prev, ...list]);

    setLoading(false);
  }, [page]);

  useEffect(() => {
    if (!fetchMoreTrigger.current) return;

    fetchMoreObserver.observe(fetchMoreTrigger.current);

    return () => fetchMoreObserver.disconnect();
  }, []);

  return (
    <Layout>
      <section>
        <input type="button" value="배달 쉐어" />
        <input type="button" value="재료 쉐어" />

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
        <div ref={fetchMoreTrigger}></div>;
      </section>
    </Layout>
  );
}

export default Share;
