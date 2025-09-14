import React, { useState, useEffect, useMemo } from "react";
import {
  Card,
  Timeline,
  Row,
  Col,
  Button,
  Tag,
  Typography,
  Progress,
  Modal,
  Space,
  Flex,
} from "antd";
import {
  CodeOutlined,
  RocketOutlined,
  BookOutlined,
  ProjectOutlined,
  CalendarOutlined,
  EnvironmentOutlined,
  LinkOutlined,
  GlobalOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import AppLayout from "@layouts";
import { PageHeader } from "@components/Common";
const { Title, Text } = Typography;

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  duration: string;
  description: string[];
  icon: React.ReactNode;
  color: string;
  location?: string;
  type: "work" | "education";
  website?: string;
  technologies?: string[];
  impact?: string;
  projects?: ProjectItem[];
}

interface ProjectItem {
  name: string;
  description: string;
  technologies: string[];
  link?: string;
  status?: string;
}

const ExperiencePage: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedExperience, setSelectedExperience] =
    useState<ExperienceItem | null>(null);
  const [counters, setCounters] = useState([0, 0, 0, 0]);

  // Memoized data to prevent re-renders
  const experiences = useMemo<ExperienceItem[]>(
    () => [
      {
        id: 1,
        title: "Associate Software Developer",
        company: "Riveda Consulting Private Limited",
        duration: "August 2025 - Present",
        description: [
          "Architecting enterprise solutions with modern technology stack",
          "Collaborating with global teams serving 10,000+ users",
          "Implementing microservices with 40% performance improvement",
          "Leading code reviews and mentoring junior developers",
        ],
        icon: <RocketOutlined />,
        color: "#1890ff",
        location: "Chennai, Tamil Nadu",
        type: "work",
        website: "https://www.riveda.in",
        technologies: ["React", "Node.js", "Docker", "AWS"],
        impact: "40% Performance Boost",
        projects: [
          {
            name: "SkoolSure - School ERP Management",
            description:
              "Revolutionary school management platform with AI-powered insights",
            technologies: ["React", "Redux", "Ant Design", "AI/ML"],
            status: "ongoing",
          },
        ],
      },
      {
        id: 2,
        title: "Software Engineer",
        company: "EnLivenDX Solutions",
        duration: "May 2025 – August 2025",
        description: [
          "Engineered full-stack applications handling 50,000+ daily transactions",
          "Implemented security protocols reducing vulnerabilities by 90%",
          "Optimized database queries achieving 60% faster response times",
          "Led cross-functional teams delivering 5+ projects ahead of schedule",
        ],
        icon: <CodeOutlined />,
        color: "#52c41a",
        location: "Pune, Maharashtra",
        type: "work",
        website: "https://enlivendx.com/",
        technologies: ["React", "Node.js", "MongoDB", "PostgreSQL"],
        impact: "60% Faster Queries",
        projects: [
          {
            name: "SkoolSure - School ERP Management",
            description: "Comprehensive school management system",
            technologies: ["React", "Redux", "Ant Design"],
            status: "completed",
          },
          {
            name: "CuddleCrew - Multi-Tenant SaaS",
            description: "Dog kennel management platform with AI",
            technologies: ["Node.js", "PostgreSQL", "Prisma"],
            status: "completed",
          },
        ],
      },
      {
        id: 3,
        title: "Engineer Intern",
        company: "EnLivenDX Solutions",
        duration: "Feb 2025 – May 2025",
        description: [
          "Crafted intuitive interfaces with 95% user satisfaction",
          "Developed mobile-responsive designs increasing engagement by 80%",
          "Built real-time systems supporting 1000+ concurrent users",
          "Coordinated 3+ parallel projects using modern tools",
        ],
        icon: <ProjectOutlined />,
        color: "#722ed1",
        location: "Pune, Maharashtra",
        type: "work",
        technologies: ["React", "Redux", "Ant Design", "PostgreSQL"],
        impact: "95% User Satisfaction",
      },
      {
        id: 4,
        title: "Bachelor of Engineering - Computer Engineering",
        company: "Pravara Rural Engineering College, Loni",
        duration: "2021 - 2025",
        description: [
          "Achieved CGPA of 8.43 with consistent academic excellence",
          "TECHFIESTA international hackathon finalist with 2nd place",
          "Developed IoT-based Smart Irrigation System improving efficiency by 20%",
          "Led technical teams in 5+ innovative projects",
        ],
        icon: <BookOutlined />,
        color: "#fa8c16",
        location: "Loni, Ahmednagar",
        type: "education",
        website: "https://pravaraengg.org.in/",
        impact: "20% Water Savings",
        projects: [
          {
            name: "Smart Irrigation System",
            description: "AI-powered irrigation with predictive analytics",
            technologies: ["React", "Node.js", "MongoDB", "IoT"],
            link: "https://agrosolutions.vercel.app/",
            status: "completed",
          },
        ],
      },
    ],
    []
  );

  const achievements = useMemo(
    () => [
      {
        title: "Years Experience",
        count: 1,
        color: "#faad14",
        icon: <RocketOutlined />,
      },
      {
        title: "Projects Delivered",
        count: 5,
        color: "#52c41a",
        icon: <ProjectOutlined />,
      },
      {
        title: "Technologies",
        count: 15,
        color: "#1890ff",
        icon: <CodeOutlined />,
      },
      {
        title: "Companies",
        count: 2,
        color: "#722ed1",
        icon: <ProjectOutlined />,
      },
    ],
    []
  );

  const skillCategories = useMemo(
    () => [
      {
        category: "Frontend",
        skills: ["React", "TypeScript", "Next.js"],
        level: 90,
        color: "#1890ff",
      },
      {
        category: "Backend",
        skills: ["Node.js", "Express", "PostgreSQL"],
        level: 85,
        color: "#52c41a",
      },
      {
        category: "Cloud & DevOps",
        skills: ["AWS", "Docker", "CI/CD"],
        level: 80,
        color: "#722ed1",
      },
      {
        category: "Tools",
        skills: ["Git", "Jira", "REST APIs"],
        level: 88,
        color: "#fa8c16",
      },
    ],
    []
  );

  // Simple counter animation
  useEffect(() => {
    const targets = [1, 5, 15, 2];
    let frame = 0;
    const animate = () => {
      frame++;
      if (frame <= 30) {
        setCounters(targets.map((target) => Math.floor((target * frame) / 30)));
        requestAnimationFrame(animate);
      } else {
        setCounters(targets);
      }
    };
    animate();
  }, []);

  const openModal = (exp: ExperienceItem) => {
    setSelectedExperience(exp);
    setModalVisible(true);
  };

  const cardStyle = {
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    border: "1px solid #f0f0f0",
  };

  return (
    <AppLayout>
      <div style={{ padding: "20px", maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}

        <PageHeader
          title="  Professional Journey"
          subtitle="Building digital experiences that matter"
        />

        {/* Stats Cards */}
        <Row gutter={[16, 16]} style={{ marginBottom: "40px" }}>
          {achievements.map((achievement, index) => (
            <Col key={index} xs={12} sm={6}>
              <Card
                style={cardStyle}
                bodyStyle={{ padding: "20px", textAlign: "center" }}
              >
                <div
                  style={{
                    fontSize: "24px",
                    color: achievement.color,
                    marginBottom: "8px",
                  }}
                >
                  {achievement.icon}
                </div>
                <Title
                  level={2}
                  style={{ margin: "8px 0", color: achievement.color }}
                >
                  {counters[index]}+
                </Title>
                <Text style={{ fontSize: "14px", color: "#666" }}>
                  {achievement.title}
                </Text>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Skills Overview */}
        <Card style={{ ...cardStyle, marginBottom: "40px" }}>
          <Title
            level={3}
            style={{ textAlign: "center", marginBottom: "24px" }}
          >
            Technical Skills
          </Title>
          <Row gutter={[16, 16]}>
            {skillCategories.map((category, index) => (
              <Col key={index} xs={24} sm={12} lg={6}>
                <div style={{ textAlign: "center" }}>
                  <Title level={5} style={{ color: category.color }}>
                    {category.category}
                  </Title>
                  <Progress
                    type="circle"
                    percent={category.level}
                    strokeColor={category.color}
                    size={80}
                  />
                  <div style={{ marginTop: "12px" }}>
                    {category.skills.map((skill) => (
                      <Tag
                        key={skill}
                        color={category.color}
                        style={{ margin: "2px" }}
                      >
                        {skill}
                      </Tag>
                    ))}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Card>

        {/* Timeline */}
        <Card style={cardStyle}>
          <Title
            level={3}
            style={{ textAlign: "center", marginBottom: "32px" }}
          >
            Experience Timeline
          </Title>

          <Timeline
            items={experiences.map((exp) => ({
              color: exp.color,
              dot: (
                <div
                  style={{
                    background: exp.color,
                    borderRadius: "50%",
                    padding: "8px",
                    color: "white",
                    fontSize: "16px",
                  }}
                >
                  {exp.icon}
                </div>
              ),
              children: (
                <Card
                  style={{
                    border: `1px solid ${exp.color}40`,
                    borderRadius: "8px",
                    marginBottom: "16px",
                  }}
                  bodyStyle={{ padding: "20px" }}
                >
                  <Flex justify="space-between" align="flex-start">
                    <div style={{ flex: 1 }}>
                      <Title
                        level={4}
                        style={{ color: exp.color, margin: "0 0 8px" }}
                      >
                        {exp.title}
                      </Title>
                      <Text strong style={{ fontSize: "16px" }}>
                        {exp.company}
                      </Text>
                      <br />
                      <Space style={{ marginTop: "8px" }}>
                        <Text type="secondary">
                          <CalendarOutlined style={{ marginRight: "4px" }} />
                          {exp.duration}
                        </Text>
                        <Text type="secondary">
                          <EnvironmentOutlined style={{ marginRight: "4px" }} />
                          {exp.location}
                        </Text>
                      </Space>
                    </div>

                    <Space>
                      {exp.impact && <Tag color={exp.color}>{exp.impact}</Tag>}
                      {exp.website && (
                        <Button
                          size="small"
                          icon={<GlobalOutlined />}
                          href={exp.website}
                          target="_blank"
                        />
                      )}
                      <Button
                        size="small"
                        icon={<EyeOutlined />}
                        onClick={() => openModal(exp)}
                      >
                        Details
                      </Button>
                    </Space>
                  </Flex>

                  <div style={{ margin: "16px 0" }}>
                    {exp.description.map((desc, idx) => (
                      <div key={idx} style={{ margin: "8px 0" }}>
                        <Text>• {desc}</Text>
                      </div>
                    ))}
                  </div>

                  {exp.technologies && (
                    <div style={{ marginTop: "16px" }}>
                      <Text
                        strong
                        style={{ color: exp.color, marginRight: "8px" }}
                      >
                        Technologies:
                      </Text>
                      {exp.technologies.map((tech) => (
                        <Tag key={tech} style={{ margin: "2px" }}>
                          {tech}
                        </Tag>
                      ))}
                    </div>
                  )}

                  {exp.projects && exp.projects.length > 0 && (
                    <div style={{ marginTop: "16px" }}>
                      <Text strong style={{ color: exp.color }}>
                        Featured Projects:
                      </Text>
                      {exp.projects.map((project, idx) => (
                        <Card
                          key={idx}
                          size="small"
                          style={{ marginTop: "8px" }}
                        >
                          <Flex justify="space-between" align="center">
                            <div>
                              <Text strong>{project.name}</Text>
                              <br />
                              <Text
                                type="secondary"
                                style={{ fontSize: "12px" }}
                              >
                                {project.description}
                              </Text>
                            </div>
                            {project.link && (
                              <Button
                                size="small"
                                type="link"
                                icon={<LinkOutlined />}
                                href={project.link}
                                target="_blank"
                              />
                            )}
                          </Flex>
                          <div style={{ marginTop: "8px" }}>
                            {project.technologies.map((tech) => (
                              <Tag key={tech} style={{ margin: "2px" }}>
                                {tech}
                              </Tag>
                            ))}
                          </div>
                        </Card>
                      ))}
                    </div>
                  )}
                </Card>
              ),
            }))}
          />
        </Card>

        {/* Experience Detail Modal */}
        <Modal
          title={selectedExperience?.title}
          open={modalVisible}
          onCancel={() => setModalVisible(false)}
          footer={null}
          width={700}
        >
          {selectedExperience && (
            <div>
              <Space
                direction="vertical"
                size="middle"
                style={{ width: "100%" }}
              >
                <div>
                  <Text strong style={{ fontSize: "16px" }}>
                    {selectedExperience.company}
                  </Text>
                  <br />
                  <Text type="secondary">
                    {selectedExperience.duration} •{" "}
                    {selectedExperience.location}
                  </Text>
                </div>

                <div>
                  <Title level={5}>Key Achievements</Title>
                  {selectedExperience.description.map((desc, idx) => (
                    <div key={idx} style={{ margin: "8px 0" }}>
                      <Text>• {desc}</Text>
                    </div>
                  ))}
                </div>

                {selectedExperience.technologies && (
                  <div>
                    <Title level={5}>Technologies</Title>
                    <Space wrap>
                      {selectedExperience.technologies.map((tech) => (
                        <Tag key={tech} color={selectedExperience.color}>
                          {tech}
                        </Tag>
                      ))}
                    </Space>
                  </div>
                )}

                {selectedExperience.projects && (
                  <div>
                    <Title level={5}>Featured Projects</Title>
                    {selectedExperience.projects.map((project, idx) => (
                      <Card
                        key={idx}
                        size="small"
                        style={{ marginBottom: "8px" }}
                      >
                        <Text strong>{project.name}</Text>
                        <br />
                        <Text type="secondary">{project.description}</Text>
                        <div style={{ marginTop: "8px" }}>
                          {project.technologies.map((tech) => (
                            <Tag key={tech}>{tech}</Tag>
                          ))}
                        </div>
                      </Card>
                    ))}
                  </div>
                )}
              </Space>
            </div>
          )}
        </Modal>
      </div>
    </AppLayout>
  );
};

export default ExperiencePage;
