import React, { Component } from 'react'

class sampleBootstrap extends Component {


  render() {
    return (
      <div class="container">

        <div class="row"  >
          <div class="col bg-secondary text-white-50 border">
            <div class="m-4">
              <span class="badge badge-success">Approved</span>
              <span class="badge badge-danger">Not Approved</span><br></br>

                <div class="btn-group">
                  <button type="button" class="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    V1
                  </button>
                  <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">V1</a>
                    <a class="dropdown-item" href="#">V2</a>
                    <a class="dropdown-item" href="#">V3</a>
                  </div>
                </div>

              <iframe src="https://player.vimeo.com/video/225178837" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>


            </div>
          </div>{/* end col */}

          <div class="col bg-dark text-white-50 border">
            <div class=" m-4">
              <h4 >Comments</h4>
              <span class="badge badge-info">24 Comments</span>
              <ol>
                <li>
                  Comment 01
                  
                </li>

                <li>Comment 02</li>
                <li>Comment 03</li>
                <li>Comment 04</li>
              </ol>
            </div>


          </div>{/* end col */}

        </div>{/* end row */}

        <div class="row"  >


          <div class="col bg-dark text-white-50 border">
            <div class=" m-4">
              <h4 >Add Comment</h4>
                <form>
                  <div class="form-group">
                    <input type="text" class="form-control" id="timecode" aria-describedby="timecode" placeholder="Timecode"/>
                  </div>

                  <div class="form-group">
                    <input type="text" class="form-control" id="comment" aria-describedby="comment" placeholder="Comment"/>
                  </div>

                  <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
          </div>{/* end col */}
          <div class="col bg-dark text-white">

          </div>{/* end col */}

        </div>{/* end row */}




    </div>// end container





    )
  }
}





export default sampleBootstrap
