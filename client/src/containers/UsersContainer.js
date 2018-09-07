/// import React stuff
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

/// import Components
import UserInfo from '../components/user/UserInfo'
import NavBarUsers from '../components/navbar/NavBarUsers';

/// import actions
import { deleteUser } from  '../actions/userActions';

class UsersContainer extends Component {

//fires off deleteUser action if confirmation
  handleDeleteUser = (event) => {
    event.preventDefault();
    if (window.confirm('Are you sure you wish to delete this item?')){
      this.props.deleteUser(event.target.dataset.id)
    }
  }// end handleOnClick

  render() {

    //set default values
    let allUsers = this.props.users.users
    let displayUsers

    // if the current_user is admin show delete button
    if (this.props.current_user.admin == true ) {
      displayUsers = allUsers.map( (user,index) =>
        <UserInfo
          user={user}
          key={user.id}
          handleOnClick={this.handleOnClick}
          button={<button className="btn btn-danger"  onClick={this.handleDeleteUser} data-id={user.id}>  Delete User </button>}
          /> )
    } else {
      displayUsers = allUsers.map( (user,index) =>
        <UserInfo
          user={user}
          key={user.id}
          /> )
    }


    return (
      <div className="container-fluid">
        <NavBarUsers />
        <h1 className="text-white"> Here are all of the Users: </h1><br></br>
          <div className="row">
              {displayUsers}
          </div>
      </div>
    )
  }// end render
}// end class definition

const mapStateToProps = (state) => {
  return { users: state.users, current_user: state.current_user.current_user}
}

const mapDispatchToProps = dispatch => ({
  deleteUser: user_state => dispatch(deleteUser(user_state))
})

export default connect(mapStateToProps,mapDispatchToProps)(UsersContainer)
