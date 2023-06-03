import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './under-development.css'

const UnderDevelopment = (props) => {
  return (
    <div className="under-development-container">
      <Helmet>
        <title>under-development - Character NFT template</title>
        <meta
          property="og:title"
          content="under-development - Character NFT template"
        />
      </Helmet>
      <h1 className="under-development-text">
        <span>This area is under development</span>
        <br></br>
        <span>Thank you</span>
        <br></br>
      </h1>
      <Link to="/" className="under-development-navlink button">
        <span>
          <span>Back to home</span>
          <br></br>
        </span>
      </Link>
    </div>
  )
}

export default UnderDevelopment
