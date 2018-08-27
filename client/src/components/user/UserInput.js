import React, { Component } from 'react';
import { connect } from 'react-redux'

import { addUser } from  '../../actions/userActions';


class UserInput extends Component {

  state = {
    user_name: '',
    email: '',
    password: '',
    password_confirmation:''
  }

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

  }




  handleOnSubmit(event) {
    event.preventDefault();
    //this.props.addUser(this.state.user_name,this.state.email);
    this.props.addUser(this.state)
    this.setState({
      user_name: '',
      email:'',
      password: '',
      password_confirmation: ''
    });
  }



  render() {
    return (
      <div>
        <div>
          <form onSubmit={(event) => this.handleOnSubmit(event)}>

            <div class="form-group">
              <label for="user_name">User Name</label>
              <input
                class="form-control"
                type="text"
                id="user_name"
                aria-describedby="userHelp"
                placeholder="Enter User Name"
                value={this.state.user_name}
                onChange={(event) => this.handleOnChange(event)}
                />

            </div>


              <div class="form-group">
                <label for="email">Email</label>
                <input
                  class="form-control"
                  type="email"
                  id="email"
                  aria-describedby="userHelp"
                  placeholder="Enter Email"
                  value={this.state.email}
                  onChange={(event) => this.handleOnChange(event)}
                  />
              </div>


              <div class="form-group">
                <label for="password">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder="Enter Password"
                  value={this.state.password}
                  onChange={(event) => this.handleOnChange(event)}
                  />
              </div>

              <div class="form-group">
                <label for="password_confirmation">Password Confirmation</label>
                <input
                  type="password"
                  class="form-control"
                  id="password_confirmation"
                  placeholder="Confirm Password"
                  value={this.state.password_confirmation}
                  onChange={(event) => this.handleOnChange(event)}
                  />
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return { users: state.users}
}


const mapDispatchToProps = dispatch => ({
  addUser: user_state => dispatch(addUser(user_state))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserInput)
