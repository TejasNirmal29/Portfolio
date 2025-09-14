import { lazy } from "react";

const projectRoutes = [
  {
    path: "/projects",
    component: lazy(() => import("@views/Projects")),
    protected: true,
  },
];

export default projectRoutes;