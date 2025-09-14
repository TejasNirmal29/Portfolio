import { lazy } from "react";

const homeRoutes = [
  {
    path: "/",
    component: lazy(() => import("@views/Home")),
    protected: true,
  },
];

export default homeRoutes;
