import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'


class NavBar extends Component {
//const NavBar = () => {

handleOnClick(event) {
  //event.preventDefault();
  this.props.deleteCurrentUser()
}



render (){



  return (

    <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark border">
      <a class="navbar-brand" href="/">Video Review</a>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

    </nav>





  );
};
}

const mapStateToProps = (state) => {
  return { current_user: state.users.current_user}
}



export default connect(mapStateToProps)(NavBar)
