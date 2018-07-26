import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//1-connect, 2-mapstate


//a container is just a react component that uses store.subscribe() to read a part of the Redux state tree and supply props to a presentational component it renders
//generate container components with connect() instead of store.subscribe(), to use optmizations made for react-redux 
//Connects a React component to a Redux store.
import {connect} from 'react-redux';
import {ChangeItem} from './actions/ListActions';
import List from './components/List';


class App extends Component {
  constructor(props){
    super(props);

    this.onChangeItem = this.onChangeItem.bind(this);
  }

  onChangeItem(event) {
    this.props.onChangeItem(event.target.value);
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <input onChange ={this.onChangeItem}></input>
      
        <List data = {this.props.list}/>

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
    onChangeItem: ChangeItem
};




export default connect(mapStateToProps, mapActionsToProps)(App);


//export default App;
