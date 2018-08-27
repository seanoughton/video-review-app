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
            <label>User Name</label>

            <input
              id="user_name"
              type="text"
              value={this.state.user_name}
              onChange={(event) => this.handleOnChange(event)} /><br></br>

              <label>Email</label>
              <input
                id="email"
                type="text"
                value={this.state.email}
                onChange={(event) => this.handleOnChange(event)} /><br></br>

                <label>Password</label>
                <input
                  id="password"
                  type="text"
                  value={this.state.password}
                  onChange={(event) => this.handleOnChange(event)} /> <br></br>

                <label>Password Confirmation</label>
                <input
                  id="password_confirmation"
                  type="text"
                  value={this.state.password_confirmation}
                  onChange={(event) => this.handleOnChange(event)} />

            <br></br>
            <br></br>
            <input type="submit" />
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
