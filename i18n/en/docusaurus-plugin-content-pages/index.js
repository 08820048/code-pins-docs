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
          <div className="button-group">
            <a className="button button--primary get-started-btn" href="/docs/intro">
              Get Started
            </a>
            <a className="button button--secondary github-btn" href="https://github.com/08820048/codepins" target="_blank" rel="noopener noreferrer">
              <svg className="github-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              GitHub
            </a>
          </div>
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
