import React from 'react';
import RootElement from './src/components/root-element';

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */
export const onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: `en` })
}

export const wrapRootElement = ({ element }) => {
  return <RootElement>{element}</RootElement>;
};