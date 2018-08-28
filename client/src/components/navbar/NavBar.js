import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'

import { deleteCurrentUser } from  '../../actions/loginActions';


class NavBar extends Component {
//const NavBar = () => {

handleOnClick(event) {
  //event.preventDefault();
  this.props.deleteCurrentUser()
}



render (){

  return (

    <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark border">

      <NavLink  class="navbar-brand" to={`/users/${this.props.current_user.id}`} class="btn btn-primary"> {this.props.current_user.user_name} </NavLink>
      

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">

          <NavLink to="/projects" class="nav-item nav-link"> Projects </NavLink>

          <NavLink to="/users" class="nav-item nav-link"> Users </NavLink>

          <NavLink to="/videos" class="nav-item nav-link"> Videos </NavLink>


          <NavLink to="/" class="nav-item nav-link" onClick={(event) => this.handleOnClick(event)}> Logout </NavLink>


        </div>
      </div>

    </nav>





  );
};
}

const mapStateToProps = (state) => {
  return { current_user: state.current_user.current_user}
}

const mapDispatchToProps = dispatch => ({
  deleteCurrentUser: () => dispatch(deleteCurrentUser())
})

export default connect(mapStateToProps,mapDispatchToProps)(NavBar)
