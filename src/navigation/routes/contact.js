import { lazy } from "react";

const contactRoutes = [
  {
    path: "/contact",
    component: lazy(() => import("@views/Contact")),
    protected: true,
  },
];

export default contactRoutes;
