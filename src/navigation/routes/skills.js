import { lazy } from "react";

const skillsRoutes = [
  {
    path: "/skills",
    component: lazy(() => import("@views/Skills")),
    protected: true,
  },
];

export default skillsRoutes;