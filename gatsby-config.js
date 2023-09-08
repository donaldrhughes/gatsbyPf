/**
 * @type {import('gatsby').GatsbyConfig}
 */

module.exports = {
  siteMetadata: {
    title: `Donald R Hughes`,
    author: {
      name: `Donald R Hughes`,
      summary: `Phoenix, AZ Area`,
      description: `Front End Web Developer specializing in React`,
    },
    description: `Front End Web Developer specializing in React and Gatsby`,
    description2: `TypeScript, Javascript (Next), PHP, Oracle Java 12, HTML5, SCSS, Regex, cURL, graphQL, SQL, XML
    Frameworks: Gatsby, React Web / React-Native, Node (Express),  JQuery, Angular, Laravel
    JS Libraries: Redux, Jest / React Testing Library, Storybook, lodash, Bulma, i18next, Formik, es-lint
    `,
    siteUrl: `http://drhiot.com`,
    social: {
      twitter: `@drhiot`,
    },
    contributors: [
      {
        name: `Donald Hughes`,
        summary: `Phoenix AZ Area`,
        description: `A 25 year technology problem solver with experience in web development, implementation, technical account management, and solutions consulting. Strong knowledge of computer applications, functional programming, and Agile methodologies with a distinct focus on Client success. Reliable self starter with a passion for completing projects and promoting cross-team communication. Utilizes industry standards, is collaborative, timely, and prepared.`,
      },
    ],
    features: { 
      name: `Web Developer
    Name
    Skillset Specialties
    Background
    Base of operations
    Network
    Work Ethic`
  }
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.nodes.map(node => {
                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [{ "content:encoded": node.html }],
                })
              })
            },
            query: `{
              allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
                nodes {
                  excerpt
                  html
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    date
                  }
                }
              }
            }`,
            output: "/rss.xml",
            title: "Gatsby Starter Blog RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `Gatsby`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    }
  ],
}
