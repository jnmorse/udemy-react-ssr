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
      <div>
        {'Here\'s a big list of users:'}
        {this.renderUsers()}
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

function loadData(store) {
  return store.dispatch(fetchUsers())
}

export default {
  component: connect(mapStateToProps, { fetchUsers })(UserList),
  loadData
}
