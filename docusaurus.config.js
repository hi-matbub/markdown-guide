module.exports = {
  title: "Mat Bub",
  tagline: "Full Stack Web Developer",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "",
  favicon: "img/favicon.ico",
  organizationName: "hi-matbub", // Usually your GitHub org/user name.
  projectName: "md", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Mat Bub",
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Community",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/hi-matbub",
            },
            {
              label: "LinkedIn",
              href: "https://www.linkedin/in/matbub",
            },
            {
              label: "Contact",
              href: "mailto:hi@matbub.co",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Mat Bub. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/",
          homePageId: "index",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
