import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';
import '../css/homepage.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
开始使用
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main className="main-homepage">
        <section className="hero-section">
          <img src="/img/logo1.png" alt="CodePins Logo" className="brand-logo" />
          <h1 className="brand-title">CodePins</h1>
          <p className="brand-desc">IntelliJ 系列 IDE 专用的极简高效图钉插件，支持代码标记、备注、标签、搜索、拖拽排序、批量操作、分享、导入导出等丰富功能。</p>
          <a className="button button--primary get-started-btn" href="/docs/intro">
            开始使用
          </a>
        </section>
        <section className="features-section">
        <div className="features-grid">
        <div className="feature-card">
          <h3>📌 代码图钉</h3>
          <p>一键标记关键代码，支持备注与标签。快速定位重要代码位置，提高开发效率。</p>
        </div>
        <div className="feature-card">
          <h3>🔍 极速搜索</h3>
          <p>本地中文全文检索，秒级定位。支持按文件路径、备注内容或标签快速筛选，让重要代码触手可及。</p>
        </div>
        <div className="feature-card">
          <h3>🧩 拖拽排序</h3>
          <p>支持拖放、批量管理、团队协作。自定义组织图钉顺序，让代码导航更符合您的工作流。</p>
        </div>
        <div className="feature-card">
          <h3>💾 持久化存储</h3>
          <p>项目级自动保存，重启IDE后仍可恢复。所有图钉数据安全保存，确保您的工作连续性不受影响。</p>
        </div>
        <div className="feature-card">
          <h3>🏷️ 智能标签</h3>
          <p>使用#标签组织图钉，支持多维度筛选。轻松对图钉进行分类，快速找到特定类型的代码位置。</p>
        </div>
        <div className="feature-card">
          <h3>🖼️ 代码预览</h3>
          <p>悬停即可查看代码内容，无需切换文件。提高上下文理解效率，减少工作流中断。</p>
        </div>
      </div>
        </section>
      </main>
    </Layout>
  );
}
