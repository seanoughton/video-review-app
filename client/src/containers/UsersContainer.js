import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from  '../actions/userActions';
import { addUser } from  '../actions/userActions';
import UserInput from '../components/user/UserInput'

import User from '../components/user/UserComponent'

class UsersContainer extends Component {

  componentDidMount() {
     this.props.fetchUsers()
   }

  render() {
    let allUsers = this.props.users.users

    let users = allUsers.map((user,index) => <li key={index}> < User user={user}/> </li>)


    return (
      <div>
        <h1> All Users </h1>
        <ul>
          {users}
        </ul>
        < UserInput addUser={this.props.addUser}/>
      </div>
    )
  }
}



const mapStateToProps = (state) => {
  return { users: state.users}
}


const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers()),
  addUser: user_name => dispatch(addUser(user_name))
})

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
