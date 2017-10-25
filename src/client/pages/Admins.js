import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchAdmins } from '../actions'

class Admins extends React.Component {
  componentDidMount() {
    this.props.fetchAdmins()
  }

  renderAdmins() {
    return this.props.admins.map(admin => (
      <li key={admin.id}>{admin.name}</li>
    ))
  }

  render() {
    return(
      <div className="container">
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
