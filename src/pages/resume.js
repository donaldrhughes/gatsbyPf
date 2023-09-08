import React from "react";
import Layout from "../components/layout";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { AppContext } from "../context/app-context";
import styles from "../../styles/reactStyles";
import mb_pic from "../images/macbook.jpg";

const Index = () => (
  <Layout>
    <AppContext.Consumer>
      {({ siteMetadata }) => {
        return (
          <>
          <h1 style={styles.titleH}>
              <Link to="/">Download</Link>
            </h1>
            <a
              style={styles.center}
              alt="Download my resume"
              href="https://dither001.itch.io/rogue-souls"
            >
              <button class="button is-dark is-outlined">Download Resume</button>{" "}
            </a>
          </>
        );
      }}
    </AppContext.Consumer>
  </Layout>
);

export default Index;

Index.propTypes = {
  data: PropTypes.object,
  posts: PropTypes.array,
};
