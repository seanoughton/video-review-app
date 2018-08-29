// import React stuff
import React, { Component } from 'react';

class UserInput extends Component {

  constructor(props) {
       super(props)
       this.state = {
         user_name: '',
         email: '',
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
    //this.props.addUser(this.state.user_name,this.state.email);
    this.props.addUser(this.state)
    this.setState({
      user_name: '',
      email:'',
      password: '',
      password_confirmation: ''
    });
  }// end handleOnSubmit



  render() {

    let alert
    //set an alert if the password and password_confirmation do not match
    if (this.props.current_user.login === false){
      alert = <div class="alert alert-danger" role="alert">
        Password and Password Confirmation do not match
      </div>
    }

    return (
      <div>
        <div>
          {alert}
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
                required/>
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
                  required/>
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
                  required/>
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
                  required/>
              </div>
              <button type="submit" class="btn btn-secondary">Submit</button>
          </form>
        </div>
      </div>
    )// end return
  }// end render
}// end class definition



export default UserInput
