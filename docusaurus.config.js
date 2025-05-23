// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CodePins',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/logo1.png',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['zh-CN'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: undefined, // 关闭编辑链接
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    // 本地中文搜索
    [require.resolve('@easyops-cn/docusaurus-search-local'), {
      hashed: true,
      language: ["zh"],
      highlightSearchTermsOnTargetPage: true,
      explicitSearchResultPath: true,
    }],
    // PWA 支持
    [require.resolve('@docusaurus/plugin-pwa'), {
      debug: false,
      offlineModeActivationStrategies: [
        'appInstalled',
        'standalone',
        'queryString',
      ],
      pwaHead: [
        {
          tagName: 'link',
          rel: 'icon',
          href: '/img/logo1.png',
        },
        {
          tagName: 'link',
          rel: 'manifest',
          href: '/manifest.json',
        },
        {
          tagName: 'meta',
          name: 'theme-color',
          content: '#317EFB',
        },
      ],
    }],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'CodePins',
        logo: {
          alt: 'CodePins',
          src: 'img/logo1.png',
        },
        items: [



          {
            href: 'https://plugins.jetbrains.com/plugin/27300-codepins--code-bookmarks/edit/versions',
            label: 'Download',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [

              {
                label: 'License',
                to: '/docs/license',
              },
              {
                label: 'Privacy Policy',
                to: '/docs/privacy',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'X',
                href: 'https://x.com/_peter_you?s=11',
              },
              {
                label: 'developers',
                href: 'https://plugins.jetbrains.com/developers',
              },
            ],
          },
          {
            title: 'CodePins',
            items: [
              {
                label: 'Blog',
                href: 'https://www.ilikexff.cn',
              },
              // JetBrains Marketplace Widget
              {
                html: `<div id='yourelement'></div>
<script src='https://plugins.jetbrains.com/assets/scripts/mp-widget.js'></script>
<script>
  MarketplaceWidget.setupMarketplaceWidget('install', 27300, '#yourelement');
</script>`,
              },
            ],
          },
        ],
        copyright: '© 2025 CodePins. All rights reserved.',
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
