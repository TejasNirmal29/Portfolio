import React from "react";
import {
  Typography,
  Button,
  Space,
  Avatar,
  Badge,
  Row,
  Col,
  Grid,
  FloatButton,
  Tooltip,
  Layout,
} from "antd";
import { useNavigate } from "react-router-dom";
import {
  RocketOutlined,
  SendOutlined,
  ProjectOutlined,
  GithubOutlined,
  LinkedinOutlined,
  InstagramOutlined,
  ArrowUpOutlined,
} from "@ant-design/icons";
import { TypingEffect } from "@components/Common";
import { personalInfo, socialLinks } from "@db/navigation";
import AppLayout from "@layouts";
const { Content } = Layout;
const { Title, Paragraph } = Typography;
const { useBreakpoint } = Grid;

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const screens = useBreakpoint();

  const containerStyle: React.CSSProperties = {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: screens.md ? "2rem" : "1rem",
    position: "relative",
  };

  const contentStyle: React.CSSProperties = {
    animation: "fadeInUp 0.8s ease-out",
  };

  const avatarStyle: React.CSSProperties = {
    border: "5px solid rgba(255, 255, 255, 0.3)",
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
    animation: "float 6s ease-in-out infinite",
  };

  const primaryButtonStyle: React.CSSProperties = {
    borderRadius: "25px",
    height: "50px",
    fontSize: "16px",
    background: "linear-gradient(135deg, #1890ff, #722ed1)",
    border: "none",
    fontWeight: 600,
    padding: "0 2rem",
  };

  const secondaryButtonStyle: React.CSSProperties = {
    borderRadius: "25px",
    height: "50px",
    fontSize: "16px",
    background: "rgba(255, 255, 255, 0.1)",
    color: "white",
    border: "2px solid rgba(255, 255, 255, 0.3)",
    backdropFilter: "blur(10px)",
    fontWeight: 600,
    padding: "0 2rem",
  };

  const socialButtonStyle: React.CSSProperties = {
    background: "rgba(255, 255, 255, 0.1)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    color: "white",
    backdropFilter: "blur(10px)",
    transition: "all 0.3s ease",
  };

  return (
    <AppLayout>
      <div style={containerStyle}>
        <Row
          gutter={[48, 48]}
          align="middle"
          style={{ maxWidth: 1200, width: "100%" }}
        >
          <Col xs={24} lg={12}>
            <div style={contentStyle}>
              <Badge.Ribbon text="Available for Work" color="#52c41a">
                <div style={{ padding: "2rem 0" }}>
                  <Title
                    level={1}
                    style={{
                      color: "white",
                      fontSize: screens.md ? "3.5rem" : "2.5rem",
                      marginBottom: "1rem",
                      fontWeight: 800,
                      lineHeight: 1.2,
                    }}
                  >
                    Hi, I'm{" "}
                    <span className="gradient-text">{personalInfo.name}</span>
                  </Title>

                  <Title
                    level={2}
                    style={{
                      color: "rgba(255, 255, 255, 0.9)",
                      fontWeight: 400,
                      marginBottom: "2rem",
                      fontSize: screens.md ? "1.8rem" : "1.4rem",
                    }}
                  >
                    I'm a{" "}
                    <TypingEffect
                      words={[
                        "Full Stack Developer",
                        "Java Developer",
                        "React Specialist",
                        "Problem Solver",
                      ]}
                    />
                  </Title>

                  <Paragraph
                    style={{
                      color: "rgba(255, 255, 255, 0.8)",
                      fontSize: "1.2rem",
                      marginBottom: "3rem",
                      maxWidth: 500,
                      lineHeight: 1.6,
                    }}
                  >
                    {personalInfo.bio}
                  </Paragraph>

                  <Space size="large" wrap>
                    <Button
                      type="primary"
                      size="large"
                      icon={<ProjectOutlined />}
                      onClick={() => navigate("/projects")}
                      style={primaryButtonStyle}
                      className="hover-lift"
                    >
                      View My Work
                    </Button>
                    <Button
                      size="large"
                      icon={<SendOutlined />}
                      onClick={() => navigate("/contact")}
                      style={secondaryButtonStyle}
                      className="hover-lift"
                    >
                      Get In Touch
                    </Button>
                  </Space>
                </div>
              </Badge.Ribbon>
            </div>
          </Col>

          <Col xs={24} lg={12}>
            <div style={{ textAlign: "center" }}>
              <div className="floating-animation">
                <Avatar
                  size={screens.md ? 350 : 250}
                  src={personalInfo.avatar}
                  style={avatarStyle}
                />
              </div>

              <div style={{ marginTop: "2rem" }}>
                <Space size="large">
                  {socialLinks.map((social) => (
                    <Tooltip key={social.name} title={social.name}>
                      <Button
                        shape="circle"
                        size="large"
                        icon={social.icon}
                        href={social.url}
                        target={
                          social.url.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          social.url.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        style={socialButtonStyle}
                        className="hover-lift"
                      />
                    </Tooltip>
                  ))}
                </Space>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </AppLayout>
  );
};

export default HomePage;
