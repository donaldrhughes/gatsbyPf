import React from "react"
import Layout from "../components/layout"
import styles from "../../styles/reactStyles"
import Bio from "../components/bio"
import PropTypes from "prop-types"

const Contact = () => {
  return (
    <Layout>
      <div style={styles.contactBtn}>
      <div style={styles.rightMargin}><a href=''><button class='button is-primary is-outlined'>Twitter</button> </a></div>
      <div style={styles.rightMargin}><a href=''><button class='button is-primary is-outlined'>Patreon</button> </a></div>
      <div style={styles.rightMargin}><a href='https://dither001.itch.io/rogue-souls'><button class='button is-dark is-outlined'>Download</button> </a></div>
    </div>
    <Bio/>
    </Layout>
  )
}

Contact.propTypes = {
  // posts: PropTypes.array,
}

export default Contact
