import { lazy } from "react";

const experienceRoutes = [
  {
    path: "/experience",
    component: lazy(() => import("@views/Experience")),
    protected: true,
  },
];

export default experienceRoutes;
