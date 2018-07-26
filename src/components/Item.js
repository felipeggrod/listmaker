import React from 'react';

export class Item extends React.Component {
	render() {
  	return <li>
      	{ this.props.name }
        { this.props.children }
    </li>
  }
}

