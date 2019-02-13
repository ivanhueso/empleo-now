import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Footer from './footer'
import './layout.css'

const Layout = ({ children }) => (
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
        <div style={{ background: '#fff', minHeight: '100vh' }}>
          <div className="content-page" style={{ padding: '80px 10px 0' }}>
            {children}
          </div>

          <Footer />
        </div>
      )
    }}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
