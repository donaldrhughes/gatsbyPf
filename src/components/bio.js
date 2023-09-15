import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import styles from "../../styles/reactStyles";

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
  `);
  const { siteMetadata } = data.site;
  const image = `IMG_1946.jpg`; //picture of me
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
            <>
              <div style={styles.p}>
                {/* Created by: <strong>{siteMetadata.author.name}</strong>{" "}
              {siteMetadata.author?.summary || null} */}
                {` `}
                donaldrhughes@gmail.com
                Greater Phoenix Area
                <a href="https://www.linkedin.com/in/donaldrhughes/">LinkedIn</a>
                <a href="https://github.com/donaldrhughes">Github</a>
                Twitter: @drhiot
              </div>
            </>
          )}
        </div>
      </>
    );
  };

  return (
    <>
      <Author></Author>
    </>
  );
};

export default Bio;
