import React from "react"
import RootElement from './src/components/root-element';

// custom typefaces
import "@fontsource/montserrat/variable.css"
import "@fontsource/merriweather"
// normalize CSS across browsers
import "./src/normalize.css"
// custom CSS styles
import "./src/style.css"

// Highlighting for code blocks
import "prismjs/themes/prism.css"

export const wrapRootElement = ({ element }) => {
  return <RootElement>{element}</RootElement>;
};