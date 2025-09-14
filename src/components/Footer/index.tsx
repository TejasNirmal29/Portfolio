import React from 'react';
import { Layout, Typography, Button, Space, Divider, Row, Col, Grid } from 'antd';
import { useNavigate } from 'react-router-dom';
import { navItems, socialLinks, personalInfo } from '@db/navigation';

const { Footer } = Layout;
const { Title, Paragraph, Text } = Typography;
const { useBreakpoint } = Grid;

const AppFooter: React.FC = () => {
  const navigate = useNavigate();
  const screens = useBreakpoint();

  const footerStyle: React.CSSProperties = {
    background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.9), rgba(24, 144, 255, 0.1))',
    color: 'white',
    padding: screens.md ? '3rem 2rem 2rem' : '2rem 1rem',
    marginTop: 'auto',
    backdropFilter: 'blur(10px)'
  };

  const linkButtonStyle: React.CSSProperties = {
    color: 'rgba(255, 255, 255, 0.7)',
    padding: '4px 0',
    height: 'auto',
    textAlign: 'left',
    transition: 'color 0.3s ease'
  };

  const socialButtonStyle: React.CSSProperties = {
    background: 'rgba(255, 255, 255, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    color: 'white',
    transition: 'all 0.3s ease'
  };

  return (
    <Footer style={footerStyle}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <Row gutter={[32, 32]}>
          {/* Brand Section */}
          <Col xs={24} md={8}>
            <Title level={4} style={{ color: 'white', marginBottom: '1rem' }}>
              {personalInfo.name}<span style={{ color: '#1890ff' }}>.</span>
            </Title>
            <Paragraph style={{ color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.6 }}>
              {personalInfo.bio}
            </Paragraph>
            <Text style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.9rem' }}>
              📍 {personalInfo.location}
            </Text>
          </Col>

          {/* Quick Links */}
          <Col xs={24} md={8}>
            <Title level={5} style={{ color: 'white', marginBottom: '1.5rem' }}>
              Quick Links
            </Title>
            <Space direction="vertical" size="small" style={{ width: '100%' }}>
              {navItems.map(item => (
                <Button
                  key={item.key}
                  type="text"
                  onClick={() => navigate(item.path)}
                  style={linkButtonStyle}
                  className="footer-link"
                >
                  {item.label}
                </Button>
              ))}
            </Space>
          </Col>

          {/* Connect Section */}
          <Col xs={24} md={8}>
            <Title level={5} style={{ color: 'white', marginBottom: '1.5rem' }}>
              Let's Connect
            </Title>
            <Space size="large" wrap>
              {socialLinks.map(social => (
                <Button
                  key={social.name}
                  shape="circle"
                  size="large"
                  icon={social.icon}
                  href={social.url}
                  target={social.url.startsWith('http') ? '_blank' : undefined}
                  rel={social.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                  style={socialButtonStyle}
                  className="social-button"
                />
              ))}
            </Space>
            <div style={{ marginTop: '1.5rem' }}>
              <Space direction="vertical" size="small">
                <Text style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem' }}>
                  📧 {personalInfo.email}
                </Text>
                <Text style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem' }}>
                  📱 {personalInfo.phone}
                </Text>
              </Space>
            </div>
          </Col>
        </Row>

        <Divider style={{ borderColor: 'rgba(255, 255, 255, 0.2)', margin: '2rem 0 1rem' }} />

        {/* Copyright Section */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <Text style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem' }}>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </Text>
          <Space size="large">
            <Button
              type="text"
              size="small"
              style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.8rem' }}
            >
              Privacy Policy
            </Button>
            <Button
              type="text"
              size="small"
              style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.8rem' }}
            >
              Terms of Service
            </Button>
          </Space>
        </div>
      </div>

      <style jsx>{`
        .footer-link:hover {
          color: #1890ff !important;
          background: rgba(24, 144, 255, 0.1) !important;
        }
        .social-button:hover {
          transform: translateY(-2px);
          background: rgba(24, 144, 255, 0.2) !important;
          border-color: #1890ff !important;
        }
      `}</style>
    </Footer>
  );
};

export default AppFooter;