import React, { Component } from 'react';
import { connect } from 'react-redux'
import logo from './logo.svg';
import './App.css';

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
     this.props.fetchComments()
   }


  render() {
    console.log(this.props.comments)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React TEst</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { videos: state.videos, users: state.users, teams: state.teams, projects: state.projects, comments: state.comments
   }
  //its cats.pictures, vs just .pictures because of the combiner
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
