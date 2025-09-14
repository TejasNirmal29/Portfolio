import { lazy } from "react";

const aboutRoutes = [
  {
    path: "/about",
    component: lazy(() => import("@views/About")),
    protected: true,
  },
];

export default aboutRoutes;
