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
              {/* <div style={styles.contactBtn}>
                <div style={styles.rightMargin}>
                  <a href="">
                    <button class="button is-dark is-outlined">
                      Contact Me
                    </button>
                  </a>
                </div>
              </div> */}
              <div style={styles.contact}>
                <div style={styles.p}>email: donaldrhughes@gmail.com</div>
                <div style={styles.p}>Greater Phoenix Area</div>
                <div style={styles.p}>
                  <a href="https://www.linkedin.com/in/donaldrhughes/">
                    LinkedIn
                  </a>
                </div>
                <div style={styles.p}>
                  <a href="https://github.com/donaldrhughes">Github</a>
                </div>
                <div style={styles.p}>
                  Twitter / X:{" "}
                  <a href="https://www.twitter.com/drhiot">@drhiot</a>
                </div>
                <div style={styles.p}>Skype: donaldrhughes</div>
                <div style={styles.p}>Phone: 805-206-6695</div>
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
