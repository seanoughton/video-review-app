import React from 'react'
import { Link } from 'react-router-dom';


const UsersList = ({ user }) =>

<div class="col-sm-4" key={user.id}>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{user.user_name}</h5>
      <Link to={`/users/${user.id}`} class="btn btn-primary"> User Info </Link>
    </div> {/**end card-body **/}
  </div> {/**end card **/} <br></br>
</div>//end col and displayUsers


export default UsersList
