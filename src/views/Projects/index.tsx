import React, { useState, useMemo } from "react";
import {
  Card,
  Row,
  Col,
  Button,
  Tag,
  Typography,
  Space,
  Flex,
  Image,
  Modal,
  Badge,
} from "antd";
import {
  GithubOutlined,
  LinkOutlined,
  EyeOutlined,
  CodeOutlined,
  RocketOutlined,
  BookOutlined,
  ApiOutlined,
} from "@ant-design/icons";
import AppLayout from "@layouts";
import { PageHeader } from "@components/Common";
const { Title, Text, Paragraph } = Typography;

interface ProjectItem {
  id: number;
  name: string;
  category: string;
  description: string;
  detailedDescription: string;
  technologies: string[];
  features: string[];
  challenges: string[];
  solutions: string[];
  impact: string;
  status: "completed" | "ongoing" | "planned";
  color: string;
  timeline: string;
  role: string;
  github?: string;
  liveLink?: string;
  image?: string;
  icon?: React.ReactNode;
  metrics?: Record<string, string | undefined>;
  teamSize?: number;
}

const ProjectsPage: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null
  );
  const [modalVisible, setModalVisible] = useState(false);

  const projects = useMemo<ProjectItem[]>(
    () => [
      {
        id: 1,
        name: "SkoolSure - School ERP Management",
        category: "Enterprise Software",
        description:
          "Revolutionary school management platform with AI-powered insights and real-time analytics for educational institutions.",
        detailedDescription:
          "SkoolSure is a comprehensive Enterprise Resource Planning (ERP) system specifically designed for educational institutions. It provides seamless management of student records, faculty administration, academic scheduling, and parent communication through an intuitive, role-based interface.",
        technologies: [
          "React",
          "Redux",
          "Ant Design",
          "Node.js",
          "PostgreSQL",
          "AI/ML",
          "REST APIs",
        ],
        features: [
          "Real-time student progress tracking",
          "AI-powered academic insights",
          "Mobile-first responsive design",
          "Role-based access control",
          "Parent-teacher communication portal",
          "Automated report generation",
        ],
        challenges: [
          "Managing complex role-based permissions",
          "Real-time data synchronization",
          "Scalable architecture for multiple schools",
          "Mobile responsiveness across devices",
        ],
        solutions: [
          "Implemented JWT-based authentication system",
          "Used WebSocket for real-time updates",
          "Designed microservices architecture",
          "Adopted mobile-first design approach",
        ],
        impact: "Improved school administration efficiency by 60%",
        status: "ongoing",
        liveLink: "https://skoolsure.com/",
        image: "https://skoolsure.com/img/logo.svg",
        color: "#1890ff",
        icon: <RocketOutlined />,
        metrics: {
          users: "100+ Students",
          satisfaction: "85% User Satisfaction",
          efficiency: "50% Time Saved",
          lines: "10K+ Lines",
        },
        timeline: "Feb 2025 - Present",
        teamSize: 3,
        role: "Full-Stack Developer & Team Lead",
      },
      {
        id: 2,
        name: "CuddleCrew - Multi-Tenant SaaS",
        category: "SaaS Platform",
        description:
          "Advanced dog kennel management platform with AI recommendations and multi-tenant architecture for pet care businesses.",
        detailedDescription:
          "CuddleCrew is a sophisticated Software-as-a-Service platform designed for dog kennel and pet care businesses. It features multi-tenant architecture, allowing multiple businesses to use the same application with isolated data and customized experiences.",
        technologies: ["Node.js", "Express", "PostgreSQL", "Prisma"],
        features: [
          "Multi-tenant SaaS architecture",
          "AI-powered pet care recommendations",
          "Advanced booking and scheduling system",
          "Real-time inventory management",
          "Customer relationship management",
          "Payment processing integration",
        ],
        challenges: [
          "Multi-tenant data isolation",
          "Complex booking algorithms",
          "Scalable database design",
        ],
        solutions: [
          "Implemented tenant-aware data models",
          "Developed custom scheduling algorithms",
          "Used database sharding strategies",
        ],
        impact: "Streamlined operations for 50+ pet businesses",
        status: "completed",
        image: "/cuddle_crew.svg",
        color: "#52c41a",
        icon: <ApiOutlined />,
        metrics: {
          businesses: "50+ Businesses",
          uptime: "99.9% Uptime",
          cost: "40% Cost Reduction",
          lines: "15K+ Lines",
        },
        timeline: "Feb 2025 - August 2025",
        teamSize: 2,
        role: "Backend Developer & Architect",
      },
      {
        id: 3,
        name: "Smart Irrigation System",
        category: "IoT & AI",
        description:
          "AI-powered irrigation system with predictive analytics, weather integration, and 20% water efficiency improvement.",
        detailedDescription:
          "An innovative IoT-based smart irrigation system that leverages machine learning, weather data, and sensor networks to optimize water usage in agriculture. The system provides predictive analytics for crop health and automated irrigation scheduling.",
        technologies: [
          "React",
          "Node.js",
          "MongoDB",
          "IoT",
          "NodeMCU",
          "Python",
          "TensorFlow",
          "Weather APIs",
        ],
        features: [
          "IoT sensor network integration",
          "Weather forecast API integration",
          "Machine learning crop predictions",
          "Automated irrigation scheduling",
          "Real-time monitoring dashboard",
          "Water usage analytics",
        ],
        challenges: [
          "IoT device connectivity reliability",
          "Weather data accuracy integration",
          "Machine learning model training",
          "Real-time sensor data processing",
        ],
        solutions: [
          "Implemented redundant connectivity protocols",
          "Used multiple weather API sources",
          "Trained models with historical data",
          "Built real-time data processing pipeline",
        ],
        impact: "20% water efficiency improvement, Award-winning project",
        status: "completed",
        github:
          "https://github.com/TejasNirmal29/Impact-Prediction-of-Climate-Change-on-Crop-Yield-and-It-s-Solutions",
        liveLink: "https://agrosolutions.vercel.app/",
        image: "/image.png",
        color: "#fa8c16",
        icon: <BookOutlined />,
        metrics: {
          farmers: "100+ Farmers",
          water: "20% Water Saved",
          accuracy: "85% Accuracy",
          lines: "8K+ Lines",
        },
        timeline: "2023 - 2024",
        teamSize: 4,
        role: "IoT Developer & ML Engineer",
      },
    ],
    []
  );

  const stats = useMemo(
    () => [
      { label: "Total Projects", value: projects.length, color: "#1890ff" },
      {
        label: "Completed",
        value: projects.filter((p) => p.status === "completed").length,
        color: "#52c41a",
      },
      {
        label: "Ongoing",
        value: projects.filter((p) => p.status === "ongoing").length,
        color: "#faad14",
      },
      { label: "Technologies", value: 15, color: "#722ed1" },
    ],
    [projects]
  );

  const openModal = (project: ProjectItem) => {
    setSelectedProject(project);
    setModalVisible(true);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "#52c41a";
      case "ongoing":
        return "#1890ff";
      case "planned":
        return "#fa8c16";
      default:
        return "#8c8c8c";
    }
  };

  const cardStyle = {
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    border: "1px solid #f0f0f0",
    transition: "all 0.3s ease",
  };

  return (
    <AppLayout>
      <div
        style={{
          padding: "2rem",
          maxWidth: 1200,
          margin: "0 auto",
          minHeight: "100vh",
        }}
      >
        {/* Header */}
        <PageHeader
          title=" Project Portfolio"
          subtitle=" Innovative solutions built with modern technologies"
        />

        {/* Stats */}
        <Row gutter={[16, 16]} style={{ marginBottom: "40px" }}>
          {stats.map((stat, index) => (
            <Col key={index} xs={12} sm={6}>
              <Card
                style={cardStyle}
                bodyStyle={{ padding: "20px", textAlign: "center" }}
              >
                <Title level={2} style={{ margin: "8px 0", color: stat.color }}>
                  {stat.value}
                </Title>
                <Text style={{ color: "#666" }}>{stat.label}</Text>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Projects Grid */}
        <Row gutter={[24, 24]}>
          {projects.map((project) => (
            <Col key={project.id} xs={24} lg={12} xl={8}>
              <Card
                hoverable
                style={{
                  ...cardStyle,
                  height: "100%",
                  border: `2px solid ${project.color}20`,
                }}
                bodyStyle={{ padding: "20px" }}
                onClick={() => openModal(project)}
              >
                {/* Project Image */}
                <div style={{ textAlign: "center", marginBottom: "16px" }}>
                  <Image
                    src={project.image}
                    alt={project.name}
                    style={{
                      width: "80px",
                      height: "80px",
                      objectFit: "contain",
                      borderRadius: "8px",
                    }}
                    preview={false}
                  />
                </div>

                {/* Project Header */}
                <Space
                  direction="vertical"
                  size="small"
                  style={{ width: "100%" }}
                >
                  <Flex justify="space-between" align="center">
                    <div style={{ fontSize: "20px", color: project.color }}>
                      {project.icon}
                    </div>
                    <Badge
                      color={getStatusColor(project.status)}
                      text={project.status}
                    />
                  </Flex>

                  <Title
                    level={4}
                    style={{ margin: "8px 0", color: project.color }}
                  >
                    {project.name}
                  </Title>

                  <Tag color={project.color} style={{ marginBottom: "8px" }}>
                    {project.category}
                  </Tag>

                  <Paragraph
                    style={{
                      margin: "12px 0",
                      color: "#666",
                      fontSize: "14px",
                    }}
                    ellipsis={{ rows: 3 }}
                  >
                    {project.description}
                  </Paragraph>

                  {/* Impact */}
                  <div
                    style={{
                      background: `${project.color}15`,
                      padding: "8px 12px",
                      borderRadius: "8px",
                      marginBottom: "12px",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: "12px",
                        color: project.color,
                        fontWeight: 600,
                      }}
                    >
                      {project.impact}
                    </Text>
                  </div>

                  {/* Technologies */}
                  <Space size={[4, 8]} wrap>
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Tag key={tech} style={{ margin: "2px" }}>
                        {tech}
                      </Tag>
                    ))}
                    {project.technologies.length > 3 && (
                      <Tag style={{ margin: "2px" }}>
                        +{project.technologies.length - 3}
                      </Tag>
                    )}
                  </Space>

                  {/* Action Buttons */}
                  <Space style={{ marginTop: "16px", width: "100%" }} wrap>
                    {project.github && (
                      <Button
                        size="small"
                        icon={<GithubOutlined />}
                        href={project.github}
                        target="_blank"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Code
                      </Button>
                    )}
                    {project.liveLink && (
                      <Button
                        size="small"
                        type="primary"
                        icon={<LinkOutlined />}
                        href={project.liveLink}
                        target="_blank"
                        style={{
                          backgroundColor: project.color,
                          borderColor: project.color,
                        }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        Demo
                      </Button>
                    )}
                    <Button
                      size="small"
                      icon={<EyeOutlined />}
                      onClick={(e) => {
                        e.stopPropagation();
                        openModal(project);
                      }}
                    >
                      Details
                    </Button>
                  </Space>
                </Space>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Project Detail Modal */}
        <Modal
          title={selectedProject?.name}
          open={modalVisible}
          onCancel={() => setModalVisible(false)}
          footer={null}
          width={800}
          styles={{ body: { maxHeight: "70vh", overflowY: "auto" } }}
        >
          {selectedProject && (
            <Space direction="vertical" size="large" style={{ width: "100%" }}>
              {/* Project Header */}
              <div>
                <Space style={{ marginBottom: "12px" }}>
                  <div
                    style={{ fontSize: "24px", color: selectedProject.color }}
                  >
                    {selectedProject.icon}
                  </div>
                  <Tag color={selectedProject.color}>
                    {selectedProject.category}
                  </Tag>
                  <Badge
                    color={getStatusColor(selectedProject.status)}
                    text={selectedProject.status}
                  />
                </Space>
                <Text type="secondary">
                  {selectedProject.timeline} • {selectedProject.role} • Team:{" "}
                  {selectedProject.teamSize}
                </Text>
              </div>

              {/* Project Image */}
              <div style={{ textAlign: "center" }}>
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.name}
                  style={{
                    maxHeight: "200px",
                    objectFit: "contain",
                    borderRadius: "8px",
                  }}
                />
              </div>

              {/* Description */}
              <div>
                <Title level={5} style={{ color: selectedProject.color }}>
                  Project Overview
                </Title>
                <Paragraph>{selectedProject.detailedDescription}</Paragraph>
              </div>

              {/* Metrics */}
              {selectedProject.metrics && (
                <div>
                  <Title level={5} style={{ color: selectedProject.color }}>
                    Key Metrics
                  </Title>
                  <Row gutter={[12, 12]}>
                    {Object.entries(selectedProject.metrics).map(
                      ([key, value]) => (
                        <Col key={key} xs={12} sm={6}>
                          <div
                            style={{
                              textAlign: "center",
                              padding: "12px",
                              background: `${selectedProject.color}15`,
                              borderRadius: "8px",
                            }}
                          >
                            <Text
                              strong
                              style={{ fontSize: "14px", display: "block" }}
                            >
                              {value}
                            </Text>
                            <Text type="secondary" style={{ fontSize: "12px" }}>
                              {key.charAt(0).toUpperCase() + key.slice(1)}
                            </Text>
                          </div>
                        </Col>
                      )
                    )}
                  </Row>
                </div>
              )}

              {/* Technologies */}
              <div>
                <Title level={5} style={{ color: selectedProject.color }}>
                  Technologies Used
                </Title>
                <Space size={[8, 8]} wrap>
                  {selectedProject.technologies.map((tech) => (
                    <Tag key={tech} color={selectedProject.color}>
                      {tech}
                    </Tag>
                  ))}
                </Space>
              </div>

              {/* Features */}
              <div>
                <Title level={5} style={{ color: selectedProject.color }}>
                  Key Features
                </Title>
                {selectedProject.features.map((feature, index) => (
                  <div key={index} style={{ marginBottom: "4px" }}>
                    <Text>• {feature}</Text>
                  </div>
                ))}
              </div>

              {/* Challenges & Solutions */}
              <Row gutter={[24, 16]}>
                <Col xs={24} md={12}>
                  <Title level={5} style={{ color: "#ff4d4f" }}>
                    Challenges
                  </Title>
                  {selectedProject.challenges.map((challenge, index) => (
                    <div key={index} style={{ marginBottom: "4px" }}>
                      <Text>• {challenge}</Text>
                    </div>
                  ))}
                </Col>
                <Col xs={24} md={12}>
                  <Title level={5} style={{ color: "#52c41a" }}>
                    Solutions
                  </Title>
                  {selectedProject.solutions.map((solution, index) => (
                    <div key={index} style={{ marginBottom: "4px" }}>
                      <Text>• {solution}</Text>
                    </div>
                  ))}
                </Col>
              </Row>

              {/* Impact */}
              <div
                style={{
                  textAlign: "center",
                  padding: "20px",
                  background: `linear-gradient(135deg, ${selectedProject.color}20, ${selectedProject.color}10)`,
                  borderRadius: "12px",
                }}
              >
                <Title
                  level={5}
                  style={{ margin: 0, color: selectedProject.color }}
                >
                  Project Impact
                </Title>
                <Text style={{ fontSize: "16px" }}>
                  {selectedProject.impact}
                </Text>
              </div>

              {/* Action Buttons */}
              <Space style={{ width: "100%", justifyContent: "center" }}>
                {selectedProject.github && (
                  <Button
                    icon={<GithubOutlined />}
                    href={selectedProject.github}
                    target="_blank"
                  >
                    View Code
                  </Button>
                )}
                {selectedProject.liveLink && (
                  <Button
                    type="primary"
                    icon={<LinkOutlined />}
                    href={selectedProject.liveLink}
                    target="_blank"
                    style={{
                      backgroundColor: selectedProject.color,
                      borderColor: selectedProject.color,
                    }}
                  >
                    Live Demo
                  </Button>
                )}
              </Space>
            </Space>
          )}
        </Modal>
      </div>
    </AppLayout>
  );
};

export default ProjectsPage;
