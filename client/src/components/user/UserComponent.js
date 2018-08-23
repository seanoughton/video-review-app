import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteUser } from  '../../actions/userActions';

class User extends Component {

  handleOnClick = () => {
    //this.props.deleteUser (this.props.user.id)
    this.props.deleteUser(this.props.match.params.id,10)
    //find a way to reroute this to the projects index page
  }

  render() {
    let allUsers = this.props.users.users
    let userId = parseInt(this.props.match.params.id,10)
    let user = allUsers.find(user =>  user.id === userId)

    return (
      <div>

          {user.user_name}<br></br>
          {user.email}
          <button onClick={this.handleOnClick}> x </button>

      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return { users: state.users}
}

const mapDispatchToProps = dispatch => ({
  deleteUser: user_id => dispatch(deleteUser(user_id))
})

export default connect(mapStateToProps, mapDispatchToProps)(User)
