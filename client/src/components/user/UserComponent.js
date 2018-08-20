import React, { Component } from 'react';

class User extends Component {


  render() {
    const { user } = this.props;

    return (
      <div>

          {user.user_name}<br></br>
          {user.email}

      </div>
    );
  }
};

export default User;
