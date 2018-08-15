import React, { Component } from 'react';

//1-connect, 2-mapstate


//a container is just a react component that uses store.subscribe() to read a part of the Redux state tree and supply props to a presentational component it renders
//generate container components with connect() instead of store.subscribe(), to use optmizations made for react-redux 
//Connects a React component to a Redux store.
import {connect} from 'react-redux';
import {ChangeItem, Reset} from './actions/ListActions';
import List from './components/List';
import Navbar from './components/Navbar';


class App extends Component {
  constructor(props){
    super(props);

    this.onChangeItem = this.onChangeItem.bind(this);
    this.onReset = this.onReset.bind(this);
  }

  onChangeItem(event) {
    this.props.onChangeItem(event.target.value);
  }

  onReset() {
    this.props.onReset();
  }

  render() {

    return (
      <div className="App">
        <Navbar reset = {this.props.onReset}/>
        
        <div className="col-4 text-left">
          <List data = {this.props.list}/>
        </div>
        
      </div>
    );
  }
}

//To use connect(), you need to define a special function called mapStateToProps that tells
// how to ***Transform the current Redux store state into the props you want to pass*** to a presentational component you are wrapping. 

const mapStateToProps = (state, props) => {
  return {
    list: state.list
  }
};

const mapActionsToProps = {
  onChangeItem: ChangeItem,
  onReset: Reset
};




export default connect(mapStateToProps, mapActionsToProps)(App);


//export default App;
