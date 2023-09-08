import React, { createContext, useState } from "react"

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
  /* ** Global State **
    -- (initialValues) set by useState */
  const [data, setData] = useState({})
  const [posts, setPosts] = useState([])
  const [siteMetadata, setSiteMetadata] = useState({})
  const [navCount, setNavCount] = useState(0)

  //Reducers
  const updateData = data => {
    setData(data)
    setPosts(data?.allMarkdownRemark?.nodes)
    setSiteMetadata(data?.site?.siteMetadata)
  }

  const updateNavCount = count => {
    setNavCount(count)
  }

  return (
    <AppContext.Provider
      value={{
        siteMetadata,
        data,
        posts,
        navCount,
        updateNavCount,
        updateData,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
