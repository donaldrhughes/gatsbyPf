import React from "react"
import Layout from "../components/layout"
import styles from "../../styles/reactStyles"
import Bio from "../components/bio"
import PropTypes from "prop-types"

const Contact = () => {
  return (
    <Layout>
      <h1 style={styles.titleH}>Contact Information</h1>
    <Bio/>
    </Layout>
  )
}

Contact.propTypes = {
  // posts: PropTypes.array,
}

export default Contact
