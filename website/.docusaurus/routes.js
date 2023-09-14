import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/obsidiosaurus-docs/blog',
    component: ComponentCreator('/obsidiosaurus-docs/blog', 'cbe'),
    exact: true
  },
  {
    path: '/obsidiosaurus-docs/blog/2023/06/01/Post1',
    component: ComponentCreator('/obsidiosaurus-docs/blog/2023/06/01/Post1', 'e30'),
    exact: true
  },
  {
    path: '/obsidiosaurus-docs/blog/archive',
    component: ComponentCreator('/obsidiosaurus-docs/blog/archive', '32f'),
    exact: true
  },
  {
    path: '/obsidiosaurus-docs/blog/tags',
    component: ComponentCreator('/obsidiosaurus-docs/blog/tags', 'ef6'),
    exact: true
  },
  {
    path: '/obsidiosaurus-docs/blog/tags/obsidiosaurus',
    component: ComponentCreator('/obsidiosaurus-docs/blog/tags/obsidiosaurus', '849'),
    exact: true
  },
  {
    path: '/obsidiosaurus-docs/blog/tags/test',
    component: ComponentCreator('/obsidiosaurus-docs/blog/tags/test', 'c11'),
    exact: true
  },
  {
    path: '/obsidiosaurus-docs/markdown-page',
    component: ComponentCreator('/obsidiosaurus-docs/markdown-page', 'e78'),
    exact: true
  },
  {
    path: '/obsidiosaurus-docs/docs',
    component: ComponentCreator('/obsidiosaurus-docs/docs', '88c'),
    routes: [
      {
        path: '/obsidiosaurus-docs/docs/intro',
        component: ComponentCreator('/obsidiosaurus-docs/docs/intro', 'd7e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/obsidiosaurus-docs/docs/main/Features',
        component: ComponentCreator('/obsidiosaurus-docs/docs/main/Features', '49f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/obsidiosaurus-docs/docs/main/Get started/Deployment/Github Pages',
        component: ComponentCreator('/obsidiosaurus-docs/docs/main/Get started/Deployment/Github Pages', 'aff'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/obsidiosaurus-docs/docs/main/Get started/Deployment/Netlify',
        component: ComponentCreator('/obsidiosaurus-docs/docs/main/Get started/Deployment/Netlify', '015'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/obsidiosaurus-docs/docs/main/Get started/Deployment/Vercel',
        component: ComponentCreator('/obsidiosaurus-docs/docs/main/Get started/Deployment/Vercel', 'b66'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/obsidiosaurus-docs/docs/main/Get started/Installation/Create notes',
        component: ComponentCreator('/obsidiosaurus-docs/docs/main/Get started/Installation/Create notes', '491'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/obsidiosaurus-docs/docs/main/Get started/Installation/Docusaurus Configuration',
        component: ComponentCreator('/obsidiosaurus-docs/docs/main/Get started/Installation/Docusaurus Configuration', '3d6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/obsidiosaurus-docs/docs/main/Get started/Installation/Docusaurus Installation',
        component: ComponentCreator('/obsidiosaurus-docs/docs/main/Get started/Installation/Docusaurus Installation', '4f8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/obsidiosaurus-docs/docs/main/Get started/Installation/Required Tools',
        component: ComponentCreator('/obsidiosaurus-docs/docs/main/Get started/Installation/Required Tools', 'e53'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/obsidiosaurus-docs/docs/main/Get started/Installation/Setup Git Repo',
        component: ComponentCreator('/obsidiosaurus-docs/docs/main/Get started/Installation/Setup Git Repo', '2a3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/obsidiosaurus-docs/docs/main/Get started/Installation/Vault Setup',
        component: ComponentCreator('/obsidiosaurus-docs/docs/main/Get started/Installation/Vault Setup', 'fbf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/obsidiosaurus-docs/docs/main/Get started/Installation/Website Structure',
        component: ComponentCreator('/obsidiosaurus-docs/docs/main/Get started/Installation/Website Structure', '756'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/obsidiosaurus-docs/docs/main/Get started/quick_start',
        component: ComponentCreator('/obsidiosaurus-docs/docs/main/Get started/quick_start', '385'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/obsidiosaurus-docs/docs/main/Get started/Usage',
        component: ComponentCreator('/obsidiosaurus-docs/docs/main/Get started/Usage', '95c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/obsidiosaurus-docs/docs/main/Introduction',
        component: ComponentCreator('/obsidiosaurus-docs/docs/main/Introduction', 'e70'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/obsidiosaurus-docs/',
    component: ComponentCreator('/obsidiosaurus-docs/', '68b'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
