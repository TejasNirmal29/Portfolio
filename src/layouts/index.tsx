import React, { ReactNode, Fragment, FC } from "react";
import AppHeader from "@components/Header";
import AppFooter from "@components/Footer";
import { Layout } from "antd";
import { useSmoothScroll } from "@db/useSmoothScroll"; 

const { Content } = Layout;

interface AppLayoutProps {
  children: ReactNode;
  footer?: boolean;
}

const AppLayout: FC<AppLayoutProps> = ({ children, footer = true }) => {
  useSmoothScroll({});

  return (
    <Fragment>
      <AppHeader />
      <Content
        style={{
          position: "relative",
          background: "linear-gradient(180deg, #001529 0%, #0a1f44 100%)",
          opacity: 0.9,
          minHeight: "calc(100vh - 64px)",
          overflow: "hidden",
        }}
      >
        {children}
      </Content>
      {footer && <AppFooter />}
    </Fragment>
  );
};

export default AppLayout;
