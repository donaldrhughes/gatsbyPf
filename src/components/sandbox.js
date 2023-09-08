import React from "react"
import PropTypes from "prop-types"
import { AppContext } from "../context/app-context"

const Sandbox = () => (
    <AppContext.Consumer>
      {({ siteMetadata }) => {
        return (
          <>
            <p>
              {" "}
              Do you own it or lease it local gangs who may know you and they
              may operate in your area, they may help or hinder your business
              maybe they conduct their business in your bar -- no guns no droids
              bartending skill firearms intimidation? management? salvage
              communications contracts go through a middleman
            </p>
          </>
        )
      }}
    </AppContext.Consumer>
)

export default Sandbox

Sandbox.propTypes = {
    siteMetadata: PropTypes.object,
  }
