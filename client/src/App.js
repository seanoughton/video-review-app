import React, { Component } from 'react';

import {
  BrowserRouter as Router,//this is the router, all things route from App
  Route
} from 'react-router-dom';


import { connect } from 'react-redux'
import logo from './logo.svg';
import './App.css';

import VideosContainer from './containers/VideosContainer';
import UsersContainer from './containers/UsersContainer';
import ProjectsContainer from './containers/ProjectsContainer';
import CommentsContainer from './containers/CommentsContainer';

import NavBar from './components/navbar/NavBar';
import NavBarLogin from './components/navbar/NavBarLogin';
import Project from './components/project/ProjectComponent'
import Comment from './components/comment/CommentComponent'
import Video from './components/video/VideoComponent'
import User from './components/user/UserComponent'
import UserEdit from './components/user/UserEdit'
import Login from './components/login/LoginComponent'



import { fetchVideos } from  './actions/videoActions';
import { fetchUsers } from  './actions/userActions';
import { fetchProjects } from  './actions/projectActions';
import { fetchComments } from  './actions/commentActions';
import { addVideo } from  './actions/videoActions';
import { deleteCurrentUser } from  './actions/loginActions';
//import * as actions from './actions/videoActions.js'

class App extends Component {

  componentDidMount() {
     this.props.fetchVideos()
     this.props.fetchUsers()
     this.props.fetchProjects()
     this.props.fetchComments()
   }





   render() {
     let current_user = this.props.current_user


     let loggedIn = [

        <NavBar current_user={this.props.current_user} deleteCurrentUser={this.props.deleteCurrentUser}/>,
        <Route exact path="/" component={ProjectsContainer} />,
        <Route exact path="/projects" component={ProjectsContainer}  />,
        <Route exact path="/users/:id/projects" component={ProjectsContainer} />,
        <Route exact path='/projects/:id' render={routerProps => <Project {...routerProps} projects={this.props.projects} videos={this.props.videos} addVideo={this.props.addVideo}/>} />,

        <Route exact path='/users' component={UsersContainer} />,
        <Route exact path='/users/:id' render={routerProps => <User {...routerProps} users={this.props.users} projects={this.props.projects} current_user={this.props.current_user}/>} />,
        <Route exact path='/users/:id/edit' render={routerProps => <UserEdit {...routerProps} users={this.props.users} projects={this.props.projects}/>} />,

        <Route exact path="/videos" render={routerProps => <VideosContainer {...routerProps} videos={this.props.videos}  />} />,
        <Route exact path='/videos/:id' component={Video} />,

        <Route exact path="/comments" render={routerProps => <CommentsContainer {...routerProps} comments={this.props.comments}/>} />,
        <Route exact path='/comments/:id' render={routerProps => <Comment {...routerProps} comments={this.props.comments}/>} />,

        <Route exact path="/logout"  component={Login} />

      ]

      let notLoggedIn = [
        < NavBarLogin />,
        <Route exact path="*" component={Login} />
      ]

      let whatToRender

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
     );
   }//end render**/
}//end class

const mapStateToProps = (state) => {
  return { videos: state.videos, users: state.users, projects: state.projects, comments: state.comments, current_user: state.current_user
   }
}

const mapDispatchToProps = dispatch => ({
  fetchVideos: () => dispatch(fetchVideos()),
  fetchUsers: () => dispatch(fetchUsers()),
  fetchProjects: () => dispatch(fetchProjects()),
  fetchComments: () => dispatch(fetchComments()),
  addVideo: (video_state) => dispatch(addVideo(video_state)),
  deleteCurrentUser: () => dispatch(deleteCurrentUser())
})

export default connect(mapStateToProps,mapDispatchToProps)(App)

/**

**/
