import React from "react"
import Layout from "../components/layout"
import styles from "../../styles/reactStyles"
import PropTypes from "prop-types"

const Tech = () => {
  return (
    <Layout>
      <div style={styles.pageHeader}><a href=''>Technology</a></div>
      <div style={styles.sectionHeader}><a href=''>Basic</a></div>
      <div style={styles.sectionHeader}>Advanced</div>
      <div style={styles.sectionHeader}>Military</div>
      <div style={styles.sectionHeader}>Civilian</div>
      <div style={styles.sectionHeader}>Future</div>
      <br/>
      <div style={styles.pageHeader}><a href='https://dither001.itch.io/rogue-souls'><button class='button is-dark is-outlined'>Download</button> </a></div>
    </Layout>
  )
}

Tech.propTypes = {
  // posts: PropTypes.array,
}

export default Tech
