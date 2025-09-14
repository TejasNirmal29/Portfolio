import React, { useState } from "react";
import {
  Layout,
  Typography,
  Button,
  Space,
  Menu,
  Drawer,
  Grid,
  Image,
} from "antd";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  MenuOutlined,
  CloseOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
import { navItems, personalInfo } from "@/db/navigation";

const { Header } = Layout;
const { Title } = Typography;
const { useBreakpoint } = Grid;

const AppHeader: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const screens = useBreakpoint();

  const currentPath = location.pathname || "/home";

  const handleNavigation = (path: string) => {
    navigate(path);
    setMobileMenuOpen(false);
  };

  const headerStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 1000,
    background: "rgba(255, 255, 255, 0.95)",
    backdropFilter: "blur(10px)",
    borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
    padding: "0 2rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  };

  const logoStyle: React.CSSProperties = {
    margin: 0,
    background: "linear-gradient(135deg, #1890ff, #722ed1)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    fontSize: "1.8rem",
    fontWeight: 700,
  };

  return (
    <>
      <Header style={headerStyle}>
        {/* Logo */}
        <Link
          to="/home"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          {personalInfo.logoUrl ? (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "60px",
              }}
            >
              <Image
                src={personalInfo.logoUrl}
                alt="logo"
                preview={false}
                height={80}
                style={{
                  objectFit: "fill",
                  margin: 0,
                  padding: 10,
                }}
              />
            </div>
          ) : (
            <Title level={3} style={logoStyle}>
              {personalInfo.name.split(" ")[0]}
              <span style={{ color: "#722ed1" }}>.</span>
            </Title>
          )}
        </Link>

        {/* Desktop Menu */}
        {screens.md ? (
          <Space size="large">
            {navItems.map((item) => (
              <Button
                key={item.key}
                type="text"
                onClick={() => handleNavigation(item.path)}
                style={{
                  color: currentPath === item.path ? "#1890ff" : "#666",
                  fontWeight: currentPath === item.path ? 600 : 400,
                  border:
                    currentPath === item.path ? "2px solid #1890ff" : "none",
                  borderRadius: "20px",
                  padding: "6px 16px",
                  height: "auto",
                  transition: "all 0.3s ease",
                }}
              >
                {item.label}
              </Button>
            ))}
            <Button
              type="primary"
              icon={<DownloadOutlined />}
              style={{
                borderRadius: "20px",
                background: "linear-gradient(135deg, #1890ff, #722ed1)",
                border: "none",
                fontWeight: 500,
              }}
            >
              Download CV
            </Button>
          </Space>
        ) : (
          /* Mobile Menu Button */
          <Button
            type="text"
            icon={mobileMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ fontSize: "18px" }}
          />
        )}
      </Header>

      {/* Mobile Menu Drawer */}
      <Drawer
        title={
          <div style={{ display: "flex", alignItems: "center" }}>
            <Title level={4} style={{ ...logoStyle, fontSize: "1.5rem" }}>
              {personalInfo.name.split(" ")[0]}
              <span style={{ color: "#722ed1" }}>.</span>
            </Title>
          </div>
        }
        placement="right"
        onClose={() => setMobileMenuOpen(false)}
        open={mobileMenuOpen}
        bodyStyle={{ padding: 0 }}
        width={280}
      >
        <Menu
          mode="inline"
          selectedKeys={[currentPath]}
          style={{ borderRight: 0 }}
        >
          {navItems.map((item) => (
            <Menu.Item
              key={item.path}
              icon={item.icon}
              onClick={() => handleNavigation(item.path)}
              style={{
                margin: "8px 0",
                borderRadius: "8px",
                height: "48px",
                display: "flex",
                alignItems: "center",
              }}
            >
              {item.label}
            </Menu.Item>
          ))}
          <Menu.Divider />
          <Menu.Item
            key="cv"
            icon={<DownloadOutlined />}
            style={{
              margin: "8px 0",
              borderRadius: "8px",
              height: "48px",
              display: "flex",
              alignItems: "center",
              background: "linear-gradient(135deg, #1890ff, #722ed1)",
              color: "white",
            }}
          >
            Download CV
          </Menu.Item>
        </Menu>
      </Drawer>
    </>
  );
};

export default AppHeader;
