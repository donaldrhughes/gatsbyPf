import React, { PureComponent } from 'react';
import PropTypes from "prop-types"
import { getUser, isLoggedIn } from "../services/auth"


class Message extends PureComponent {
    constructor(props) {
      super(props)
      this.state = {
        displayNav: props.displayNav ? "flex" : "none",
        greetingMessage: isLoggedIn() ? `Hello ${getUser().name}` : `You are not logged in`,
      }
    }
  
    componentDidMount() {
      this.add()
      console.log(this.state)
    }
  
    add = () => {
      this.setState({
        cart: ['ice cream'],
        total: 5,
        greetingMessage: isLoggedIn() ? `Hello ${getUser().name}` : `You are not logged in`,
      })
  
    }
  
    render() {
      console.log(this.state)
      return (
        <>
          {this.state.message}
        </>
      )
    }
  }
  
  Message.propTypes = {
    message: PropTypes.string, // display the navbar open or not
  }
  
  export default Message