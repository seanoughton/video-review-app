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
import TeamsContainer from './containers/TeamsContainer';
import CommentsContainer from './containers/CommentsContainer';
import NavBar from './components/navbar/NavBar';
import TestComponent from './components/test/TestComponent'
import Project from './components/project/ProjectComponent'
import Comment from './components/comment/CommentComponent'
import Video from './components/video/VideoComponent'
import User from './components/user/UserComponent'
import Team from './components/team/TeamComponent'


import { fetchVideos } from  './actions/videoActions';
import { fetchUsers } from  './actions/userActions';
import { fetchTeams } from  './actions/teamActions';
import { fetchProjects } from  './actions/projectActions';
import { fetchComments } from  './actions/commentActions';
//import * as actions from './actions/videoActions.js'

class App extends Component {

  componentDidMount() {
     this.props.fetchVideos()
     this.props.fetchUsers()
     this.props.fetchTeams()
     this.props.fetchProjects()
     this.props.fetchComments()
   }



   render() {
     
     return (
       <Router>
         <div className="app">
           <NavBar />
           <Route exact path="/" component={ProjectsContainer} />

           <Route exact path="/comments" component={CommentsContainer} />
           <Route exact path='/comments/:id' render={routerProps => <Comment {...routerProps} />} />


           <Route exact path="/videos" component={VideosContainer} />
           <Route exact path='/videos/:id' render={routerProps => <Video {...routerProps} />} />

           <Route exact path="/projects" component={ProjectsContainer}/>
           <Route exact path='/projects/:id' render={routerProps => <Project {...routerProps} />} />


           <Route exact path='/users' render={routerProps => <UsersContainer {...routerProps} users={this.props.users} />} />
           <Route exact path='/users/:id' render={routerProps => <User {...routerProps} users={this.props.users} projects={this.props.projects}/>} />

           <Route exact path="/teams" component={TeamsContainer} />
            <Route exact path='/teams/:id' render={routerProps => <Team {...routerProps} />} />

         </div>
       </Router>
     );
   }//end render**/
}//end class

const mapStateToProps = (state) => {
  return { videos: state.videos, users: state.users, teams: state.teams, projects: state.projects, comments: state.comments
   }
}

const mapDispatchToProps = dispatch => ({
  fetchVideos: () => dispatch(fetchVideos()),
  fetchUsers: () => dispatch(fetchUsers()),
  fetchTeams: () => dispatch(fetchTeams()),
  fetchProjects: () => dispatch(fetchProjects()),
  fetchComments: () => dispatch(fetchComments())
})

export default connect(mapStateToProps,mapDispatchToProps)(App)
//export default App;
/**
<Route exact path='/projects/:id' render={routerProps => <Project {...routerProps} allProjects={this.props.projects}/>} />
**/

//<Route exact path="/users" component={UsersContainer} />
