import React, { useContext } from "react"
import { StaticQuery, graphql } from "gatsby"
import Seo from "../components/seo"
import Menu from "./menu"
import PropTypes from "prop-types"
import { AppContext } from "../context/app-context"

const Layout = ({ children }) => {
  const context = useContext(AppContext)
  return (
    <>
      <div className="global-wrapper">
        <StaticQuery
          query={graphql`
            {
              site {
                siteMetadata {
                  title
                  description
                  skills
                  education
                }
              }
              allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
                nodes {
                  excerpt
                  fields {
                    slug
                  }
                  frontmatter {
                    date(formatString: "MMMM DD, YYYY")
                    title
                    description
                  }
                }
              }
            }
          `}
          render={data => (
            <AppContext.Consumer>
              {() => {
                try {
                  context.updateData(data)
                } catch (err) {
                  console.error(err)
                }
              }}
            </AppContext.Consumer>
          )}
        />
        <header className="global-header">
          {
            <>
              <Menu />
            </>
          }
        </header>
        <main>{children}</main>
        <footer>© {new Date().getFullYear()}, Built by Donald R Hughes</footer>
      </div>
    </>
  )
}

export const Head = () => <Seo title="Donald R Hughes" />

Layout.propTypes = {
  title: PropTypes.string,
  siteDesc: PropTypes.string,
  data: PropTypes.object,
  posts: PropTypes.array,
}

export default Layout
