import React from "react";
import { Routes, Route } from "react-router-dom";
import routes from "./routes";
import NoMatch from "@/views/NoMatch";

function Navigation() {
  return (
    <Routes>
      {routes.map((Page, key) => (
        <Route key={key} path={Page.path} element={<Page.component />} />
      ))}
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}

export default Navigation;
