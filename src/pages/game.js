import React from "react"
import Layout from "../components/layout"
import styles from "../../styles/reactStyles"
import PropTypes from "prop-types"

const Game = () => {
  return (
    <Layout>
      <div style={styles.mainTitleHeader}><a href=''>Features</a></div>
      <br/>
      <div style={styles.pageHeader}><a href='/char'>Characters</a></div>
      <div style={styles.sectionHeader}><a href=''>Archetypes</a></div>
      <div style={styles.sectionHeader}><a href=''>Attributes</a></div>
      <div style={styles.sectionHeader}><a href=''>Skills</a></div>
      <div style={styles.sectionHeader}><a href=''>Race</a></div>
      <div style={styles.sectionHeader}><a href=''>Class</a></div>
      <div style={styles.sectionHeader}><a href=''>Gear</a></div>
      <div style={styles.sectionHeader}><a href=''>Abilites</a></div>
      <br/>
      <div style={styles.pageHeader}><a href=''>Environments</a></div>
      <div style={styles.sectionHeader}><a href=''>Space</a></div>
      <div style={styles.sectionHeader}><a href=''>Dimensions</a></div>
      <div style={styles.sectionHeader}><a href=''>Planetary</a></div>
      <div style={styles.sectionHeader}><a href=''>Afterlife</a></div>
      <br/>
      <div style={styles.pageHeader}><a href=''>Combat</a></div>
      <div style={styles.sectionHeader}><a href=''>Basics</a></div>
      <div style={styles.sectionHeader}><a href=''>Advanced</a></div>
      <br/>
      <div style={styles.pageHeader}><a href=''>Party</a></div>
      <div style={styles.sectionHeader}><a href=''>Compositions</a></div>
      <br/>
      <div style={styles.pageHeader}><a href=''>Science</a></div>
      <div style={styles.pageHeader}><a href=''>Religion</a></div>
      <div style={styles.pageHeader}><a href=''>Technology</a></div>
      <div style={styles.pageHeader}><a href=''>Objectives</a></div>
      <div style={styles.pageHeader}><a href=''>Generations</a></div>
      <div style={styles.center}><a href='https://dither001.itch.io/rogue-souls'><button class='button is-dark is-outlined'>Download</button> </a></div>
    </Layout>
  )
}

Game.propTypes = {
  // posts: PropTypes.array,
}

export default Game
