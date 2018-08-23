import React, { Component } from 'react';

import { connect } from 'react-redux'




import { fetchVideos } from  './actions/videoActions';
import { fetchUsers } from  './actions/userActions';
import { fetchTeams } from  './actions/teamActions';
import { fetchProjects } from  './actions/projectActions';
import { fetchComments } from  './actions/commentActions';
//import * as actions from './actions/videoActions.js'

class SetStore extends Component {

  componentDidMount() {
     this.props.fetchVideos()
     this.props.fetchUsers()
     this.props.fetchTeams()
     this.props.fetchProjects()
     this.props.fetchComments()
   }



   render() {
     console.log('set store did render')
     return (

         <div >


         </div>

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

export default connect(mapStateToProps,mapDispatchToProps)(SetStore)
