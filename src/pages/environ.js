import React from "react"
import Layout from "../components/layout"
import styles from "../../styles/reactStyles"
import PropTypes from "prop-types"

const Environ = () => {
  return (
    <Layout>
      <div style={styles.pageHeader}><a href=''>Environments</a></div>
      <div style={styles.sectionHeader}><a href=''>Desert</a></div>
      <div style={styles.sectionHeader}><a href=''>Jungle</a></div>
      <div style={styles.sectionHeader}><a href=''>Swamp</a></div>
      <div style={styles.sectionHeader}><a href=''>Urban</a></div>
      <br/>
      <div style={styles.pageHeader}><a href='https://dither001.itch.io/rogue-souls'><button class='button is-dark is-outlined'>Download</button> </a></div>
    </Layout>
  )
}

Environ.propTypes = {
  // posts: PropTypes.array,
}

export default Environ
