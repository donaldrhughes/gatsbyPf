import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { getUser, isLoggedIn, logout } from "../services/auth"
import "../pages/mystyles.scss"
import { navigate } from "gatsby"
import ScrollingText from "./scrollingText"
// import { StaticImage } from "gatsby-plugin-image"
import styles from "../../styles/reactStyles"

const Menu = () => {
  const [toggleVal, setToggleVal] = useState("navbar-menu")
  // const image = `IMG_1946.jpg`
  useEffect(() => {}, [])

  function clickNavMobile(e) {
    e.preventDefault()
    if (toggleVal === "navbar-menu is-active") {
      setToggleVal("navbar-menu")
    } else if (toggleVal === "navbar-menu") {
      setToggleVal("navbar-menu is-active")
    }
  }

  return (
    <>
      <nav
        class="navbar is-info"
        style={styles.menuTxt}
        role="navigation"
        aria-label="main navigation"
      >
        <div class="navbar-brand">
          <a class="navbar-item" href="/">
            Donald R Hughes
            {/* 
            <StaticImage
            className="bio-avatar"
            layout="fixed"
            formats={["auto", "webp", "avif"]}
            src={`../images/${image}`}
            width={112}
            height={28}
            quality={95}
            alt="Logo"
          />
          */}
          </a>
          <p style={{ padding: "12px", color: "#43b733" }}>
            {isLoggedIn() ? (
              <ScrollingText text={`${getUser().name} reporting for duty`} />
            ) : (
              ``
            )}
          </p>
          <a
            role="button"
            class="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            onClick={clickNavMobile}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="navbarBasicExample" class={toggleVal}>
          <div class="navbar-start">
            <a class="navbar-item" href="/">
              Main
            </a>
            <a class="navbar-item" href="/resume">
              Resume
            </a>
            <a class="navbar-item" href="/blog">
              Blog
            </a>
            <a class="navbar-item" href="/contact">
              Contact
            </a>
            <hr class="navbar-divider" />
            {isLoggedIn() && <a class="navbar-item">Profile</a>}
            {isLoggedIn() && (
              <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link">Sandbox</a>
                <div class="navbar-dropdown">
                  <a class="navbar-item">Other</a>
                  <hr class="navbar-divider" />
                  <a class="navbar-item">Test</a>
                </div>
              </div>
            )}
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                {!isLoggedIn() && (
                  <a class="button is-primary is-light" href="/app/login">
                    Log in
                  </a>
                )}
                {isLoggedIn() && (
                  <a
                    class="button is-danger is-light"
                    href="/"
                    onClick={event => {
                      event.preventDefault()
                      logout(() => navigate(`/app/login`))
                    }}
                  >
                    Log Out
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

Menu.propTypes = {
  toggleVal: PropTypes.bool,
  toggled: PropTypes.string,
}

export default Menu
