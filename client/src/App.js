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


import { fetchVideos } from  './actions/videoActions';
import { fetchUsers } from  './actions/userActions';
import { fetchTeams } from  './actions/teamActions';
import { fetchProjects } from  './actions/projectActions';
import { fetchComments } from  './actions/commentActions';
//import * as actions from './actions/videoActions.js'

class App extends Component {

  componentDidMount() {
     //this.props.fetchVideos()
     //this.props.fetchUsers()
     //this.props.fetchTeams()
     //this.props.fetchProjects()
     //this.props.fetchComments()
   }


   render() {
     return (
       <Router>
         <div className="app">
           <NavBar />
           <Route exact path="/" component={ProjectsContainer} />
           <Route path="/comments" component={CommentsContainer} />
           <Route path="/videos" component={VideosContainer} />


           

           <Route path='/projects' render={routerProps => <ProjectsContainer {...routerProps} />} />

           <Route path="/users" component={UsersContainer} />
           <Route path="/teams" component={TeamsContainer} />
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
render() {
  return (
    <div >
      < CommentsContainer />
    </div>
  );
}//end render**/
