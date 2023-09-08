import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import PrivateRoute from "../components/privateRoute"
import Profile from "../components/profile"
import Login from "../components/login"
import Sandbox from "../components/sandbox"

const App = () => (
  <Layout>
    <Router>
      <PrivateRoute path="/app/profile" component={Profile} />
      <Login path="/app/login" component={Login}/>
      <Sandbox path="/app/sandbox" component={Sandbox}/>
    </Router>
  </Layout>
)

export default App