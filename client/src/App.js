/// import React stuff
import React, { Component } from 'react';
import {
  BrowserRouter as Router,//this is the router, all things route from App
  Route
} from 'react-router-dom';

import { connect } from 'react-redux'

/// import stylesheets
import './App.css'; // some extra styling is added in here on top of bootstrap

/// import Containers
import VideosContainer from './containers/VideosContainer';
import UsersContainer from './containers/UsersContainer';
import ProjectsContainer from './containers/ProjectsContainer';
import CommentsContainer from './containers/CommentsContainer';

/// import Components
import NavBar from './components/navbar/NavBar';
import NavBarLogin from './components/navbar/NavBarLogin';
import Project from './components/project/ProjectComponent'
import Comment from './components/comment/CommentComponent'
import Video from './components/video/VideoComponent'
import User from './components/user/UserComponent'
import UserEdit from './components/user/UserEdit'
import Login from './components/login/LoginComponent'


/// import actions
import { fetchVideos } from  './actions/videoActions';
import { fetchUsers } from  './actions/userActions';
import { fetchProjects } from  './actions/projectActions';
import { fetchComments } from  './actions/commentActions';
import { addVideo } from  './actions/videoActions';
import { deleteVideo } from  './actions/videoActions';
import { deleteCurrentUser } from  './actions/loginActions';
import { addProject } from  './actions/projectActions';
import { deleteProject } from  './actions/projectActions';


class App extends Component {

//when this component mounts get all the assets needed from the database
  componentDidMount() {
     this.props.fetchVideos()
     this.props.fetchUsers()
     this.props.fetchProjects()
     this.props.fetchComments()
   }

   render() {
     console.log('app fired')
     let current_user = this.props.current_user


     // if the user is loggedIn, then these routes will be available
     let loggedIn = [

        //<NavBar />,
        <Route exact path="/" component={ProjectsContainer} />,
        <Route exact path="/projects" component={ProjectsContainer}  />,
        <Route exact path='/projects/:id' render={routerProps => <Project {...routerProps} projects={this.props.projects} videos={this.props.videos} addVideo={this.props.addVideo} deleteVideo={this.props.deleteVideo}/>} />,

        <Route exact path='/users' component={UsersContainer} />,
        <Route exact path='/users/:id' render={routerProps => <User {...routerProps} users={this.props.users} projects={this.props.projects} current_user={this.props.current_user} addProject={this.props.addProject} deleteProject={this.props.deleteProject}/>} />,
        <Route exact path='/users/:id/edit' render={routerProps => <UserEdit {...routerProps} users={this.props.users} projects={this.props.projects}/>} />,

        <Route exact path="/videos" render={routerProps => <VideosContainer {...routerProps} videos={this.props.videos}  />} />,
        <Route exact path='/videos/:id' component={Video} />,

        <Route exact path="/comments" render={routerProps => <CommentsContainer {...routerProps} comments={this.props.comments}/>} />,
        <Route exact path='/comments/:id' render={routerProps => <Comment {...routerProps} comments={this.props.comments}/>} />,

        <Route exact path="/logout"  component={Login} />

      ]

      // if the user is not logged in then this is the only route available
      let notLoggedIn = [
        < NavBarLogin />,
        <Route exact path="*" component={Login} />
      ]


      let whatToRender

      //if the user is logged in, then there is a current_user in the store
      // if there is a current user in the store, then render loggedIn routes
      // else render notLoggedIn routes

       if (Object.keys(current_user.current_user).length > 0) {
         whatToRender = loggedIn
       } else {
         whatToRender = notLoggedIn
       }


     return (
       <Router>
         <div className="app bg-dark">
           {whatToRender}
         </div>
       </Router>
     )//end return
   }//end render
}//end class

// get all the elements from the store and place them in this component's props so that they can be passed down to other components
const mapStateToProps = (state) => {
  return { videos: state.videos, users: state.users, projects: state.projects, comments: state.comments, current_user: state.current_user
   }
}

// get all of the actions that will be fired when this component mounts
const mapDispatchToProps = dispatch => ({
  fetchVideos: () => dispatch(fetchVideos()),
  fetchUsers: () => dispatch(fetchUsers()),
  fetchProjects: () => dispatch(fetchProjects()),
  fetchComments: () => dispatch(fetchComments()),
  addVideo: (video_state) => dispatch(addVideo(video_state)),
  deleteVideo: (video_state) => dispatch(deleteVideo(video_state)),
  deleteCurrentUser: () => dispatch(deleteCurrentUser()),
  addProject: project_state => dispatch(addProject(project_state)),
  deleteProject: project_state => dispatch(deleteProject(project_state)),
})

export default connect(mapStateToProps,mapDispatchToProps)(App)

/**

**/
