import React from "react";
import Layout from "../components/layout";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { AppContext } from "../context/app-context";
import styles from "../../styles/reactStyles";

const Index = () => (
  <Layout>
    <AppContext.Consumer>
      {() => {
        return (
          <>
          <h1 style={styles.titleH}>
              <Link to="/resume">Resume Download and Direct Link</Link>
            </h1>
            <div style={styles.p}>Please <a href='/login'>login </a>or inquire for resume.</div>
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
