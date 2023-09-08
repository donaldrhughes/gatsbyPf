import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styles from "../../styles/reactStyles"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
            description
          }
          social {
            twitter
          }
        }
      }
    }
  `)
  const { siteMetadata } = data.site
  const image = `IMG_1946.jpg`
  const Author = () => {
    return (
      <>
        <div className="bio">
          <StaticImage
            className="bio-avatar"
            layout="fixed"
            formats={["auto", "webp", "avif"]}
            src={`../images/${image}`}
            width={50}
            height={50}
            quality={95}
            alt="Profile picture"
          />
          {siteMetadata.author?.name && (
            <p>
              Created by: <strong>{siteMetadata.author.name}</strong>{" "}
              {siteMetadata.author?.summary || null}
              {` `}
              <a href={`https://twitter.com/${siteMetadata.social?.twitter || ``}`}>
                Follow {siteMetadata.author.name} on Twitter!
              </a>
              <ul>
                <li style={styles.justify}>{siteMetadata.author?.description || null}</li>
              </ul>
            </p>
          )}
        </div>
      </>
    )
  }

  return (
    <>
      <Author></Author>

    </>
  )
}

export default Bio
