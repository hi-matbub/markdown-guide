module.exports = {
  title: 'Mat Bub',
  tagline: 'Full Stack Web Developer',
  url: 'https://matbub.co',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  projectName: 'showcase', // Usually your repo name.
  themeConfig: {
    disableDarkMode: true,
    navbar: {
      title: 'Mat Bub | Web Developer',
      logo: {
        alt: 'logo',
        src: 'img/mat.png',
      },
      links: [  
        {to: 'works', label: 'Works', position: 'left'},
        {
          href: 'https://github.com/hi/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
  },
  presets: [['@docusaurus/preset-classic']],

};
