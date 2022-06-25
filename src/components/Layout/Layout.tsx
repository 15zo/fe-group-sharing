import React, { PropsWithChildren } from "react";

import * as S from "./Layout.style";

function Layout({ children }: PropsWithChildren<unknown>) {
  return <S.Layout>{children}</S.Layout>;
}

export default Layout;
