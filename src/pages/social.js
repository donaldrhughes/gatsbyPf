import React from "react"
import Layout from "../components/layout"
import styles from "../../styles/reactStyles"
import PropTypes from "prop-types"

const Social = () => {
  return (
    <Layout>
      <div style={styles.pageHeader}><a href=''>Social</a></div>
      <div style={styles.sectionHeader}><a href=''>Interaction</a></div>
      <div style={styles.sectionHeader}>PvE</div>
      <div style={styles.sectionHeader}>PvP?</div>
      <div style={styles.sectionHeader}>NPC</div>
      <div style={styles.sectionHeader}>Interspecies</div>
      <br/>
      <div style={styles.pageHeader}><a href='https://dither001.itch.io/rogue-souls'><button class='button is-dark is-outlined'>Download</button> </a></div>
    </Layout>
  )
}

Social.propTypes = {
  // posts: PropTypes.array,
}

export default Social
