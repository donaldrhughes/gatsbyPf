import React from "react"
import Layout from "../components/layout"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { AppContext } from "../context/app-context"
import styles from "../../styles/reactStyles"
// import rs_pic from "../images/universe.jpeg"

const Index = () => (
  <Layout>
    <AppContext.Consumer>
      {({ siteMetadata }) => {
        return (
          <>
            {/* <img alt="header_pic" style={{ width: "100%" }} src={rs_pic} /> */}
            <h3 style={styles.titleH}>
              <Link to="/">{"Portfolio"}</Link>
            </h3>
            <p style={styles.mainTxt}>{siteMetadata?.description}</p>
            <br />
            <p style={styles.mainTxt}>{siteMetadata?.skills}</p>
            <br />
            <p style={styles.mainTxt}>{siteMetadata?.education}</p>
          </>
        )
      }}
    </AppContext.Consumer>
  </Layout>
)

export default Index

Index.propTypes = {
  data: PropTypes.object,
  posts: PropTypes.array,
}
