/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: "https:react-modal-ez.site",
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  priority: 1,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
