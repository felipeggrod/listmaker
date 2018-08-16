import React from 'react';

export default class Navbar extends React.Component {
    render ( ) {
      return (
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light border mb-3">
            <a className="navbar-brand">ListMaker</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <div className="my-2 my-lg-0 d-flex ml-auto">
                <button className="btn btn-outline-success mx-1 my-sm-0" onClick = { (e) => {this.props.save()} }>Save</button>
                <button className="btn btn-outline-success mx-1 my-sm-0" onClick = { (e) => {this.props.load()} }>Load</button>
                <button className="btn btn-outline-info mx-1 my-sm-0" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                  Info
                </button>
                <span className="d-inline-block" tabIndex="0" data-toggle="tooltip" title="WARNING: If auto-save is turned on, this will delete your list forever">
                  <button className="btn btn-outline-danger mx-1 my-sm-0" onClick = { (e) => {this.props.reset()} }>Reset</button>
                </span>
              </div >
            </div>
          </nav>

          
        
          <div className="collapse " id="collapseExample">
            <div className="card card-body mb-3 mx-3">
              <p>This is ListMaker, your app for creating lists in an easy way.</p>
              <b>Hotkeys:</b>
              Enter - Create new item with the same parent as current item<br/>
              Tab   - Create new item as children of current item<br/>
              Backspace - Delete current item, if it is empty<br/>
              Ctrl-Z    - Undo text<br/>
              Ctrl-Y / Ctrl-Shift-Z - Redo text<br/>
              
            </div>
          </div>
        </div>
      )
    }
}