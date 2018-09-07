import React from 'react'
import { Link } from 'react-router-dom';


const UserInfo = ({ user,handleOnClick,button }) =>

  <div className="col-sm-4" key={user.id}>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{user.user_name}</h5>
        <Link to={`/users/${user.id}`} className="btn btn-primary"> User Info </Link>
        {button}
      </div> {/**end card-body **/}
    </div> {/**end card **/} <br></br>
  </div>//end col and displayUsers


export default UserInfo
