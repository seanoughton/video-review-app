import React, { Component } from 'react'





class sampleBootstrap extends Component {


  render() {
    return (
      <div class="container">

        <div class="row"  >
          <div class="col bg-secondary text-white">
            <div class="m-4">
              <h6>Version Num | Approved: </h6>
              <iframe src="https://player.vimeo.com/video/225178837" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
            </div>
          </div>{/* end col */}

          <div class="col bg-dark text-white">
            <div class=" m-4">
              <h2 >Comments</h2>
              <h5 >Num of Comments</h5>
              <ul>
                <li>Comment 01</li>
                <li>Comment 02</li>
                <li>Comment 03</li>
                <li>Comment 04</li>
              </ul>
            </div>


          </div>{/* end col */}

        </div>{/* end row */}

        <div class="row"  >


          <div class="col bg-dark text-white">
            <div class=" m-4">
              <h4 >Add Comment</h4>
                <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown button
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                </div>
              </div>
            </div>


          </div>{/* end col */}

        </div>{/* end row */}




    </div>// end container





    )
  }
}





export default sampleBootstrap
