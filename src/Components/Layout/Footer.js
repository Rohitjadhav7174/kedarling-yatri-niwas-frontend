import React, { useState } from 'react';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  LinkedIn, 
  LocationOn, 
  Email, 
  Phone 
} from '@mui/icons-material';

const CompactFooter = () => {
  const [hoveredSocial, setHoveredSocial] = useState(null);

  const socialLinks = [
    { 
      icon: Facebook, 
      color: "#1877F2", 
      label: "Facebook",
      href: "#"
    },
    { 
      icon: Instagram, 
      color: "#E4405F", 
      label: "Instagram",
      href: "#"
    },
    { 
      icon: Twitter, 
      color: "#1DA1F2", 
      label: "Twitter",
      href: "#"
    },
    { 
      icon: LinkedIn, 
      color: "#0A66C2", 
      label: "LinkedIn",
      href: "#"
    }
  ];

  const footerStyles = {
    footer: {
      background: 'rgb(101, 29, 116)',
      color: '#333',
      padding: '2rem 0 1rem',
      position: 'relative',
      overflow: 'hidden',
      borderTop: '1px solid #e5e5e5',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: '#9C27B0',
        backgroundSize: '400% 400%',
        animation: 'gradientShift 8s ease infinite',
      }
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 2rem',
    },
    content: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '2rem',
      marginBottom: '1.5rem',
    },
    section: {
      display: 'flex',
      flexDirection: 'column',
    },
    sectionTitle: {
      color: 'white',
      marginBottom: '0.8rem',
      fontSize: '1.1rem',
      fontWeight: '600',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
    },
    sectionText: {
      color: 'white',
      fontSize: '0.9rem',
      lineHeight: '1.5',
      margin: 0,
    },
    contactInfo: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.3rem',
    },
    contactLink: {
      color: 'white',
      textDecoration: 'none',
      fontSize: '0.9rem',
      
    },
    socialLinks: {
      display: 'flex',
      gap: '1rem',
      marginTop: '1rem',
    },
    socialButton: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      color: '#ff6b35',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      border: 'none',
      textDecoration: 'none',
    },
    gradientBtn: {
      background: 'white',
      color: 'black',
      padding: '0.5rem 1.2rem',
      border: 'none',
      borderRadius: '20px',
      fontSize: '0.9rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
      display: 'inline-block',
      marginTop: '0.5rem',
      '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: '0 5px 15px rgba(255, 107, 53, 0.3)',
      }
    },
    bottom: {
      borderTop: '1px solid rgba(0, 0, 0, 0.1)',
      paddingTop: '1rem',
      textAlign: 'center',
    },
    bottomText: {
      color: '#888',
      fontSize: '0.85rem',
      margin: 0,
    },
    heart: {
      color: 'white',
      animation: 'heartbeat 2s ease-in-out infinite',
    }
  };

  return (
    <>
      <style>
        {`
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          
          @keyframes heartbeat {
            0%, 50%, 100% { transform: scale(1); }
            25%, 75% { transform: scale(1.1); }
          }
          
          .footer-container::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 3px;
            background: white;
            background-size: 400% 400%;
            animation: gradientShift 8s ease infinite;
          }
          
          .heart {
            animation: heartbeat 2s ease-in-out infinite;
          }
          
          @media (max-width: 768px) {
            .footer-content {
              grid-template-columns: 1fr !important;
              text-align: center;
            }
            .social-links {
              justify-content: center;
            }
          }
        `}
      </style>
      
      <footer 
        className="footer-container"
        style={footerStyles.footer}
      >
        <div style={footerStyles.container}>
          <div 
            className="footer-content"
            style={footerStyles.content}
          >
            {/* Location Section */}
            <div style={footerStyles.section}>
              <h3 style={footerStyles.sectionTitle}>
                <LocationOn sx={{ fontSize: '1.2rem' }} />
                Our Location
              </h3>
              <p style={footerStyles.sectionText}>
                Kedarling Yatri Nivas<br />
                Mahalxmi Temple, Tarabai Road<br />
                Opp. Babujamal Darga, Kolhapur
              </p>
              <a 
                href="/rooms-card" 
                style={footerStyles.gradientBtn}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                  e.target.style.boxShadow = '0 5px 15px rgba(255, 107, 53, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                Book Now
              </a>
            </div>

            {/* Contact Section */}
            <div style={footerStyles.section}>
              <h3 style={footerStyles.sectionTitle}>
                <Email sx={{ fontSize: '1.2rem' }} />
                Contact Info
              </h3>
              <div style={footerStyles.contactInfo}>
                <a 
                  href="mailto:info@kedarlingyatrinivas.com"
                  style={footerStyles.contactLink}
                  onMouseEnter={(e) => e.target.style.color = '#ff6b35'}
                  onMouseLeave={(e) => e.target.style.color = '#666'}
                >
                  info@kedarlingyatrinivas.com
                </a>
                <a 
                  href="tel:+917028174997"
                  style={footerStyles.contactLink}
                  onMouseEnter={(e) => e.target.style.color = '#ff6b35'}
                  onMouseLeave={(e) => e.target.style.color = '#666'}
                >
                    Satish Manager 
                </a>
                <a 
                  href="tel:917028174997"
                  style={footerStyles.contactLink}
                  onMouseEnter={(e) => e.target.style.color = '#ff6b35'}
                  onMouseLeave={(e) => e.target.style.color = '#666'}
                >
                  +917028174997
                </a>
              </div>
            </div>

            {/* Social Section */}
            <div style={footerStyles.section}>
              <h3 style={footerStyles.sectionTitle}>
                <Phone sx={{ fontSize: '1.2rem' }} />
                Connect With Us
              </h3>
              <div 
                className="social-links"
                style={footerStyles.socialLinks}
              >
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      style={{
                        ...footerStyles.socialButton,
                        backgroundColor: hoveredSocial === index ? social.color : 'rgba(255, 255, 255, 0.1)',
                        color: hoveredSocial === index ? 'white' : 'white',
                        transform: hoveredSocial === index ? 'scale(1.1)' : 'scale(1)',
                      }}
                      onMouseEnter={() => setHoveredSocial(index)}
                      onMouseLeave={() => setHoveredSocial(null)}
                    >
                      <IconComponent sx={{ fontSize: '20px' }} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div style={footerStyles.bottom}>
            <p style={footerStyles.bottomText}>
              © 2025 Kedarling Yatri Nivas. All rights reserved. | 
              Designed with <span className="heart" style={footerStyles.heart}>❤️</span> for your comfort
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default CompactFooter;