import React from 'react'
import { Helmet } from 'react-helmet'

const Home = () => (
  <div>
    <Helmet>
      <title>React SSR</title>
      <meta property="og:title" content="React SSR" />
    </Helmet>
    <header className="center-align" style={{ marginTop: 200 }}>
      <h1>Welcome</h1>
      <p>Check out these awesome features</p>
    </header>
  </div>
)

export default Home
