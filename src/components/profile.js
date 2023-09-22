import React, { useEffect } from "react"
import { getUser } from "../services/auth"
import PropTypes from "prop-types"
import styles from "../../styles/reactStyles"

const Profile = () => {

  return (
    <>
      <div style={styles.pageH}>Username: </div>
      <ul style={styles.p}>
        <li>{`Full Name: ${getUser().name}`}</li>
        <li>{`Username: ${getUser().username}`}</li>
        <li>{`Email: ${getUser().email}`}</li>
      </ul>
    </>
  )
}

Profile.propTypes = {
  worth: PropTypes.number,
}

export default Profile
