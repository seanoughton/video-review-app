import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from  '../actions/userActions';

import User from '../components/user/UserComponent'

class UsersContainer extends Component {

  componentDidMount() {
     this.props.fetchUsers()
   }

  render() {
    console.log(this.props.users)
    let allUsers = this.props.users.users

    let users = allUsers.map((user,index) => <li> < User key={index}   user={user}/> </li>)


    return (
      <div>
        <h1> All Users </h1>
        <ul>
          {users}
        </ul>

      </div>
    )
  }
}



const mapStateToProps = (state) => {
  return { users: state.users}
}


const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
