import React, { Component } from 'react';
import { connect } from 'react-redux'

import { editUser } from  '../../actions/userActions';

import NavBarUsers from '../../components/navbar/NavBarUsers';

class UserInput extends Component {

  constructor(props) {
       super(props)
       this.state = {
         id: this.props.current_user.id,
         user_name: this.props.current_user.user_name,
         email: this.props.current_user.email,
         password: '',
         password_confirmation:''
       }
     }// end constructor

  handleOnChange(event) {
    if (event.target.id === 'user_name') {
      this.setState({
        user_name: event.target.value,
      });// end setState
    }// end if

    if (event.target.id === 'email') {
      this.setState({
        email: event.target.value,
      });// end setState
    }// end if

    if (event.target.id === 'password') {
      this.setState({
        password: event.target.value,
      });// end setState
    }// end if

    if (event.target.id === 'password_confirmation') {
      this.setState({
        password_confirmation: event.target.value,
      });// end setState
    }// end if
  }// end handleOnChange




  handleOnSubmit(event) {
    event.preventDefault();
    this.props.editUser(this.state)
    this.setState({
      user_name: '',
      email:'',
      password: '',
      password_confirmation: ''
    });
  }// end handleOnSubmit



  render() {
    return (
      <div>
        <NavBarUsers />
        <div>
          <h3 className="text-white">Update your User Profile</h3>
          <form onSubmit={(event) => this.handleOnSubmit(event)}>

            <div className="form-group">
              <label  className="text-white" for="user_name">User Name</label>
              <input
                className="form-control"
                type="text"
                id="user_name"
                aria-describedby="userHelp"
                placeholder="Enter User Name"
                value={this.state.user_name}
                onChange={(event) => this.handleOnChange(event)}
                />

            </div>


              <div className="form-group">
                <label className="text-white" for="email">Email</label>
                <input
                  className="form-control"
                  type="email"
                  id="email"
                  aria-describedby="userHelp"
                  placeholder="Enter Email"
                  value={this.state.email}
                  onChange={(event) => this.handleOnChange(event)}
                  />
              </div>


              <div className="form-group">
                <label className="text-white" for="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter Password"
                  value={this.state.password}
                  onChange={(event) => this.handleOnChange(event)}
                  />
              </div>

              <div className="form-group">
                <label className="text-white" for="password_confirmation">Password Confirmation</label>
                <input
                  type="password"
                  className="form-control"
                  id="password_confirmation"
                  placeholder="Confirm Password"
                  value={this.state.password_confirmation}
                  onChange={(event) => this.handleOnChange(event)}
                  />
              </div>
              <button type="submit" className="btn btn-secondary">Submit</button>
          </form>
        </div>
      </div>
    )// end return
  }// end render
}// end class definition

const mapStateToProps = (state) => {
  return { users: state.users, current_user: state.current_user.current_user}
}

const mapDispatchToProps = dispatch => ({
  editUser: user_state => dispatch(editUser(user_state))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserInput)
