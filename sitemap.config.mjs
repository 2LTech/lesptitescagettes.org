/** @type {import('next-sitemap').IConfig} */
const sitemapConfig = {
  siteUrl: 'https://lesptitescagettes.org',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/legal'
      }
    ]
  }
}

export default sitemapConfig
