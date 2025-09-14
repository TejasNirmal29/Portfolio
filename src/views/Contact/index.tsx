import React, { useState, useEffect } from "react";
import {
  Typography,
  Card,
  Form,
  Input,
  Button,
  Space,
  Divider,
  Row,
  Col,
  message,
  Tooltip,
} from "antd";
import {
  SendOutlined,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  ThunderboltOutlined,
  HeartOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import { PageHeader } from "@components/Common";
import { personalInfo, socialLinks } from "@db/navigation";
import AppLayout from "@layouts";
import emailjs from "@emailjs/browser";

const { Title, Text, Paragraph } = Typography;
const { TextArea } = Input;

const ContactPage: React.FC = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  // EmailJS configuration
  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID!;
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID!;
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY!;

  useEffect(() => {
    // Initialize EmailJS
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);

  const handleFormSubmit = async (values: any) => {
    setLoading(true);
    try {
      // Prepare template parameters for EmailJS
      const templateParams = {
        from_name: values.name,
        from_email: values.email,
        subject: values.subject,
        message: values.message,
        to_name: personalInfo.name,
        to_email: personalInfo.email, // This will be sent to your email
        reply_to: values.email,
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );

      if (response.status === 200) {
        message.success(
          "Message sent successfully! I'll get back to you soon. 🚀"
        );
        form.resetFields();
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      message.error(
        "Failed to send message. Please try again or contact me directly."
      );
    } finally {
      setLoading(false);
    }
  };

  const cardStyle: React.CSSProperties = {
    border: "none",
    borderRadius: "20px",
    background: "rgba(255, 255, 255, 0.95)",
    backdropFilter: "blur(10px)",
    transition: "all 0.3s ease",
  };

  const contactInfoStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    marginBottom: "1.5rem",
    padding: "1rem",
    background: "rgba(24, 144, 255, 0.05)",
    borderRadius: "12px",
    border: "1px solid rgba(24, 144, 255, 0.1)",
    transition: "all 0.3s ease",
  };

  const socialButtonStyle: React.CSSProperties = {
    background: "rgba(24, 144, 255, 0.1)",
    border: "1px solid #1890ff",
    color: "#1890ff",
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
        <PageHeader
          title="Get In Touch"
          subtitle="Have a project in mind? Let's work together and create something amazing!"
        />

        <Row gutter={[48, 48]}>
          {/* Contact Information */}
          <Col xs={24} lg={10}>
            <Card
              style={{
                ...cardStyle,
                height: "100%",
              }}
              className="hover-lift"
            >
              <Title
                level={3}
                style={{
                  marginBottom: "2rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Let's Connect{" "}
                <ThunderboltOutlined
                  style={{ marginLeft: "0.5rem", color: "#faad14" }}
                />
              </Title>

              <Space
                direction="vertical"
                size="large"
                style={{ width: "100%" }}
              >
                {/* Email */}
                <div style={contactInfoStyle} className="contact-info-item">
                  <MailOutlined
                    style={{
                      fontSize: "1.8rem",
                      color: "#1890ff",
                      marginRight: "1rem",
                    }}
                  />
                  <div>
                    <Text strong style={{ fontSize: "1rem", display: "block" }}>
                      Email
                    </Text>
                    <Text
                      copyable={{
                        tooltips: ["Copy Email", "Copied!"],
                      }}
                      style={{ color: "#666", fontSize: "1rem" }}
                    >
                      {personalInfo.email}
                    </Text>
                  </div>
                </div>

                {/* Phone */}
                <div style={contactInfoStyle} className="contact-info-item">
                  <PhoneOutlined
                    style={{
                      fontSize: "1.8rem",
                      color: "#52c41a",
                      marginRight: "1rem",
                    }}
                  />
                  <div>
                    <Text strong style={{ fontSize: "1rem", display: "block" }}>
                      Phone
                    </Text>
                    <Text
                      copyable={{
                        tooltips: ["Copy Phone", "Copied!"],
                      }}
                      style={{ color: "#666", fontSize: "1rem" }}
                    >
                      {personalInfo.phone}
                    </Text>
                  </div>
                </div>

                {/* Location */}
                <div style={contactInfoStyle} className="contact-info-item">
                  <EnvironmentOutlined
                    style={{
                      fontSize: "1.8rem",
                      color: "#722ed1",
                      marginRight: "1rem",
                    }}
                  />
                  <div>
                    <Text strong style={{ fontSize: "1rem", display: "block" }}>
                      Location
                    </Text>
                    <Text style={{ color: "#666", fontSize: "1rem" }}>
                      {personalInfo.location}
                    </Text>
                  </div>
                </div>

                <Divider style={{ margin: "2rem 0" }} />

                {/* Social Links */}
                <div>
                  <Text
                    strong
                    style={{
                      marginBottom: "1.5rem",
                      display: "block",
                      fontSize: "1.1rem",
                    }}
                  >
                    Follow Me 🌟
                  </Text>
                  <Space size="large" wrap>
                    {socialLinks.map((social) => (
                      <Tooltip
                        key={social.name}
                        title={`Follow me on ${social.name}`}
                      >
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
                          className="social-hover"
                        />
                      </Tooltip>
                    ))}
                  </Space>
                </div>

                {/* Response Time */}
                <div
                  style={{
                    background: "rgba(82, 196, 26, 0.1)",
                    padding: "1rem",
                    borderRadius: "12px",
                    border: "1px solid rgba(82, 196, 26, 0.2)",
                    marginTop: "1rem",
                  }}
                >
                  <Text style={{ color: "#52c41a", fontSize: "0.9rem" }}>
                    ⚡ Quick Response: I typically respond within 24 hours!
                  </Text>
                </div>
              </Space>
            </Card>
          </Col>

          {/* Contact Form */}
          <Col xs={24} lg={14}>
            <Card style={cardStyle} className="hover-lift">
              <Title level={3} style={{ marginBottom: "2rem" }}>
                Send Me a Message <HeartOutlined style={{ color: "#f5222d" }} />
              </Title>

              <Form
                form={form}
                layout="vertical"
                onFinish={handleFormSubmit}
                size="large"
                requiredMark={false}
              >
                <Row gutter={16}>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      name="name"
                      label={<Text strong>Your Name</Text>}
                      rules={[
                        { required: true, message: "Please enter your name" },
                        {
                          min: 2,
                          message: "Name must be at least 2 characters",
                        },
                      ]}
                    >
                      <Input
                        placeholder="John Doe"
                        style={{ borderRadius: "10px", padding: "12px" }}
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      name="email"
                      label={<Text strong>Email Address</Text>}
                      rules={[
                        { required: true, message: "Please enter your email" },
                        {
                          type: "email",
                          message: "Please enter a valid email",
                        },
                      ]}
                    >
                      <Input
                        placeholder="john@example.com"
                        style={{ borderRadius: "10px", padding: "12px" }}
                      />
                    </Form.Item>
                  </Col>
                </Row>

                <Form.Item
                  name="subject"
                  label={<Text strong>Subject</Text>}
                  rules={[
                    { required: true, message: "Please enter a subject" },
                    {
                      min: 5,
                      message: "Subject must be at least 5 characters",
                    },
                  ]}
                >
                  <Input
                    placeholder="Project Collaboration, Job Opportunity, etc."
                    style={{ borderRadius: "10px", padding: "12px" }}
                  />
                </Form.Item>

                <Form.Item
                  name="message"
                  label={<Text strong>Your Message</Text>}
                  rules={[
                    { required: true, message: "Please enter your message" },
                  ]}
                >
                  <TextArea
                    rows={6}
                    placeholder="Tell me about your project, ideas, or how we can work together..."
                    style={{ borderRadius: "10px", padding: "12px" }}
                    showCount
                    maxLength={1000}
                  />
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    loading={loading}
                    icon={loading ? <LoadingOutlined /> : <SendOutlined />}
                    style={{
                      width: "100%",
                      height: "55px",
                      borderRadius: "15px",
                      background: "linear-gradient(135deg, #1890ff, #722ed1)",
                      border: "none",
                      fontSize: "16px",
                      fontWeight: 600,
                    }}
                    className="send-button"
                  >
                    {loading ? "Sending Message..." : "Send Message"}
                  </Button>
                </Form.Item>
              </Form>

              {/* Additional Info */}
              <div
                style={{
                  background: "rgba(24, 144, 255, 0.05)",
                  padding: "1.5rem",
                  borderRadius: "12px",
                  border: "1px solid rgba(24, 144, 255, 0.1)",
                  marginTop: "1rem",
                }}
              >
                <Title
                  level={5}
                  style={{ color: "#1890ff", marginBottom: "1rem" }}
                >
                  What to Expect? 🤔
                </Title>
                <Space direction="vertical" size="small">
                  <Text>✅ I'll review your message carefully</Text>
                  <Text>
                    ✅ You'll get a personalized response within 24 hours
                  </Text>
                  <Text>
                    ✅ If it's a project inquiry, I'll suggest next steps
                  </Text>
                  <Text>✅ All conversations are completely confidential</Text>
                </Space>
              </div>
            </Card>
          </Col>
        </Row>

        {/* FAQ Section */}
        <Row style={{ marginTop: "4rem" }}>
          <Col xs={24}>
            <Card style={cardStyle} className="hover-lift">
              <Title
                level={3}
                style={{
                  textAlign: "center",
                  color: "#1890ff",
                  marginBottom: "2rem",
                }}
              >
                Frequently Asked Questions 💬
              </Title>
              <Row gutter={[32, 24]}>
                <Col xs={24} md={12}>
                  <div style={{ padding: "1rem" }}>
                    <Title level={5}>🚀 Available for Projects?</Title>
                    <Paragraph style={{ color: "rgba(0, 0, 0, 0.65)" }}>
                      Yes! I'm actively looking for new opportunities and
                      exciting projects. Whether it's freelance work or
                      full-time positions, I'm interested in discussing.
                    </Paragraph>
                  </div>
                </Col>
                <Col xs={24} md={12}>
                  <div style={{ padding: "1rem" }}>
                    <Title level={5}>⏰ Response Time?</Title>
                    <Paragraph style={{ color: "rgba(0, 0, 0, 0.65)" }}>
                      I typically respond within 24 hours during weekdays. For
                      urgent matters, feel free to mention it in your message.
                    </Paragraph>
                  </div>
                </Col>
                <Col xs={24} md={12}>
                  <div style={{ padding: "1rem" }}>
                    <Title level={5}>💼 Work Preference?</Title>
                    <Paragraph style={{ color: "rgba(0, 0, 0, 0.65)" }}>
                      I'm open to both remote and hybrid work arrangements.
                      Based in Pune, but flexible for the right opportunity.
                    </Paragraph>
                  </div>
                </Col>
                <Col xs={24} md={12}>
                  <div style={{ padding: "1rem" }}>
                    <Title level={5}>🤝 Collaboration Style?</Title>
                    <Paragraph style={{ color: "rgba(0, 0, 0, 0.65)" }}>
                      I believe in transparent communication, regular updates,
                      and collaborative problem-solving. Let's build something
                      amazing together!
                    </Paragraph>
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>

        <style>{`
        .contact-info-item:hover {
          background: rgba(14, 104, 189, 0.1) !important;
          transform: translateX(5px);
        }
        .social-hover:hover {
          transform: translateY(-3px) scale(1.05);
          background: rgba(24, 144, 255, 0.2) !important;
          border-color: #1890ff !important;
          box-shadow: 0 8px 20px rgba(24, 144, 255, 0.3);
        }
        .send-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(24, 144, 255, 0.3);
        }
      `}</style>
      </div>
    </AppLayout>
  );
};

export default ContactPage;
