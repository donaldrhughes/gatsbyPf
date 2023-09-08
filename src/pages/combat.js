import React from "react"
import Layout from "../components/layout"
import styles from "../../styles/reactStyles"
import PropTypes from "prop-types"

const Combat = () => {
  return (
    <Layout>
      <div style={styles.pageHeader}><a href=''>Combat</a></div>
      <div style={styles.sectionHeader}><a href=''>Weapons</a></div>
      <div style={styles.sectionHeader}>Firearms</div>
      <div style={styles.sectionHeader}>Melee</div>
      <div style={styles.sectionHeader}>Ranged</div>
      <div style={styles.sectionHeader}>Unarmed</div>
      <br/>
      <div style={styles.pageHeader}><a href='https://dither001.itch.io/rogue-souls'><button class='button is-dark is-outlined'>Download</button> </a></div>
    </Layout>
  )
}

Combat.propTypes = {
  // posts: PropTypes.array,
}

export default Combat
