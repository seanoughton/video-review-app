import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchComments } from  '../actions/commentActions';

import Comment from '../components/comment/CommentComponent'

class CommentsContainer extends Component {

  componentDidMount() {
     this.props.fetchComments()
   }

  render() {
    console.log(this.props.comments.comments)
    let allComments = this.props.comments.comments

    let comments = allComments.map( (comment,index) => <li> < Comment key={index}   comment={comment}/> </li>)


    return (
      <div>
        <h1> All Comments </h1>
        <ul>
          {comments}
        </ul>

      </div>
    )
  }
}



const mapStateToProps = (state) => {
  return { comments: state.comments}
}


const mapDispatchToProps = dispatch => ({
  fetchComments: () => dispatch(fetchComments())
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer)
