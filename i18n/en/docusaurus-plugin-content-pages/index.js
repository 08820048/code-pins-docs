import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from '@site/src/pages/index.module.css';
import '@site/src/css/homepage.css';

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
            Get Started
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
      title={`Welcome to ${siteConfig.title}`}
      description="CodePins - A minimalist and efficient pin plugin for IntelliJ IDEs">
      <main className="main-homepage">
        <section className="hero-section">
          <img src="/img/logo.png" alt="CodePins Logo" className="brand-logo" />
          <h1 className="brand-title">CodePins</h1>
          <p className="brand-desc">A minimalist and efficient pin plugin for IntelliJ IDEs, supporting code marking, notes, tags, search, drag-and-drop sorting, batch operations, sharing, import/export, and more.</p>
          <a className="button button--primary get-started-btn" href="/docs/intro">
            Get Started
          </a>
        </section>
        <section className="features-section">
        <div className="features-grid">
        <div className="feature-card">
          <h3>📌 Code Pins</h3>
          <p>Mark key code with one click, supporting notes and tags. Quickly locate important code positions to improve development efficiency.</p>
        </div>
        <div className="feature-card">
          <h3>🔍 Fast Search</h3>
          <p>Local full-text search with instant results. Filter by file path, note content, or tags to make important code accessible.</p>
        </div>
        <div className="feature-card">
          <h3>🧩 Drag & Sort</h3>
          <p>Support for drag-and-drop, batch management, and team collaboration. Customize pin organization to match your workflow.</p>
        </div>
        <div className="feature-card">
          <h3>💾 Persistent Storage</h3>
          <p>Project-level auto-save, recoverable after IDE restart. All pin data is securely saved to ensure your work continuity.</p>
        </div>
        <div className="feature-card">
          <h3>🏷️ Smart Tags</h3>
          <p>Organize pins with #tags, supporting multi-dimensional filtering. Easily categorize pins and quickly find specific code locations.</p>
        </div>
        <div className="feature-card">
          <h3>🖼️ Code Preview</h3>
          <p>Hover to view code content without switching files. Improve context understanding efficiency and reduce workflow interruptions.</p>
        </div>
      </div>
        </section>
      </main>
    </Layout>
  );
}
