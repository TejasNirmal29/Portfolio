import React from "react";
import { Typography, Card, Tag, Space, Button, Row, Col } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import { PageHeader } from "@components/Common";
import { personalInfo } from "@db/navigation";
import AppLayout from "@layouts";

const { Title, Paragraph, Text } = Typography;

const AboutPage: React.FC = () => {
  const frontendSkills = [
    "React.js",
    "Redux",
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "Ant Design",
    "Bootstrap",
    "React Native"
  ];
  const backendSkills = [
    "Node.js", 
    "Express.js", 
    "RESTful APIs", 
    "C++", 
    "C#",
    "API Architecture"
  ];
  const databaseSkills = [
    "PostgreSQL", 
    "MongoDB", 
    "Prisma ORM", 
    "Database Optimization",
    "SQL"
  ];
  const toolsSkills = [
    "Git", 
    "Bitbucket", 
    "Jira", 
    "Visual Studio Code",
    "Project Management"
  ];

  const cardStyle: React.CSSProperties = {
    border: "none",
    borderRadius: "20px",
    background: "rgba(255, 255, 255, 0.95)",
    backdropFilter: "blur(10px)",
    transition: "all 0.3s ease",
    height: "100%",
  };

  const skillTagStyle = (color: string): React.CSSProperties => ({
    padding: "6px 12px",
    borderRadius: "15px",
    fontSize: "0.9rem",
    fontWeight: 500,
    margin: "4px",
  });

  return (
    <AppLayout>
      <div style={{ padding: "20px", maxWidth: 1200, margin: "0 auto" }}>
        <PageHeader
          title="About Me"
          subtitle="Associate Software Developer with proven expertise in full-stack development and enterprise solutions"
        />

        <Row gutter={[48, 48]}>
          {/* Personal Introduction */}
          <Col xs={24} lg={12}>
            <Card style={cardStyle} className="hover-lift">
              <Title
                level={4}
                style={{ color: "#1890ff", marginBottom: "1.5rem" }}
              >
                My Professional Journey 🚀
              </Title>
              <Paragraph
                style={{
                  fontSize: "1.1rem",
                  lineHeight: 1.7,
                  marginBottom: "1rem",
                }}
              >
                I am a Software Engineer with 5+ months of professional experience at 
                EnLivenDX Solutions, specializing in enterprise-level full-stack applications. 
                My expertise spans modern web technologies including React, Node.js, MongoDB, 
                and RESTful API architecture.
              </Paragraph>
              <Paragraph
                style={{
                  fontSize: "1.1rem",
                  lineHeight: 1.7,
                  marginBottom: "1rem",
                }}
              >
                I have successfully architected and developed scalable ERP solutions, 
                educational portals, and enterprise applications with robust security 
                implementations. My experience includes building comprehensive systems 
                like SkoolSure (School ERP) and CuddleCrew (Multi-Tenant SaaS Platform).
              </Paragraph>
              <Paragraph
                style={{
                  fontSize: "1.1rem",
                  lineHeight: 1.7,
                  marginBottom: "2rem",
                }}
              >
                As a two-time TECHFIESTA hackathon finalist with a 2nd rank achievement, 
                I bring both technical excellence and competitive problem-solving skills 
                to every project. I excel in client communication, project management, 
                and delivering high-quality software solutions on schedule.
              </Paragraph>

              <Space
                direction="vertical"
                size="middle"
                style={{ width: "100%" }}
              >
                <div>
                  <Text strong style={{ fontSize: "1rem", color: "#722ed1" }}>
                    💼 Current Role:
                  </Text>
                  <Text style={{ marginLeft: "0.5rem", fontSize: "1rem" }}>
                    Associate Software Developer at Riveda Consulting Private Limited
                  </Text>
                </div>
                <div>
                  <Text strong style={{ fontSize: "1rem", color: "#722ed1" }}>
                    🎯 Specialization:
                  </Text>
                  <Text style={{ marginLeft: "0.5rem", fontSize: "1rem" }}>
                    Enterprise Full-Stack Development & API Architecture
                  </Text>
                </div>
                <div>
                  <Text strong style={{ fontSize: "1rem", color: "#722ed1" }}>
                    📍 Location:
                  </Text>
                  <Text style={{ marginLeft: "0.5rem", fontSize: "1rem" }}>
                    Shirdi, Maharashtra
                  </Text>
                </div>
                <div>
                  <Text strong style={{ fontSize: "1rem", color: "#722ed1" }}>
                    🎓 Education:
                  </Text>
                  <Text style={{ marginLeft: "0.5rem", fontSize: "1rem" }}>
                    BE Computer Engineering (CGPA: 8.43)
                  </Text>
                </div>
                <div>
                  <Text strong style={{ fontSize: "1rem", color: "#722ed1" }}>
                    🏆 Achievement:
                  </Text>
                  <Text style={{ marginLeft: "0.5rem", fontSize: "1rem" }}>
                    2nd Rank at TECHFIESTA International Hackathon
                  </Text>
                </div>
              </Space>

              <Button
                type="primary"
                icon={<DownloadOutlined />}
                size="large"
                style={{
                  borderRadius: "15px",
                  marginTop: "2rem",
                  background: "linear-gradient(135deg, #1890ff, #722ed1)",
                  border: "none",
                  fontWeight: 600,
                }}
                className="hover-lift"
              >
                Download Resume
              </Button>
            </Card>
          </Col>

          {/* Skills Section */}
          <Col xs={24} lg={12}>
            <Space direction="vertical" size="large" style={{ width: "100%" }}>
              {/* Frontend Skills */}
              <Card style={cardStyle} className="hover-lift">
                <Title
                  level={4}
                  style={{ color: "#1890ff", marginBottom: "1.5rem" }}
                >
                  Frontend Development 🎨
                </Title>
                <Space wrap>
                  {frontendSkills.map((skill) => (
                    <Tag key={skill} color="blue" style={skillTagStyle("blue")}>
                      {skill}
                    </Tag>
                  ))}
                </Space>
              </Card>

              {/* Backend Skills */}
              <Card style={cardStyle} className="hover-lift">
                <Title
                  level={4}
                  style={{ color: "#52c41a", marginBottom: "1.5rem" }}
                >
                  Backend Development ⚙️
                </Title>
                <Space wrap>
                  {backendSkills.map((skill) => (
                    <Tag
                      key={skill}
                      color="green"
                      style={skillTagStyle("green")}
                    >
                      {skill}
                    </Tag>
                  ))}
                </Space>
              </Card>

              {/* Database Skills */}
              <Card style={cardStyle} className="hover-lift">
                <Title
                  level={4}
                  style={{ color: "#722ed1", marginBottom: "1.5rem" }}
                >
                  Database & Storage 🗄️
                </Title>
                <Space wrap>
                  {databaseSkills.map((skill) => (
                    <Tag
                      key={skill}
                      color="purple"
                      style={skillTagStyle("purple")}
                    >
                      {skill}
                    </Tag>
                  ))}
                </Space>
              </Card>

              {/* Tools & Technologies */}
              <Card style={cardStyle} className="hover-lift">
                <Title
                  level={4}
                  style={{ color: "#fa8c16", marginBottom: "1.5rem" }}
                >
                  Tools & Technologies 🛠️
                </Title>
                <Space wrap>
                  {toolsSkills.map((skill) => (
                    <Tag
                      key={skill}
                      color="orange"
                      style={skillTagStyle("orange")}
                    >
                      {skill}
                    </Tag>
                  ))}
                </Space>
              </Card>
            </Space>
          </Col>
        </Row>

        {/* Professional Highlights */}
        <Row gutter={[32, 32]} style={{ marginTop: "4rem" }}>
          <Col xs={24}>
            <Card style={cardStyle} className="hover-lift">
              <Title
                level={4}
                style={{ color: "#1890ff", marginBottom: "1.5rem" }}
              >
                Professional Highlights 🌟
              </Title>
              <Row gutter={[32, 24]}>
                <Col xs={24} md={8}>
                  <div style={{ textAlign: "center", padding: "1rem" }}>
                    <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>
                      🏢
                    </div>
                    <Title level={5}>Enterprise Solutions</Title>
                    <Text type="secondary">
                      Built scalable ERP systems and multi-tenant SaaS platforms 
                      serving educational institutions and businesses
                    </Text>
                  </div>
                </Col>
                <Col xs={24} md={8}>
                  <div style={{ textAlign: "center", padding: "1rem" }}>
                    <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>
                      ⚡
                    </div>
                    <Title level={5}>Performance Optimization</Title>
                    <Text type="secondary">
                      Expert in database query optimization, API performance tuning, 
                      and frontend optimization techniques
                    </Text>
                  </div>
                </Col>
                <Col xs={24} md={8}>
                  <div style={{ textAlign: "center", padding: "1rem" }}>
                    <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>
                      🤝
                    </div>
                    <Title level={5}>Client Collaboration</Title>
                    <Text type="secondary">
                      Proven track record in client communication, daily project 
                      updates, and cross-functional team collaboration
                    </Text>
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </div>
    </AppLayout>
  );
};

export default AboutPage;