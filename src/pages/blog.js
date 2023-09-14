import React from "react"
import Layout from "../components/layout"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { AppContext } from "../context/app-context"
import styles from "../../styles/reactStyles"

const Blog = () => (
  <Layout>
    <AppContext.Consumer>
      {({ posts }) => {
        return (
          posts && (
            <ol style={{ listStyle: `none` }}>
              {posts.map(post => {
                const title = post.frontmatter.title || post.fields.slug
                return (
                  <li key={post.fields.slug}>
                    <article
                      className="post-list-item"
                      itemScope
                      itemType="http://schema.org/Article"
                      style={styles.p}
                    >
                      <header>
                        <h2>
                          <Link to={post.fields.slug} itemProp="url">
                            <span itemProp="headline">{title}</span>
                          </Link>
                        </h2>
                        <small>{post.frontmatter.date}</small>
                      </header>
                      <section>
                        <p style={styles.justify}
                          dangerouslySetInnerHTML={{
                            __html:
                              post.frontmatter.description || post.excerpt,
                          }}
                          itemProp="description"
                        />
                      </section>
                    </article>
                  </li>
                )
              })}
            </ol>
          )
        )
      }}
    </AppContext.Consumer>
    {}
  </Layout>
)

Blog.propTypes = {
  posts: PropTypes.array,
  title: PropTypes.string,
}

export default Blog
