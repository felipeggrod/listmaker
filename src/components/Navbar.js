import React from 'react';

export default function Navbar () {
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light border mb-3">
          <a class="navbar-brand" href="#">ListMaker</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <form class="form-inline my-2 my-lg-0 d-flex ml-auto">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>
    )
}