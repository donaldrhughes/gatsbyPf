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
              <Link to="/resume">Resume Download and Direct Link</Link>
            </h1>
            {/* <iframe style={{ width: "100%"}} src="https://docs.google.com/document/d/e/2PACX-1vSprik6F_FO5Lo-tX7Hvy1gMdyHZUVdz-t65VBZFZ-HN5_PAY0Xgf0s8cpBWK2L5DX6eD9hS2Q_K2QX/pub?embedded=true"></iframe> */}
            {/* <a
              style={styles.center}
              alt="Resume Download"
              target="_blank"
              href="../../static/Donald_Hughes_2023_Q3_Dev.docx"
            >
              <button class="button is-large is-success is-outlined">Download Resume</button>{" "}
            </a>
            <br/>
            <a
              style={styles.center}
              alt="Resume Link"
              target="_blank"
              href="https://docs.google.com/document/d/e/2PACX-1vSprik6F_FO5Lo-tX7Hvy1gMdyHZUVdz-t65VBZFZ-HN5_PAY0Xgf0s8cpBWK2L5DX6eD9hS2Q_K2QX/pub"
            >
              <button class="button is-large is-success is-outlined">Resume Link</button>{" "}
            </a> */}
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
