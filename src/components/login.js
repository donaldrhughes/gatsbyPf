import React, { useState } from "react"
import { navigate } from "gatsby"
import { handleLogin, isLoggedIn } from "../services/auth"
import { AppContext } from "../context/app-context"
import PropTypes from "prop-types"
import styles from "../../styles/reactStyles"

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (username, password) => {
    console.log(username, password)
    handleLogin({
      username: username,
      password: password,
    })
    navigate(`/app/profile`)
  }

  if (isLoggedIn()) {
    navigate(`/app/profile`)
  }

  return (
    <AppContext.Consumer>
      {({ siteMetadata }) => {
        return (
          <>
            <RegistrationForm onSubmit={handleSubmit} />
          </>
        )
      }}
    </AppContext.Consumer>
  )
}

export default Login

Login.propTypes = {
  siteMetadata: PropTypes.object,
}

function RegistrationForm({ onSubmit }) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isEnable, setEnable] = useState(true)
  const handleKeyUp = () => {
    if (username.length > 0 && password.length > 0) setEnable(false)
    else setEnable(true)
  }
  return (
    <div style={styles.lowMargin}>
      <label>User Name</label>
      <input
        type="text"
        className="input"
        id="username-input"
        placeholder="username"
        value={username}
        onKeyUp={handleKeyUp}
        onChange={event => setUsername(event.target.value)}
      />
      <br />
      <br />
      <label>Password</label>
      <input
        type="password"
        className="input"
        id="password-input"
        placeholder="Password"
        onKeyUp={handleKeyUp}
        value={password}
        onChange={event => setPassword(event.target.value)}
      />
      <br />
      <br />
      <button
        type="submit"
        className="button is-dark"
        id="button-input"
        disabled={isEnable}
        onClick={() => onSubmit(username, password)}
      >
        Login
      </button>
    </div>
  )
}
