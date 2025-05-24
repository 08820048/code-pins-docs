import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './donate.module.css';
import Translate from '@docusaurus/Translate';

export default function Donate() {
  const { siteConfig } = useDocusaurusContext();
  
  // 付款二维码图片路径
  // 注意：这些图片需要放在 static/img/ 目录下
  const wechatQRCode = 'img/wechat-pay.png';
  const alipayQRCode = 'img/alipay.png';

  return (
    <Layout
      title="捐赠"
      description="捐赠 CodePins 插件，支持我们持续开发与优化">
      <div className={styles.container}>
        <div className={styles.donateContainer}>
          <h1 className={styles.title}>捐赠</h1>
          <p className={styles.subtitle}>
            您的支持是我们持续改进的动力
          </p>
          
          <div className={styles.donateSection}>
            <h2 className={styles.sectionTitle}>关于 CodePins</h2>
            <p className={styles.donateText}>
              CodePins 是一款完全免费开源的 IntelliJ 平台插件，旨在帮助开发者更高效地组织和导航代码。
              我们致力于提供最佳的用户体验和功能，不断优化和改进插件的性能和可用性。
            </p>
            <p className={styles.donateText}>
              作为一个开源项目，我们不依赖商业盈利，而是依靠社区的支持和贡献。
              如果您觉得 CodePins 对您的工作有所帮助，并希望支持我们继续开发和维护，
              您可以考虑通过以下方式进行捐赠。
            </p>
          </div>
          
          <div className={styles.donateSection}>
            <h2 className={styles.sectionTitle}>为什么捐赠</h2>
            <p className={styles.donateText}>
              您的捐赠将用于：
            </p>
            <ul>
              <li>支持开发者持续改进和维护插件</li>
              <li>服务器和域名费用</li>
              <li>开发新功能和优化现有功能</li>
              <li>提供更好的文档和支持服务</li>
            </ul>
            <p className={styles.donateText}>
              作为回报，我们承诺：
            </p>
            <ul>
              <li>保持插件永久免费开源</li>
              <li>优先考虑捐赠者提出的功能请求</li>
              <li>在我们的贡献者名单中致谢</li>
            </ul>
          </div>
          
          <div className={styles.donateSection}>
            <h2 className={styles.sectionTitle}>捐赠方式</h2>
            
            <h3>GitHub Sponsors</h3>
            <p className={styles.donateText}>
              通过 GitHub Sponsors 平台支持我们，这是一种安全、透明的方式：
            </p>
            <a 
              href="https://github.com/sponsors/08820048" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.donateLink}
            >
              通过 GitHub Sponsors 捐赠
            </a>
            
            <h3>支付宝和微信支付</h3>
            <p className={styles.donateText}>
              您也可以通过扫描以下二维码，使用支付宝或微信支付进行捐赠：
            </p>
            
            <div className={styles.qrCodesContainer}>
              <div className={styles.qrCodeBox}>
                <img src={wechatQRCode} alt="微信支付二维码" className={styles.qrCodeImage} />
                <div className={styles.qrCodeTitle}>微信支付</div>
              </div>
              
              <div className={styles.qrCodeBox}>
                <img src={alipayQRCode} alt="支付宝二维码" className={styles.qrCodeImage} />
                <div className={styles.qrCodeTitle}>支付宝</div>
              </div>
            </div>
          </div>
          
          <div className={styles.thankYouNote}>
            <h3>感谢您的支持！</h3>
            <p>
              无论金额大小，您的每一份捐赠都对我们意义重大。<br />
              如果您有任何问题或建议，请随时通过 GitHub Issues 或问题反馈页面与我们联系。
            </p>
            <Link to="/" className={styles.homeLink}>返回首页</Link>
          </div>
        </div>
      </div>

    </Layout>
  );
}
