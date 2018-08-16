import React from 'react';

export default class Navbar extends React.Component {
    render ( ) {
      return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light border mb-3">
          <a className="navbar-brand">ListMaker</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="my-2 my-lg-0 d-flex ml-auto">
              <button className="btn btn-outline-success mx-1 my-sm-0" onClick = { (e) => {this.props.load()} }>Load</button>
              <button className="btn btn-outline-success mx-1 my-sm-0" onClick = { (e) => {this.props.save()} }>Save</button>
              <button className="btn btn-outline-success mx-1 my-sm-0" >Autosave?</button>
              <span className="d-inline-block" tabIndex="0" data-toggle="tooltip" title="WARNING: If auto-save is turned on, this will delete your list forever">
                <button className="btn btn-outline-danger mx-1 my-sm-0" onClick = { (e) => {this.props.reset()} }>Reset</button>
              </span>
            </div >
          </div>
        </nav>
      )
    }
}