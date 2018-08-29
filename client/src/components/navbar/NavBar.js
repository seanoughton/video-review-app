/// import React stuff
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'

class NavBar extends Component {

handleOnClick(event) {
  this.props.deleteCurrentUser()
}

render (){
  return (
    <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark border">

      <NavLink  class="navbar-brand" to={`/users/${this.props.current_user.current_user.id}`} class="btn btn-primary"> {this.props.current_user.current_user.user_name} </NavLink>


      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">

          <NavLink to={`/users/${this.props.current_user.current_user.id}/projects`} class="nav-item nav-link"> Projects </NavLink>

          <NavLink to="/users" class="nav-item nav-link"> Users </NavLink>

          <NavLink to="/videos" class="nav-item nav-link"> Videos </NavLink>


          <NavLink to="/" class="nav-item nav-link" onClick={(event) => this.handleOnClick(event)}> Logout </NavLink>

        </div>
      </div>
    </nav>

    )//end return
  }//end render
}//end class

const mapStateToProps = (state) => {
  return { current_user: state.current_user
   }
}

export default connect(mapStateToProps)(NavBar)
