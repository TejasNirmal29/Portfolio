import React, { useState, useEffect } from "react";
import {
  Card,
  Row,
  Col,
  Progress,
  Tag,
  Typography,
  Space,
  Button,
  Modal,
  Badge,
  Tooltip,
  Statistic,
  Avatar,
} from "antd";
import {
  CodeOutlined,
  DatabaseOutlined,
  CloudOutlined,
  ToolOutlined,
  MobileOutlined,
  RocketOutlined,
  TrophyOutlined,
  BookOutlined,
  GlobalOutlined,
  EyeOutlined,
  StarOutlined,
  FireOutlined,
} from "@ant-design/icons";
import AppLayout from "@layouts";
import { PageHeader } from "@components/Common";
const { Title, Text, Paragraph } = Typography;

interface Skill {
  name: string;
  level: number;
  experience: string;
  icon?: React.ReactNode;
  color?: string;
  description?: string;
  projects?: string[];
  logoUrl?: string;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  color: string;
  skills: Skill[];
  description: string;
}

const SkillsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<SkillCategory | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [counters, setCounters] = useState({
    skills: 0,
    years: 0,
    projects: 0,
    certs: 0,
  });

  // Technology logo URLs from CDN
  const techLogos = {
    javascript:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    typescript:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    cplusplus:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    csharp:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
    react:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    redux:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    nextjs:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    html5:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    css3: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    nodejs:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    express:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    postgresql:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    mongodb:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    aws: "https://devicon-website.vercel.app/api/amazonwebservices/original-wordmark.svg",
    docker:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    ubuntu: "https://devicon-website.vercel.app/api/ubuntu/plain.svg",
    git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    vscode:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    bootstrap:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    graphql:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
    python:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    sql: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    antdesign:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/antdesign/antdesign-original.svg",
    reactnative:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    prisma:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
    bitbucket:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg",
    jira: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
  };

  const skillCategories: SkillCategory[] = [
    {
      title: "Programming Languages",
      icon: <CodeOutlined />,
      color: "#1890ff",
      description: "Core programming languages with strong proficiency",
      skills: [
        {
          name: "JavaScript",
          level: 85,
          experience: "2+ years",
          color: "#f7df1e",
          description:
            "Expert in ES6+, async/await, closures, and modern JavaScript patterns",
          projects: [
            "SkoolSure ERP",
            "CuddleCrew SaaS",
            "Smart Irrigation System",
          ],
          logoUrl: techLogos.javascript,
        },
        {
          name: "TypeScript",
          level: 50,
          experience: "0.5+ years",
          color: "#3178c6",
          description:
            "Strong typing, interfaces, generics, and enterprise-level applications",
          projects: ["Enterprise Applications", "Type-safe APIs"],
          logoUrl: techLogos.typescript,
        },
        {
          name: "SQL",
          level: 70,
          experience: "2+ years",
          color: "#336791",
          description:
            "Complex queries, joins, subqueries, stored procedures, and database optimization",
          projects: [
            "SkoolSure ERP",
            "CuddleCrew SaaS",
            "Database Design Projects",
          ],
          logoUrl: techLogos.sql,
        },
        {
          name: "Java",
          level: 60,
          experience: "1+ years",
          color: "#ed8b00",
          description:
            "Object-oriented programming, Spring framework, and enterprise development",
          projects: ["Backend Services", "Enterprise Solutions"],
          logoUrl: techLogos.java,
        },
        {
          name: "C++",
          level: 50,
          experience: "1+ years",
          color: "#00599c",
          description:
            "Data structures, algorithms, and competitive programming",
          projects: ["Academic Projects", "Problem Solving"],
          logoUrl: techLogos.cplusplus,
        },
        {
          name: "C#",
          level: 60,
          experience: "0.5+ years",
          color: "#239120",
          description: ".NET framework and Windows application development",
          projects: ["Desktop Applications", "Backend Services"],
          logoUrl: techLogos.csharp,
        },
      ],
    },
    {
      title: "Frontend Technologies",
      icon: <GlobalOutlined />,
      color: "#52c41a",
      description: "Modern frontend frameworks and libraries",
      skills: [
        {
          name: "React.js",
          level: 80,
          experience: "2+ years",
          color: "#61dafb",
          description:
            "Hooks, Context API, performance optimization, and component architecture",
          projects: [
            "SkoolSure ERP",
            "CuddleCrew SaaS",
            "Smart Irrigation Dashboard",
          ],
          logoUrl: techLogos.react,
        },
        {
          name: "Redux",
          level: 75,
          experience: "0.5+ years",
          color: "#764abc",
          description:
            "State management, middleware, and complex application state",
          projects: ["SkoolSure ERP", "Multi-tenant Applications"],
          logoUrl: techLogos.redux,
        },
        {
          name: "HTML5",
          level: 95,
          experience: "3+ years",
          color: "#e34f26",
          description:
            "Semantic markup, accessibility, and modern web standards",
          projects: ["All Web Projects", "Responsive Designs"],
          logoUrl: techLogos.html5,
        },
        {
          name: "CSS3",
          level: 90,
          experience: "3+ years",
          color: "#1572b6",
          description: "Flexbox, Grid, animations, and responsive design",
          projects: ["Custom UI Components", "Mobile-first Design"],
          logoUrl: techLogos.css3,
        },
        {
          name: "Bootstrap",
          level: 85,
          experience: "2+ years",
          color: "#7952b3",
          description: "Responsive grid system and component library",
          projects: ["Responsive Web Applications", "Quick Prototyping"],
          logoUrl: techLogos.bootstrap,
        },
        {
          name: "Ant Design",
          level: 85,
          experience: "1+ years",
          color: "#1890ff",
          description: "Enterprise-class UI design language and components",
          projects: ["SkoolSure ERP", "Dashboard Applications", "Admin Panels"],
          logoUrl: techLogos.antdesign,
        },
        {
          name: "React Native",
          level: 30,
          experience: "Learning",
          color: "#61dafb",
          description: "Cross-platform mobile development with React paradigms",
          projects: ["Mobile App Prototypes", "Learning Projects"],
          logoUrl: techLogos.reactnative,
        },
      ],
    },
    {
      title: "Backend Technologies",
      icon: <DatabaseOutlined />,
      color: "#722ed1",
      description: "Server-side technologies and API development",
      skills: [
        {
          name: "Node.js",
          level: 75,
          experience: "2+ years",
          color: "#339933",
          description:
            "Event-driven architecture, microservices, and scalable applications",
          projects: ["CuddleCrew Backend", "RESTful APIs", "Real-time Systems"],
          logoUrl: techLogos.nodejs,
        },
        {
          name: "Express.js",
          level: 75,
          experience: "2+ years",
          color: "#000000",
          description:
            "Middleware, routing, authentication, and API development",
          projects: ["All Backend Projects", "Secure APIs"],
          logoUrl: techLogos.express,
        },
        // {
        //   name: "RESTful APIs",
        //   level: 85,
        //   experience: "2+ years",
        //   color: "#ff6b35",
        //   description:
        //     "API design patterns, HTTP methods, status codes, and documentation",
        //   projects: [
        //     "SkoolSure ERP APIs",
        //     "CuddleCrew Backend",
        //     "Third-party Integrations",
        //   ],
        //   logoUrl: techLogos.nodejs,
        // },
        // {
        //   name: "GraphQL",
        //   level: 75,
        //   experience: "1+ year",
        //   color: "#e10098",
        //   description: "Query language, resolvers, and efficient data fetching",
        //   projects: ["Modern API Development", "Data Optimization"],
        //   logoUrl: techLogos.graphql,
        // },
      ],
    },
    {
      title: "Database Management",
      icon: <DatabaseOutlined />,
      color: "#fa8c16",
      description: "Database design, optimization, and management",
      skills: [
        {
          name: "PostgreSQL",
          level: 50,
          experience: "2+ years",
          color: "#336791",
          description:
            "Advanced queries, indexing, triggers, and performance tuning",
          projects: [
            "SkoolSure ERP",
            "CuddleCrew SaaS",
            "Enterprise Applications",
          ],
          logoUrl: techLogos.postgresql,
        },
        {
          name: "MongoDB",
          level: 70,
          experience: "2+ years",
          color: "#47a248",
          description:
            "Document-based design, aggregation pipelines, and scalability",
          projects: ["Smart Irrigation System", "NoSQL Applications"],
          logoUrl: techLogos.mongodb,
        },
        {
          name: "Prisma ORM",
          level: 65,
          experience: "1+ years",
          color: "#2d3748",
          description:
            "Type-safe database client, migrations, and schema management",
          projects: ["Modern Backend Projects", "Database Abstraction"],
          logoUrl: techLogos.prisma,
        },
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: <CloudOutlined />,
      color: "#13c2c2",
      description: "Cloud platforms, deployment, and infrastructure",
      skills: [
        {
          name: "AWS",
          level: 40,
          experience: "1+ year",
          color: "#ff9900",
          description: "EC2",
          projects: ["Production Deployments", "Scalable Infrastructure"],
          logoUrl: techLogos.aws,
        },
        // {
        //   name: "Docker",
        //   level: 80,
        //   experience: "1+ year",
        //   color: "#2496ed",
        //   description:
        //     "Containerization, multi-stage builds, and orchestration",
        //   projects: ["Microservices", "Development Environment"],
        //   logoUrl: techLogos.docker,
        // },
        {
          name: "Ubuntu",
          level: 40,
          experience: "2+ years",
          color: "#e95420",
          description:
            "Server administration, shell scripting, and system management",
          projects: ["Production Servers", "Development Environment"],
          logoUrl: techLogos.ubuntu,
        },
      ],
    },
    {
      title: "Development Tools",
      icon: <ToolOutlined />,
      color: "#eb2f96",
      description: "Development environment and project management tools",
      skills: [
        {
          name: "Visual Studio Code",
          level: 95,
          experience: "3+ years",
          color: "#007acc",
          description:
            "Advanced debugging, extensions, and productivity optimization",
          projects: ["All Development Work", "Code Optimization"],
          logoUrl: techLogos.vscode,
        },
        {
          name: "Git",
          level: 90,
          experience: "3+ years",
          color: "#f05032",
          description:
            "Version control, branching strategies, and collaboration",
          projects: ["All Projects", "Team Collaboration"],
          logoUrl: techLogos.git,
        },
        {
          name: "Bitbucket",
          level: 75,
          experience: "1+ years",
          color: "#0052cc",
          description:
            "Code repository management, pull requests, and CI/CD pipelines",
          projects: ["Team Projects", "Code Reviews", "Deployment Pipelines"],
          logoUrl: techLogos.bitbucket,
        },
        {
          name: "Jira",
          level: 70,
          experience: "1+ years",
          color: "#0052cc",
          description:
            "Project management, issue tracking, and agile workflow management",
          projects: ["Project Planning", "Bug Tracking", "Sprint Management"],
          logoUrl: techLogos.jira,
        },
      ],
    },
  ];

  const stats = [
    {
      title: "Technical Skills",
      count: 35,
      suffix: "+",
      color: "#1890ff",
      icon: <CodeOutlined />,
    },
    {
      title: "Years Experience",
      count: 2,
      suffix: "+",
      color: "#52c41a",
      icon: <StarOutlined />,
    },
    {
      title: "Projects Delivered",
      count: 5,
      suffix: "+",
      color: "#722ed1",
      icon: <RocketOutlined />,
    },
    {
      title: "Certifications",
      count: 3,
      suffix: "",
      color: "#fa8c16",
      icon: <TrophyOutlined />,
    },
  ];

  const certifications = [
    {
      name: "Programming in Java",
      provider: "NPTEL",
      date: "2024",
      icon: <BookOutlined />,
      color: "#ed8b00",
    },
    {
      name: "Python for Machine Learning",
      provider: "GreatLearning",
      date: "2024",
      icon: <RocketOutlined />,
      color: "#3776ab",
    },
    {
      name: "Full Stack Web Development with React",
      provider: "Sumago Infotech",
      date: "2024",
      icon: <GlobalOutlined />,
      color: "#61dafb",
    },
  ];

  // Counter animation
  useEffect(() => {
    const targets = { skills: 35, years: 2, projects: 5, certs: 3 };
    let frame = 0;
    const animate = () => {
      frame++;
      if (frame <= 50) {
        setCounters({
          skills: Math.floor((targets.skills * frame) / 50),
          years: Math.floor((targets.years * frame) / 50),
          projects: Math.floor((targets.projects * frame) / 50),
          certs: Math.floor((targets.certs * frame) / 50),
        });
        requestAnimationFrame(animate);
      } else {
        setCounters(targets);
      }
    };
    animate();
  }, []);

  const openModal = (category: SkillCategory) => {
    setSelectedCategory(category);
    setModalVisible(true);
  };

  const getSkillLevelColor = (level: number) => {
    if (level >= 90) return "#52c41a";
    if (level >= 80) return "#1890ff";
    if (level >= 70) return "#fa8c16";
    return "#f5222d";
  };

  const getSkillLevelText = (level: number) => {
    if (level >= 90) return "Expert";
    if (level >= 80) return "Advanced";
    if (level >= 70) return "Intermediate";
    return "Beginner";
  };

  return (
    <AppLayout>
      <div style={{ padding: "20px", maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <PageHeader
          title={
            <div>
              <FireOutlined style={{ marginRight: "16px", color: "#ff4d4f" }} />
              Technical Excellence
            </div>
          }
          subtitle="Comprehensive expertise across the full development stack with cutting-edge technologies"
        />

        {/* Stats Section */}
        <Row gutter={[24, 24]} style={{ marginBottom: "60px" }}>
          {stats.map((stat, index) => (
            <Col key={index} xs={12} sm={6}>
              <Card
                style={{
                  textAlign: "center",
                  borderRadius: "20px",
                  background: `linear-gradient(135deg, ${stat.color}20, ${stat.color}08)`,
                  border: `2px solid ${stat.color}40`,
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                }}
                bodyStyle={{ padding: "24px 16px" }}
              >
                <div style={{ marginBottom: "12px" }}>
                  <Avatar
                    size={48}
                    style={{
                      backgroundColor: stat.color,
                      fontSize: "20px",
                    }}
                    icon={stat.icon}
                  />
                </div>
                <Statistic
                  title={
                    <span style={{ color: "#ffffff80", fontSize: "14px" }}>
                      {stat.title}
                    </span>
                  }
                  value={Object.values(counters)[index]}
                  suffix={stat.suffix}
                  valueStyle={{
                    color: "#ffffff",
                    fontWeight: "bold",
                    fontSize: "28px",
                    textShadow: `0 0 20px ${stat.color}50`,
                  }}
                />
              </Card>
            </Col>
          ))}
        </Row>

        {/* Skills Grid */}
        <Row gutter={[32, 32]} style={{ marginBottom: "60px" }}>
          {skillCategories.map((category, index) => (
            <Col key={index} xs={24} lg={12} xl={8}>
              <Card
                hoverable
                style={{
                  borderRadius: "24px",
                  border: `2px solid ${category.color}40`,
                  background: `linear-gradient(135deg, ${category.color}15, rgba(255,255,255,0.05))`,
                  backdropFilter: "blur(15px)",
                  height: "100%",
                  transition: "all 0.3s ease",
                  boxShadow: "0 12px 40px rgba(0,0,0,0.2)",
                }}
                bodyStyle={{ padding: "32px 24px" }}
                onClick={() => openModal(category)}
              >
                <div style={{ textAlign: "center", marginBottom: "24px" }}>
                  <Avatar
                    size={72}
                    style={{
                      backgroundColor: category.color,
                      fontSize: "32px",
                      marginBottom: "16px",
                      boxShadow: `0 0 30px ${category.color}50`,
                    }}
                    icon={category.icon}
                  />
                  <Title
                    level={3}
                    style={{
                      color: "#ffffff",
                      margin: "8px 0",
                      fontSize: "22px",
                    }}
                  >
                    {category.title}
                  </Title>
                  <Text style={{ color: "#ffffff80", fontSize: "14px" }}>
                    {category.description}
                  </Text>
                </div>

                {/* Technology Preview */}
                <div style={{ marginBottom: "24px", minHeight: "80px" }}>
                  <Row gutter={[8, 8]} justify="center">
                    {category.skills.slice(0, 6).map((skill, skillIndex) => (
                      <Col key={skillIndex}>
                        <Tooltip
                          title={`${skill.name} - ${
                            skill.level
                          }% (${getSkillLevelText(skill.level)})`}
                        >
                          <div
                            style={{
                              width: "48px",
                              height: "48px",
                              borderRadius: "12px",
                              background: `linear-gradient(135deg, ${
                                skill.color || category.color
                              }30, ${skill.color || category.color}10)`,
                              border: `2px solid ${
                                skill.color || category.color
                              }40`,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              transition: "all 0.3s ease",
                              cursor: "pointer",
                            }}
                          >
                            {skill.logoUrl ? (
                              <img
                                src={skill.logoUrl}
                                alt={skill.name}
                                style={{
                                  width: "28px",
                                  height: "28px",
                                  filter:
                                    "drop-shadow(0 0 8px rgba(0,0,0,0.3))",
                                }}
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.style.display = "none";
                                }}
                              />
                            ) : (
                              <span style={{ fontSize: "20px" }}>🔧</span>
                            )}
                          </div>
                        </Tooltip>
                      </Col>
                    ))}
                  </Row>
                  {category.skills.length > 6 && (
                    <div style={{ textAlign: "center", marginTop: "12px" }}>
                      <Badge
                        count={`+${category.skills.length - 6}`}
                        style={{ backgroundColor: category.color }}
                      />
                    </div>
                  )}
                </div>

                <Button
                  block
                  size="large"
                  style={{
                    borderColor: category.color,
                    color: category.color,
                    borderRadius: "12px",
                    height: "44px",
                    fontWeight: "bold",
                    background: `linear-gradient(135deg, ${category.color}10, transparent)`,
                    transition: "all 0.3s ease",
                  }}
                  icon={<EyeOutlined />}
                >
                  Explore Skills
                </Button>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Certifications */}
        <Card
          title={
            <div style={{ textAlign: "center" }}>
              <Title level={2} style={{ margin: 0, color: "#ffffff" }}>
                <TrophyOutlined
                  style={{ marginRight: "12px", color: "#faad14" }}
                />
                Certifications & Achievements
              </Title>
            </div>
          }
          style={{
            borderRadius: "24px",
            marginBottom: "40px",
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
            backdropFilter: "blur(15px)",
            border: "2px solid rgba(255,255,255,0.1)",
            boxShadow: "0 12px 40px rgba(0,0,0,0.2)",
          }}
          headStyle={{
            background: "transparent",
            borderBottom: "2px solid rgba(255,255,255,0.1)",
          }}
          bodyStyle={{ padding: "32px" }}
        >
          <Row gutter={[24, 24]}>
            {certifications.map((cert, index) => (
              <Col key={index} xs={24} md={8}>
                <Card
                  style={{
                    borderRadius: "16px",
                    background: `linear-gradient(135deg, ${cert.color}20, ${cert.color}08)`,
                    border: `2px solid ${cert.color}30`,
                    transition: "all 0.3s ease",
                    height: "100%",
                  }}
                  bodyStyle={{ padding: "20px" }}
                  hoverable
                >
                  <Space align="start" style={{ width: "100%" }}>
                    <Avatar
                      size={56}
                      style={{
                        backgroundColor: cert.color,
                        boxShadow: `0 0 20px ${cert.color}50`,
                      }}
                      icon={cert.icon}
                    />
                    <div style={{ flex: 1 }}>
                      <Text
                        strong
                        style={{
                          color: "#ffffff",
                          fontSize: "16px",
                          display: "block",
                        }}
                      >
                        {cert.name}
                      </Text>
                      <Text
                        style={{
                          color: "#ffffff80",
                          fontSize: "14px",
                          display: "block",
                        }}
                      >
                        {cert.provider}
                      </Text>
                      <Tag
                        color={cert.color}
                        style={{ marginTop: "8px", borderRadius: "8px" }}
                      >
                        {cert.date}
                      </Tag>
                    </div>
                  </Space>
                </Card>
              </Col>
            ))}
          </Row>

          <div style={{ textAlign: "center", marginTop: "32px" }}>
            <Card
              style={{
                display: "inline-block",
                borderRadius: "16px",
                background: "linear-gradient(135deg, #faad1420, #faad1408)",
                border: "2px solid #faad1430",
              }}
              bodyStyle={{ padding: "20px 32px" }}
            >
              <Badge
                count="🏆 2nd Place"
                style={{
                  backgroundColor: "#faad14",
                  fontSize: "14px",
                  fontWeight: "bold",
                  borderRadius: "12px",
                }}
              />
              <div style={{ marginTop: "8px" }}>
                <Text
                  strong
                  style={{
                    color: "#ffffff",
                    fontSize: "18px",
                    display: "block",
                  }}
                >
                  TECHFIESTA International Hackathon
                </Text>
                <Text style={{ color: "#ffffff80", fontSize: "14px" }}>
                  Two-time finalist with prize money
                </Text>
              </div>
            </Card>
          </div>
        </Card>

        {/* Skills Detail Modal */}
        <Modal
          title={
            selectedCategory && (
              <Space size="large">
                <Avatar
                  size={48}
                  style={{ backgroundColor: selectedCategory.color }}
                  icon={selectedCategory.icon}
                />
                <div>
                  <Title level={3} style={{ margin: 0 }}>
                    {selectedCategory.title}
                  </Title>
                  <Text >
                    {selectedCategory.description}
                  </Text>
                </div>
              </Space>
            )
          }
          open={modalVisible}
          onCancel={() => setModalVisible(false)}
          footer={null}
          width={900}
          style={{ top: 20 }}
          bodyStyle={{
            maxHeight: "70vh",
            overflowY: "auto",
            background: "linear-gradient(135deg, #001529, #0a1f44)",
            borderRadius: "0 0 16px 16px",
          }}
        >
          {selectedCategory && (
            <Row gutter={[20, 20]} style={{ padding: "16px 0" }}>
              {selectedCategory.skills.map((skill, index) => (
                <Col key={index} xs={24} lg={12}>
                  <Card
                    style={{
                      borderRadius: "16px",
                      background: `linear-gradient(135deg, ${
                        skill.color || selectedCategory.color
                      }15, rgba(255,255,255,0.02))`,
                      border: `2px solid ${
                        skill.color || selectedCategory.color
                      }30`,
                      height: "100%",
                    }}
                    bodyStyle={{ padding: "20px" }}
                  >
                    <Space
                      direction="vertical"
                      style={{ width: "100%" }}
                      size="middle"
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <Space>
                          {skill.logoUrl && (
                            <img
                              src={skill.logoUrl}
                              alt={skill.name}
                              style={{ width: "32px", height: "32px" }}
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = "none";
                              }}
                            />
                          )}
                          <div>
                            <Text
                              strong
                              style={{ color: "#ffffff", fontSize: "16px" }}
                            >
                              {skill.name}
                            </Text>
                            <br />
                            <Tag
                              color={getSkillLevelColor(skill.level)}
                              style={{ fontSize: "11px" }}
                            >
                              {getSkillLevelText(skill.level)}
                            </Tag>
                          </div>
                        </Space>
                        <Text style={{ color: "#ffffff80", fontSize: "12px" }}>
                          {skill.experience}
                        </Text>
                      </div>

                      <Progress
                        percent={skill.level}
                        strokeColor={{
                          "0%": skill.color || selectedCategory.color,
                          "100%": "#ffffff",
                        }}
                        trailColor="rgba(255,255,255,0.1)"
                        strokeWidth={8}
                        format={(percent) => (
                          <span
                            style={{ color: "#ffffff", fontWeight: "bold" }}
                          >
                            {percent}%
                          </span>
                        )}
                      />

                      <Text
                        style={{
                          color: "#ffffff80",
                          fontSize: "13px",
                          lineHeight: 1.5,
                        }}
                      >
                        {skill.description}
                      </Text>

                      {skill.projects && skill.projects.length > 0 && (
                        <div>
                          <Text
                            strong
                            style={{
                              color: "#ffffff",
                              fontSize: "12px",
                              display: "block",
                              marginBottom: "8px",
                            }}
                          >
                            Featured Projects:
                          </Text>
                          <Space wrap>
                            {skill.projects.map((project, pIndex) => (
                              <Tag
                                key={pIndex}
                                style={{
                                  fontSize: "10px",
                                  borderRadius: "8px",
                                  background: `${
                                    skill.color || selectedCategory.color
                                  }20`,
                                  border: `1px solid ${
                                    skill.color || selectedCategory.color
                                  }40`,
                                  color: "#ffffff",
                                }}
                              >
                                {project}
                              </Tag>
                            ))}
                          </Space>
                        </div>
                      )}
                    </Space>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
        </Modal>
      </div>
    </AppLayout>
  );
};

export default SkillsPage;
