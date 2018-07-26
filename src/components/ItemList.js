import React from 'react';
import {connect} from 'react-redux';



class Item extends React.Component {
	render() {
  	return <li>
      	{ this.props.name }
        { this.props.children }
    </li>
  }
}

class List extends React.Component {
	constructor() {
  	super();
  }
  
  list(data) {
  	const children = (items) => {
    	if (items) {
      	return <ul>{ this.list(items) }</ul>
      }
    }
    
    return data.map((node, index) => {
      return <Item key={ node.id } name={ node.name }>
        { children(node.items) }
      </Item>
    })
  }
  
  render() {
  	return <ul>
    	{ this.list(this.props.data) }
    </ul>
  }
}







const ItemList = (props) => {
    
    console.log(props.itemList);
    return (
        <div> a:
            <List data={props.itemList}/>
        </div>
        
    );
}


const mapStateToProps = (state) => {
    return {
        itemList: state.itemList
    };
}

export default connect(mapStateToProps, undefined)(ItemList);