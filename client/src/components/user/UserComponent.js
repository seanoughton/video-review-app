import React, { Component } from 'react';

class User extends Component {

  handleOnClick = () => {
    this.props.deleteUser (this.props.user.id)
  }

  render() {
    const { user } = this.props;

    return (
      <div>

          {user.user_name}<br></br>
          {user.email}
          <button onClick={this.handleOnClick}> x </button>

      </div>
    );
  }
};

export default User;
