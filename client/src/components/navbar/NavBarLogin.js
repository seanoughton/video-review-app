/// import React stuff
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {

  render (){
    return (
      <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark border">
        <a className="navbar-brand" href="/">Video Review</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>
    )//end return
  }//end render
}//end class

export default NavBar
