import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';



import UserInput from '../components/user/UserInput'
import User from '../components/user/UserComponent'

class UsersContainer extends Component {



  render() {

    let allUsers = this.props.users.users

    let users = allUsers.map((user,index) => <li key={index}>
    <Link to={`/users/${user.id}`}>
      {user.user_name}
    </Link>
    </li>)


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



export default UsersContainer
