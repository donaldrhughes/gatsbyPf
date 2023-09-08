import React from "react"
import Layout from "../components/layout"
import styles from "../../styles/reactStyles"
import PropTypes from "prop-types"

const Gens = () => {
  return (
    <Layout>
      <div style={styles.pageHeader}><a href='/gens'>Generations</a></div>
      <div style={styles.sectionHeader}><a href=''>Family</a></div>
      <div style={styles.sectionHeader}>Death</div>
      <div style={styles.sectionHeader}>Legacy</div>
      <br/>
      <div style={styles.pageHeader}><a href='https://dither001.itch.io/rogue-souls'><button class='button is-dark is-outlined'>Download</button> </a></div>
    </Layout>
  )
}

Gens.propTypes = {
  // posts: PropTypes.array,
}

export default Gens
