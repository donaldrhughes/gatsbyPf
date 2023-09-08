import React from "react"
import PropTypes from "prop-types"
import { AppContext } from "../context/app-context"
import '../../styles/scrollingText.scss'

const ScrollingText = ({text}) => (
  <AppContext.Consumer>
    {({ siteMetadata }) => {
      return (
        <>
          <div id="scroll-container">
            <div id="scroll-text">{text}</div>
          </div>
        </>
      )
    }}
  </AppContext.Consumer>
)

export default ScrollingText

ScrollingText.propTypes = {
  siteMetadata: PropTypes.object,
}
