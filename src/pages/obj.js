import React from "react"
import Layout from "../components/layout"
import styles from "../../styles/reactStyles"
import PropTypes from "prop-types"

const Obj = () => {
  return (
    <Layout>
      <div style={styles.pageHeader}><a href=''>Objective</a></div>
      <div style={styles.sectionHeader}><a href=''>Goals</a></div>
      <div style={styles.sectionHeader}>Win</div>
      <div style={styles.sectionHeader}>Lose</div>
      <br/>
      <div style={styles.pageHeader}><a href='https://dither001.itch.io/rogue-souls'><button class='button is-dark is-outlined'>Download</button> </a></div>
    </Layout>
  )
}

Obj.propTypes = {
  // posts: PropTypes.array,
}

export default Obj
