/// import React stuff
import React, { Component } from 'react';

class LoginInput extends Component {

  constructor(props) {
       super(props)
       this.state = {
         user_name: '',
         password: ''
       }
     }// end constructor


     handleOnChange(event) {
       this.setState({
         [event.target.name]: event.target.value
       })
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

         <div class="container">
               <h2>Log In </h2>
               {alert}
                 <form onSubmit={(event) => this.handleOnSubmit(event)}>
                   <div class="form-group">
                     <label for="user_name">User Name</label>
                     <input type="text"
                       class="form-control"
                       id="user_name"
                       name="user_name"
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
                       name="password"
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
         </div>// end container
       )
     }// end render
   }// end class definition



export default LoginInput
