import React from 'react'
import PropTypes from 'prop-types'

const NotFound = ({ staticContext }) => {
  // eslint-disable-next-line no-param-reassign
  staticContext.notFound = true

  return(
    <section>
      <header className="center-align" style={{ marginTop: 200 }}>
        <h1>404 Not Found</h1>
        <p>Sorry the page you where looking for was not found</p>
      </header>
    </section>
  )
}

NotFound.propTypes = {
  staticContext: PropTypes.shape({
    url: PropTypes.string,
    notFound: PropTypes.bool
  })
}

NotFound.defaultProps = {
  staticContext: {}
}

export default NotFound
