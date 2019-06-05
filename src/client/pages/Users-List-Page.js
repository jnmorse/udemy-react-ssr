import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

// eslint-disable-next-line import/no-relative-parent-imports
import { fetchUsers } from '../actions'

class UserList extends Component {
  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.fetchUsers()
  }

  /* eslint-disable class-methods-use-this */
  head() {
    const { users } = this.props

    return (
      <Helmet>
        <title>{`React SSR: Users List (${users.length})`}</title>
        <meta property="og:title" content="Users List" />
      </Helmet>
    )
  }
  /* eslint-enable class-methods-use-this */

  renderUsers() {
    const { users } = this.props

    return users.map(user => [<li key={user.id}>{user.name}</li>])
  }

  render() {
    return (
      <div className="container">
        {this.head()}
        <div className="row">
          <header>
            <h1>{"Here's a big list of users:"}</h1>
          </header>

          <ul>{this.renderUsers()}</ul>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ users }) {
  return { users }
}

UserList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired,
  fetchUsers: PropTypes.func.isRequired
}

UserList.loadData = ({ dispatch }) => dispatch(fetchUsers())

export default connect(
  mapStateToProps,
  { fetchUsers }
)(UserList)
