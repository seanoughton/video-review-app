import React from 'react'

const CommentsList = ({ comment,index,handleOnClick }) =>

  <tr key={index}>
    <th scope="row">{index+1}</th>
    <td>{comment.timecode}</td>
    <td>{comment.content}</td>
    <td>@{comment.user.user_name}</td>
    <td><button id={comment.id} data-user={comment.user.id} onClick={handleOnClick}> x </button></td>
  </tr>


export default CommentsList