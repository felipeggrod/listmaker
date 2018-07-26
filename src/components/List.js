import React from 'react';
import {connect} from 'react-redux';
import Item from './Item';


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
      return <Item key={ node.id } name={ node.name } id={ node.id }>
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


/*const mapStateToProps = (state) => {
    return {
        list: state.list
    };
}

export default connect(mapStateToProps, undefined)(List);
*/
export default List;