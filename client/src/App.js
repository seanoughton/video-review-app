import React, { Component } from 'react';

import {
  BrowserRouter as Router,//this is the router, all things route from App
  Route
} from 'react-router-dom';


import { connect } from 'react-redux'
import logo from './logo.svg';
import './App.css';

import sampleBootstrap from './containers/sampleBootstrap';

import VideosContainer from './containers/VideosContainer';
import UsersContainer from './containers/UsersContainer';
import ProjectsContainer from './containers/ProjectsContainer';
import CommentsContainer from './containers/CommentsContainer';

import NavBar from './components/navbar/NavBar';
import Project from './components/project/ProjectComponent'
import Comment from './components/comment/CommentComponent'
import Video from './components/video/VideoComponent'
import User from './components/user/UserComponent'
import Login from './components/login/LoginComponent'



import { fetchVideos } from  './actions/videoActions';
import { fetchUsers } from  './actions/userActions';
import { fetchProjects } from  './actions/projectActions';
import { fetchComments } from  './actions/commentActions';
//import * as actions from './actions/videoActions.js'

class App extends Component {

  componentDidMount() {
     this.props.fetchVideos()
     this.props.fetchUsers()
     this.props.fetchProjects()
     this.props.fetchComments()
   }





   render() {
     //console.log('app fired')
     let current_user = this.props.current_user


     let loggedIn = [
        <Route exact path="/" component={sampleBootstrap} />, <Route exact path="/projects" render={routerProps => <ProjectsContainer {...routerProps} projects={this.props.projects}/>}/>, <Route exact path='/projects/:id' component={Project} />, <Route exact path='/users' render={routerProps => <UsersContainer {...routerProps} users={this.props.users} />} />,
        <Route exact path='/users/:id' render={routerProps => <User {...routerProps} users={this.props.users} projects={this.props.projects}/>} />, <Route exact path="/videos" render={routerProps => <VideosContainer {...routerProps} videos={this.props.videos}  />} />, <Route exact path='/videos/:id' component={Video} />, <Route exact path="/comments" render={routerProps => <CommentsContainer {...routerProps} comments={this.props.comments}/>} />,
        <Route exact path='/comments/:id' render={routerProps => <Comment {...routerProps} comments={this.props.comments}/>} />, <Route exact path="/logout"  component={Login} />

      ]

      let notLoggedIn = [
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
           <NavBar />

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
  fetchComments: () => dispatch(fetchComments())
})

export default connect(mapStateToProps,mapDispatchToProps)(App)
//export default App;
/**





<Route exact path="/" render={routerProps => <ProjectsContainer {...routerProps} projects={this.props.projects}/>}/>
<Route exact path="/" render={routerProps => <ProjectsContainer {...routerProps} projects={this.props.projects}/>} />
<Route exact path='/videos/:id' render={routerProps => <Video {...routerProps}  comments={this.props.comments} />} />
<Route exact path="/projects" component={ProjectsContainer}/>
<Route exact path="/comments" component={CommentsContainer} />
<Route exact path="/videos" component={VideosContainer} />
<Route exact path='/projects/:id' render={routerProps => <Project {...routerProps} allProjects={this.props.projects}/>} />
**/

//<Route exact path="/users" component={UsersContainer} />
