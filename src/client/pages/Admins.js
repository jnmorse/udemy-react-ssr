import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { fetchAdmins } from '../actions'

class Admins extends React.Component {
  componentDidMount() {
    this.props.fetchAdmins()
  }

  /* eslint-disable class-methods-use-this */
  head() {
    return(
      <Helmet>
        <title>React SSR: List of Admins</title>
        <meta property="og:title" content="List of Admins" />
      </Helmet>
    )
  }
  /* eslint-enable class-methods-use-this */

  renderAdmins() {
    return this.props.admins.map(admin => (
      <li key={admin.id}>{admin.name}</li>
    ))
  }

  render() {
    return(
      <div className="container">
        {this.head()}
        <div className="row">
          <header>
            <h1>List of Admins</h1>
          </header>

          <ul>
            {this.renderAdmins()}
          </ul>
        </div>
      </div>
    )
  }
}

Admins.propTypes = {
  admins: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequied
  })).isRequired,
  fetchAdmins: PropTypes.func.isRequired
}

Admins.loadData = ({ dispatch }) => dispatch(fetchAdmins())

function mapStateToProps({ admins, auth }) {
  return{ admins, auth }
}

export default connect(mapStateToProps, { fetchAdmins })(Admins)
