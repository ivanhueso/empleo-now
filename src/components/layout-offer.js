import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Footer from './footer'
import './layout.css'
const LayoutOffer = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => {
      return (
        <>
          <div className="content-page">{children}</div>
          <Footer />
        </>
      )
    }}
  />
)

LayoutOffer.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutOffer
