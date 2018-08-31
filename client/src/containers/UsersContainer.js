/// import React stuff
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

import UsersList from '../components/user/UsersList'
import NavBarUsers from '../components/navbar/NavBarUsers';

class UsersContainer extends Component {

  render() {

    let allUsers = this.props.users.users
    let displayUsers = allUsers.map( (user,index) =>
      <UsersList user={user} /> )

    return (
      <div class="container-fluid">
        <NavBarUsers />
        <h1 class="text-white"> Here are all of the Users: </h1><br></br>
          <div class="row">
              {displayUsers}
          </div>
      </div>
    )
  }// end render
}// end class definition

const mapStateToProps = (state) => {
  return { users: state.users}
}


export default connect(mapStateToProps)(UsersContainer)
