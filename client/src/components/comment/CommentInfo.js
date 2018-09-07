import React from 'react'
//functional Component
const CommentInfo = ({ comment,index,handleDeleteComment }) =>

  <tr key={index}>
    <th scope="row">{index+1}</th>
    <td>{comment.timecode}</td>
    <td>{comment.content}</td>
    <td>@{comment.user.user_name}</td>
    <td><button id={comment.id} data-user={comment.user.id} onClick={handleDeleteComment}> x </button></td>
  </tr>


export default CommentInfo
