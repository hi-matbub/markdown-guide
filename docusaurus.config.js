module.exports = {
  title: 'Mat Bub',
  tagline: 'Full Stack Web Developer',
  url: 'https://matbub.co',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'hi-matbub', // Usually your GitHub org/user name.
  projectName: 'portfolio', // Usually your repo name.
  themeConfig: {
    disableDarkMode: true,
    navbar: {
      title: 'Mat Bub | Web Developer',
      logo: {
        alt: 'logo',
        src: 'img/mat.png',
      },
      links: [
        // {
        //   to: 'docs/',
        //   activeBasePath: 'docs',
        //   label: 'Docs',
        //   position: 'left',
        // },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'mailto:hi@matbub.co',
          label: 'hi@matbub.co',
          position: 'right',
        },
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
        
      ],
    },
    footer: {
      style: 'dark',
      links: [
        // {
        //   title: 'Docs',
        //   items: [
        //     {
        //       label: 'Style Guide',
        //       to: 'docs/',
        //     },
        //     {
        //       label: 'Second Doc',
        //       to: 'docs/doc2/',
        //     },
        //   ],
        // },
        {
          title: 'Community',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/matbub/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/hi-matbub',
            },
            {
              label: 'Blog',
              to: 'blog',
            },
          ],
        },
        // {
        //   title: 'More',
        //   items: [
        //     {
        //       label: 'Blog',
        //       to: 'blog',
        //     },
        //     {
        //       label: 'GitHub',
        //       href: 'https://github.com/facebook/docusaurus',
        //     },
        //   ],
        // },
      ],
      copyright: `© ${new Date().getFullYear()} Mat Bub.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'doc1',
          // sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        // docs: {
        //   routeBasePath: '/', 
        //   homePageId: 'doc1', 
        //   sidebarPath: require.resolve('./sidebars.js'),
        // },
        blog: {
          showReadingTime: true,
          /* only render blog
          routeBasePath: '/', 
          sidebarPath: require.resolve('./sidebars.js'),
          */
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

};
