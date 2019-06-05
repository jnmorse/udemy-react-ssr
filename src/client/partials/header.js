import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

// eslint-disable-next-line import/no-relative-parent-imports
import { fetchCurrentUser } from '../actions'

/* eslint-disable jsx-a11y/anchor-is-valid */
class Header extends Component {
  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.fetchCurrentUser()
  }

  render() {
    const { auth } = this.props

    const authButton = auth ? (
      <a href="/api/logout">Logout</a>
    ) : (
      <a href="/api/auth/google">Login</a>
    )

    return (
      <header>
        <nav>
          <header className="brand-logo left">
            <Link to="/">React SSR</Link>
          </header>

          <ul className="right">
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/admins">Admins</Link>
            </li>
            <li>{authButton}</li>
          </ul>
        </nav>
      </header>
    )
  }
}

Header.propTypes = {
  fetchCurrentUser: PropTypes.func.isRequired,
  auth: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired
}

Header.loadData = ({ dispatch }) => dispatch(fetchCurrentUser())

function mapStateToProps({ auth }) {
  return { auth }
}

export default connect(
  mapStateToProps,
  { fetchCurrentUser }
)(Header)
