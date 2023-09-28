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
    description: `A full stack engineer with a strong focus on front-end and mobile development. Has extensive expertise with React and React-Native used in PHP, node, and Java environments. Is a reliable self-starter with a passion for technology and promoting cross-team knowledge transfer. He is always focused on the Client’s technology goals for success.
    `,
    skills: `Typescript, Java, PHP, cURL, graphQL, regex, bash
    NextJS, Gatsby, React, React-Native, Node (Express),  jQuery, Angular, Laravel, Spring Boot
    redux, jest / RTL, Storybook, i18next, formik
    Headless CMS, API, UX/UI, Atomic Design, Functional Programming, MVC, OOP, Authentication, DNS, Data Structures, TDD, SDLC, CI/CD,  AJAX, JSON, Web3, Virtualization, Serverless Cloud, IoT, Modeling, BIG O(n), OSI
    Docker, Jenkins, Postman, Strapi, XCode, Gradle, Contentful, Shopify, WordPress, BigCommerce, Git, Jira, Figma, Android, IOS, SQL Server, Netlify, Heroku, Azure, Firebase, Invision, Photoshop, Drupal, Joomla, Mysql, No-sql, Active Directory, Tableau, Rackspace, httpd
    `,
    education: `Capella University - BS Information Technology, Minor: Mobile Application Development -- GPA: 3.5+
    University of California, Irvine - Coding Bootcamp (Diploma) - 26 Continuing Education Units (CEU)
    Certifications: Javascript, React, Node, mysql, no-sql, jQuery, HTML, CSS
    Scrum Fundamentals Certified (SFC) - ScrumStudy - VMEdu
    Countywide University - Information Technology Certification - IT Campus Program (Infrastructure)
    Windows Server, MSSQL Administration, AD Design and Security, Transact SQL, DB Design
    Comp-Tia - A+ Certification | Microsoft Certified Professional | AWS Essentials
    CyberSummitUSA - TOLA Virtual Cyber Security Summit Power Hour - (2) CEU`,
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
