import { RouteObject } from "react-router-dom";

import {
  Error,
  NotFound,
  Login,
  Main,
  Share,
  ShareDetail,
  Registration,
} from "../pages";
import ProtectedRoute from "./ProtectedRoute";
import RedirectRoute from "./RedirectedRoute";

export const routes: RouteObject[] = [
  { path: "/", element: <RedirectRoute /> },
  { path: "/login", element: <Login /> },
  // { path: '/callback', element: <LoginCallback /> },
  { path: "/error", element: <Error /> },
  {
    element: <ProtectedRoute />,
    children: [
      { path: "/main", element: <Main /> },
      { path: "/delivery", element: <Share shareType="delivery" /> },
      { path: "/delivery/:id", element: <ShareDetail /> },
      { path: "/ingredient", element: <Share shareType="ingredient" /> },
      { path: "/ingredient/:id", element: <ShareDetail /> },
      {
        path: "/regist/:type",
        element: <Registration />,
      },
    ],
  },
  { path: "*", element: <NotFound /> },
];
