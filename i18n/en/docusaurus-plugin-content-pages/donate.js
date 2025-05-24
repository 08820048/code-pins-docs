import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './donate.module.css';
import Translate from '@docusaurus/Translate';

export default function Donate() {
  const { siteConfig } = useDocusaurusContext();
  
  // Payment QR code image paths
  // Note: These images need to be placed in the static/img/ directory
  const wechatQRCode = 'img/wechat-pay.png';
  const alipayQRCode = 'img/alipay.png';

  return (
    <Layout
      title="Support & Donate"
      description="Support CodePins plugin development and help us make it better">
      <div className={styles.container}>
        <div className={styles.donateContainer}>
          <h1 className={styles.title}>Support & Donate</h1>
          <p className={styles.subtitle}>
            Your support is our motivation to keep improving
          </p>
          
          <div className={styles.donateSection}>
            <h2 className={styles.sectionTitle}>About CodePins</h2>
            <p className={styles.donateText}>
              CodePins is a completely free and open-source IntelliJ platform plugin designed to help developers organize and navigate code more efficiently.
              We are committed to providing the best user experience and functionality, continuously optimizing and improving the plugin's performance and usability.
            </p>
            <p className={styles.donateText}>
              As an open-source project, we don't rely on commercial profits, but on the support and contributions from the community.
              If you find CodePins helpful for your work and would like to support our continued development and maintenance,
              you can consider donating through the following methods.
            </p>
          </div>
          
          <div className={styles.donateSection}>
            <h2 className={styles.sectionTitle}>Why Donate</h2>
            <p className={styles.donateText}>
              Your donations will be used for:
            </p>
            <ul>
              <li>Supporting developers to continuously improve and maintain the plugin</li>
              <li>Server and domain costs</li>
              <li>Developing new features and optimizing existing ones</li>
              <li>Providing better documentation and support services</li>
            </ul>
            <p className={styles.donateText}>
              In return, we promise to:
            </p>
            <ul>
              <li>Keep the plugin permanently free and open-source</li>
              <li>Prioritize feature requests from donors</li>
              <li>Acknowledge you in our list of contributors</li>
            </ul>
          </div>
          
          <div className={styles.donateSection}>
            <h2 className={styles.sectionTitle}>Donation Methods</h2>
            
            <h3>GitHub Sponsors</h3>
            <p className={styles.donateText}>
              Support us through the GitHub Sponsors platform, which is a secure and transparent way:
            </p>
            <a 
              href="https://github.com/sponsors/08820048" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.donateLink}
            >
              Donate via GitHub Sponsors
            </a>
            
            <h3>WeChat Pay and Alipay</h3>
            <p className={styles.donateText}>
              You can also donate by scanning the following QR codes using WeChat Pay or Alipay:
            </p>
            
            <div className={styles.qrCodesContainer}>
              <div className={styles.qrCodeBox}>
                <img src={wechatQRCode} alt="WeChat Pay QR Code" className={styles.qrCodeImage} />
                <div className={styles.qrCodeTitle}>WeChat Pay</div>
              </div>
              
              <div className={styles.qrCodeBox}>
                <img src={alipayQRCode} alt="Alipay QR Code" className={styles.qrCodeImage} />
                <div className={styles.qrCodeTitle}>Alipay</div>
              </div>
            </div>
          </div>
          
          <div className={styles.thankYouNote}>
            <h3>Thank You for Your Support!</h3>
            <p>
              Regardless of the amount, every donation means a lot to us.<br />
              If you have any questions or suggestions, please feel free to contact us through GitHub Issues or our feedback page.
            </p>
            <Link to="/" className={styles.homeLink}>Return to Homepage</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
