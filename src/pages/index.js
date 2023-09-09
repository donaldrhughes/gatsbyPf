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
              <Link to="/">Portfolio</Link>
            </h1>
            <h3 style={styles.h}>
              Summary
            </h3>
            <p style={styles.p}>{siteMetadata?.description}</p>
            <br />
            <img alt="headerImage" style={styles.headerImg} src={mb_pic} />
            <br />
            <p style={styles.p}>{siteMetadata?.skills}</p>
            <br />
            <p style={styles.p}>{siteMetadata?.education}</p>
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
