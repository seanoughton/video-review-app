import React, { Component } from 'react';
import { connect } from 'react-redux'

import { addUser } from  '../../actions/userActions';
import { login } from  '../../actions/loginActions';

import UserInput from '../user/UserInput'

class Login extends Component {

  state = {
    user_name: '',
    password: ''
  }

  handleOnChange(event) {
    if (event.target.id === 'user_name') {
      this.setState({
        user_name: event.target.value,
      });// end setState
    }// end if



    if (event.target.id === 'password') {
      this.setState({
        password: event.target.value,
      });// end setState
    }// end if



  }




  handleOnSubmit(event) {
    event.preventDefault();
    this.props.login(this.state)
    this.setState({
      user_name: '',
      password: ''
    });
  }



  render() {
    return (
      <div>
        <div>
        <h2>Log In </h2>
          <form onSubmit={(event) => this.handleOnSubmit(event)}>
            <label>User Name</label>

            <input
              id="user_name"
              type="text"
              value={this.state.user_name}
              onChange={(event) => this.handleOnChange(event)} /><br></br>



            <label>Password</label>
            <input
              id="password"
              type="text"
              value={this.state.password}
              onChange={(event) => this.handleOnChange(event)} /> <br></br>


            <br></br>
            <br></br>
            <input type="submit" />
          </form>
        </div><br></br><br></br>
        <h2>Sign Up</h2>
        < UserInput/>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return { users: state.users, current_user: state.current_user}
}


const mapDispatchToProps = dispatch => ({
  addUser: user_state => dispatch(addUser(user_state)),
  login: user_state => dispatch(login(user_state))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
