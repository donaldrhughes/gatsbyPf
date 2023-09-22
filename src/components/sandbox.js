import React from "react";
import PropTypes from "prop-types";
import { AppContext } from "../context/app-context";
import styles from "../../styles/reactStyles";

const Sandbox = () => (
  <AppContext.Consumer>
    {({ siteMetadata }) => {
      return (
        <>
          <div className={styles.pageH}>Sandbox</div>
          <>This is the Sandbox</>
        </>
      );
    }}
  </AppContext.Consumer>
);

export default Sandbox;

Sandbox.propTypes = {
  siteMetadata: PropTypes.object,
};
