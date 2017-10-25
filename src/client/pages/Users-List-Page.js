import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchUsers } from '../actions'

class UserList extends Component {
  componentDidMount() {
    this.props.fetchUsers()
  }

  renderUsers() {
    return this.props.users.map(user => [
      <li key={user.id}>{user.name}</li>
    ])
  }

  render() {
    return(
      <div className="container">
        <div className="row">
          <header>
            <h1>{'Here\'s a big list of users:'}</h1>
          </header>

          <ul>
            {this.renderUsers()}
          </ul>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ users }) {
  return{ users }
}

UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  })).isRequired,
  fetchUsers: PropTypes.func.isRequired
}

UserList.loadData = ({ dispatch }) => dispatch(fetchUsers())

export default connect(mapStateToProps, { fetchUsers })(UserList)
