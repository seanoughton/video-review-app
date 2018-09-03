/// import React stuff
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'

import { deleteCurrentUser } from  '../../actions/loginActions';


class NavBar extends Component {

handleOnClick(event) {
  this.props.deleteCurrentUser()
}

render (){
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark border">

      <NavLink  className="navbar-brand" to={`/users/${this.props.current_user.current_user.id}`} className="btn btn-primary"> {this.props.current_user.current_user.user_name} </NavLink>


      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">

          <NavLink to={`/projects`} className="nav-item nav-link"> Projects </NavLink>

          <NavLink to="/users" className="nav-item nav-link"> Users </NavLink>

          <NavLink to="/videos" className="nav-item nav-link"> Videos </NavLink>


          <NavLink to="/" className="nav-item nav-link" onClick={(event) => this.handleOnClick(event)}> Logout </NavLink>

        </div>
      </div>
    </nav>

    )//end return
  }//end render
}//end class


const mapStateToProps = (state) => {
  return { videos: state.videos, users: state.users, projects: state.projects, comments: state.comments, current_user: state.current_user
   }
}

const mapDispatchToProps = dispatch => ({
  deleteCurrentUser: () => dispatch(deleteCurrentUser())
})

export default connect(mapStateToProps,mapDispatchToProps)(NavBar)
