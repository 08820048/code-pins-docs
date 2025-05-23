// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  docs: [
    {
      type: 'doc',
      id: 'intro',
      label: '插件教程',
    },
    {
      type: 'doc',
      id: 'license',
      label: '开源协议',
    },
    {
      type: 'doc',
      id: 'privacy',
      label: '隐私政策',
    },
  ],
};

module.exports = sidebars;
