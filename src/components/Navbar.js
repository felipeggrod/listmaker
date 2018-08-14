import React from 'react';

export default function Navbar () {
    return(
        <nav style={{height: '45px'}} className="navbar navbar-expand-lg navbar-light bg-light border mb-3">
          <a className="navbar-brand">ListMaker</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="form-inline my-2 my-lg-0 d-flex ml-auto">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Save/Clear/ back or foward</button>
            </form>
          </div>
        </nav>
    )
}