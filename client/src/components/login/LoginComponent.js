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

    let alert
    if (this.props.current_user.login === false){
      alert = <div class="alert alert-danger" role="alert">
        Incorrect User Name and Password
      </div>
    }

    return (


      <div class="container">
        <div class="row">
          <div class="col bg-info text-white border-right">
            <h2>Log In </h2>
            {alert}
              <form onSubmit={(event) => this.handleOnSubmit(event)}>


                <div class="form-group">
                  <label for="user_name">User Name</label>



                  <input type="text"
                    class="form-control"
                    id="user_name"
                    aria-describedby="userHelp"
                    placeholder="Enter User Name"
                    value={this.state.user_name}
                    onChange={(event) => this.handleOnChange(event)}
                    required/>
                    <div class="invalid-feedback">
                      Please choose a username.
                    </div>

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
                    <div class="invalid-feedback">
                      Please choose a username.
                    </div>
                </div>


                <button type="submit" class="btn btn-secondary">Submit</button>
              </form>
          </div>{/* end col */}

          <div class="col bg-info text-white">
            <h2>Sign Up</h2>
            < UserInput/>

          </div>{/* end col */}

        </div>{/* end row */}
      </div>// end container




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
