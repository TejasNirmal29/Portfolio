import React, { Suspense as AppLoading, useState } from "react";
import Navigation from "@/navigation";
import { FloatButton } from "antd";
import { ArrowUpOutlined, SendOutlined } from "@ant-design/icons";
import { BrowserRouter as AppRouter } from "react-router-dom";
import Fallback from "@components/Fallback";
import { ConfigProvider as AppTheme } from "antd";
import { ParticleBackground, GlobalStyles } from "@components/Common";
import themes from "@/themes";

import "./i18n";
function App() {
  const [theme, setTheme] = useState(themes.light);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToContact = () => {
    // For now, navigate to contact page
    window.location.href = "/contact";
  };

  return (
    <AppLoading fallback={<Fallback />}>
      <AppRouter>
        <AppTheme theme={theme} componentSize="large">
          <GlobalStyles />
          <ParticleBackground />
          <Navigation />
          <FloatButton.Group shape="circle" style={{ right: 24 }}>
            <FloatButton
              icon={<ArrowUpOutlined />}
              onClick={scrollToTop}
              tooltip="Back to Top"
            />
            <FloatButton
              icon={<SendOutlined />}
              onClick={scrollToContact}
              tooltip="Contact Me"
              type="primary"
            />
          </FloatButton.Group>
        </AppTheme>
      </AppRouter>
    </AppLoading>
  );
}

export default App;
