import React, { Component } from 'react';

class DeleteProjectButton extends Component {

  handleOnClick = (event) => {
    event.preventDefault();
    let test = document.getElementById("test");
    console.log(test)
    //let projectId = parseInt(event.target.dataset.project,10)
    //this.props.deleteProject(parseInt(this.props.id,10))
  }// end handleOnClick

  render() {


    return (

      <div>

        <div id="test" data-id={this.props.id} ></div>

        <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#exampleModal"  id="delete-button"> Delete </button>


        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Really Delete !!! </h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                This will Delete the Project!
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-dismiss="modal">No</button>
                <button type="button" class="btn btn-success" onClick={this.handleOnClick} >Yes</button>
              </div>
            </div>
          </div>
        </div>

      </div>

)//end return
}// end render
}// end class definition

export default DeleteProjectButton
