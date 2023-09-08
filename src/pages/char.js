import React from "react"
import Layout from "../components/layout"
import styles from "../../styles/reactStyles"
import PropTypes from "prop-types"

const Game = () => {
  return (
    <Layout>
      <div style={styles.pageHeader}><a href=''>Characters</a></div>
      <div style={styles.sectionHeader}><a href=''>Archetypes</a></div>
      <div style={styles.sectionHeader}><a href=''>Attributes</a></div>
      <div style={styles.sectionHeader}><a href=''>Skills</a></div>
      <div style={styles.sectionHeader}><a href=''>Race</a></div>
      <div style={styles.sectionHeader}><a href=''>Class</a></div>
      <div style={styles.sectionHeader}><a href=''>Gear</a></div>
      <div style={styles.sectionHeader}><a href=''>Abilites</a></div>
      <br/>
      <div style={styles.pageHeader}><a href='https://dither001.itch.io/rogue-souls'><button class='button is-dark is-outlined'>Download</button> </a></div>
    </Layout>
  )
}

Game.propTypes = {
  // posts: PropTypes.array,
}

export default Game
