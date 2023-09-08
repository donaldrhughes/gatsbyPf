import React from "react"
import Layout from "../components/layout"
import styles from "../../styles/reactStyles"
import PropTypes from "prop-types"

const Religion = () => {
  return (
    <Layout>
      <div style={styles.pageHeader}><a href=''>Religion</a></div>
      <div style={styles.sectionHeader}><a href=''>Monotheism</a></div>
      <div style={styles.sectionHeader}>Polytheism</div>
      <div style={styles.sectionHeader}>Atheism</div>
      <div style={styles.sectionHeader}>Spiritual</div>
      <div style={styles.sectionHeader}>Agnostic</div>
      <div style={styles.sectionHeader}>Beliefs</div>
      <p>Religion system will be generated. Religions will be spotlighted on around the universe. </p>
      <br/>
      <div style={styles.pageHeader}><a href='https://dither001.itch.io/rogue-souls'><button class='button is-dark is-outlined'>Download</button> </a></div>
    </Layout>
  )
}

Religion.propTypes = {
  // posts: PropTypes.array,
}

export default Religion
