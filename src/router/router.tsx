import { RouteObject } from "react-router-dom";

import { Error, NotFound, Login, Main, Share, ShareDetail } from "../pages";
import ProtectedRoute from "./ProtectedRoute";
import RedirectRoute from "./RedirectedRoute";

export const routes: RouteObject[] = [
  { path: "/", element: <RedirectRoute /> },
  { path: "/login", element: <Login /> },
  // { path: '/callback', element: <LoginCallback /> },
  { path: "/error", element: <Error /> },
  {
    element: <ProtectedRoute />,
    children: [{ path: "/main", element: <Main /> }],
  },
  // FIXME:
  {
    element: <ProtectedRoute />,
    children: [{ path: "/share", element: <Share shareType="delivery" /> }],
  },
  {
    element: <ProtectedRoute />,
    children: [{ path: "/share/:id", element: <ShareDetail /> }],
  },

  { path: "*", element: <NotFound /> },
];
