module.exports = {
  title: "Mat Bub",
  tagline: "Full Stack Web Developer",
  url: "https://matbub.co",
  baseUrl: "",
  favicon: "img/favicon.ico",
  organizationName: "hi-matbub", // Usually your GitHub org/user name.
  projectName: "md", // Usually your repo name.
  themeConfig: {
    image: "img/mat.png",
    navbar: {
      title: "Mat Bub | Full Stack Web Developer",
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
      copyright: `${new Date().getFullYear()} Mat Bub.`,
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
