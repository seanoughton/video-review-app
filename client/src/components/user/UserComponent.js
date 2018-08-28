import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


import { deleteUser } from  '../../actions/userActions';

class User extends Component {

  handleOnClick = () => {
    //this.props.deleteUser (this.props.user.id)
    this.props.deleteUser(this.props.match.params.id,10)
    //find a way to reroute this to the projects index page
  }

  render() {

    let user = {user_name:'', email:'', password:'', id:''}
    let userProjects = ''
    let allUsers = this.props.users.users
    let userId = parseInt(this.props.match.params.id,10)

    if (allUsers.length > 0) {
      user = allUsers.find(user =>  user.id === userId)
      userProjects = user.projects.map((project,index) => <li key={index}>
      <Link to={`/projects/${project.id}`}>
        {project.project_name}
      </Link>
      </li>)
    }



    return (
      <div class="container-fluid">

        <div class="row">



          <div class="card w-50">
            <div class="card-body">
              <h5 class="card-title">{this.props.current_user.user_name}</h5>
              <p class="card-text">{this.props.current_user.email}</p>
                <Link class="btn btn-primary" to={`/users/${this.props.current_user.id}/edit`}>
                  Edit Profile
                </Link>
            </div>
          </div>

        </div>








      </div>
    );
  }
};



const mapStateToProps = (state) => {
  return { current_user: state.current_user.current_user}
}

const mapDispatchToProps = dispatch => ({
  deleteUser: user_id => dispatch(deleteUser(user_id))
})

export default connect(mapStateToProps,mapDispatchToProps)(User)
/**
{user.user_name}<br></br>
{user.id}<br></br>
{user.email}
<button onClick={this.handleOnClick}> x </button>

<h3>Here all of this users projects</h3>
{userProjects}

<h3>Add a Project</h3>

**/
