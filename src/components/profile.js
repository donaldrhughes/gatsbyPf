import React, { useEffect } from "react"
import { getUser } from "../services/auth"
import PropTypes from "prop-types"
import styles from "../../styles/reactStyles"

const Profile = () => {
  useEffect(() => {}, [])

  return (
    <>
      <div style={styles.header}>{getUser().name}'s Quarters</div>
      <ul>
        <li>{getUser().name}</li>
        <li>{getUser().email}</li>
        <li>Galaxy: A3d4</li>
        <li>StarSystem: E7g1</li>
        <li>Planet: Deep Sekh</li>
        <li>Worth: {`${"50"} tons`} </li>
      </ul>
    </>
  )
}

Profile.propTypes = {
  worth: PropTypes.number,
}

export default Profile
