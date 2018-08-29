import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class User extends Component {



  render() {

    let user = {user_name:'', email:'', password:'', id:''}
    let userProjects = ''
    let allUsers = this.props.users.users
    let userId = parseInt(this.props.match.params.id,10)
    let editProfileButton

    if (allUsers.length > 0) {
      user = allUsers.find(user =>  user.id === userId)
      userProjects = user.projects.map((project,index) => <li key={index}>
      <Link to={`/projects/${project.id}`}>
        {project.project_name}
      </Link>
      </li>)
    }

    if (user.id === this.props.current_user.current_user.id){
      editProfileButton = <Link class="btn btn-primary" to={`/users/${this.props.current_user.id}/edit`}>
        Edit Profile
      </Link>
    }



    return (
      <div class="container-fluid">

        <div class="row">



          <div class="card w-50">
            <div class="card-body">
              <h5 class="card-title">{user.user_name}</h5>
              <p class="card-text">{user.email}</p>
                {editProfileButton}
            </div>
          </div>

        </div>








      </div>
    );
  }
};





export default User
/**

<button onClick={this.handleOnClick}> x </button>



**/
