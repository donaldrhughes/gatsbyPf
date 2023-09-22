import React, { useEffect } from "react"
import { getUser } from "../services/auth"
import PropTypes from "prop-types"
import styles from "../../styles/reactStyles"

const Profile = () => {
  useEffect(() => {}, [])

  return (
    <>
      <div style={styles.header}>{getUser().name}Profile</div>
      <ul>
        <li>{getUser().name}</li>
    
      </ul>
    </>
  )
}

Profile.propTypes = {
  worth: PropTypes.number,
}

export default Profile
