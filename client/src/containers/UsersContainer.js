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

    let displayUsers = allUsers.map((user,index) =>


          <div class="col-sm-4" key={index}>
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{user.user_name}</h5>
                <Link to={`/users/${user.id}`} class="btn btn-primary"> User Info </Link>
              </div> {/**end card-body **/}
            </div> {/**end card **/} <br></br>
          </div>)//end col


    return (
      <div class="container-fluid">

        <h1 class="text-white"> Here are all of the Users: </h1><br></br>



          <div class="row">
              {displayUsers}
          </div>



      </div>
    )
  }
}



export default UsersContainer
