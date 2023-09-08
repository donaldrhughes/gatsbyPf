import React from "react"
import Layout from "../components/layout"
import styles from "../../styles/reactStyles"
import PropTypes from "prop-types"

const Science = () => {
  return (
    <Layout>
      <div style={styles.pageHeader}><a href=''>Science</a></div>
      <div style={styles.sectionHeader}><a href=''>Biology</a></div>
      <div style={styles.sectionHeader}>Geology</div>
      <div style={styles.sectionHeader}>Chemistry</div>
      <div style={styles.sectionHeader}>Physics</div>
      <div style={styles.sectionHeader}>Computer</div>
      <br/>
      <div style={styles.pageHeader}><a href='https://dither001.itch.io/rogue-souls'><button class='button is-dark is-outlined'>Download</button> </a></div>
    </Layout>
  )
}

Science.propTypes = {
  // posts: PropTypes.array,
}

export default Science
