/// import React stuff
import React, { Component } from 'react';
import { connect } from 'react-redux'

// import actions
import { addUser } from  '../../actions/userActions';
import { login } from  '../../actions/loginActions';

// import components
import UserInput from '../user/UserInput'
import LoginInput from './LoginInput'

class Login extends Component {

  constructor(props) {
       super(props)
       this.state = {
         user_name: '',
         password: ''
       }
     }// end constructor

  handleOnChange(event) {
    if (event.target.id === 'user_name') {
      this.setState({
        user_name: event.target.value,
      })// end setState
    }// end if


    if (event.target.id === 'password') {
      this.setState({
        password: event.target.value,
      })// end setState
    }// end if
  }// end handleOnChange

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.login(this.state)
    this.setState({
      user_name: '',
      password: ''
    })// end setState
  }// end handleOnSubmit



  render() {

    //set an alert if the password and username are not correct
    let alert
    if (this.props.current_user.login === false){
      alert = <div class="alert alert-danger" role="alert">
        Incorrect User Name and Password
      </div>
    }

    return (

      <div className="container">
        <div className="row">
          <div className="col bg-info text-white border-right">
            < LoginInput current_user={this.props.current_user} login={this.props.login}/>
          </div>{/* end col */}

          <div className="col bg-info text-white">
            <h2>Sign Up</h2>
            < UserInput current_user={this.props.current_user} addUser={this.props.addUser}/>

          </div>{/* end col */}

        </div>{/* end row */}
      </div>// end container

    )// end return
  }// end render
}// end class definition

const mapStateToProps = (state) => {
  return { users: state.users, current_user: state.current_user}
}


const mapDispatchToProps = dispatch => ({
  addUser: user_state => dispatch(addUser(user_state)),
  login: user_state => dispatch(login(user_state))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
