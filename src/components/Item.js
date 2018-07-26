import React from 'react';
import ContentEditable from 'react-contenteditable'
import {connect} from 'react-redux';
import ChangeItem from '../actions/ListActions';

class Item extends React.Component {
    constructor() {
        super()
        this.onChangeItem = this.onChangeItem.bind(this);
    };
    
    
    onChangeItem = (id, e) => {
        
        this.props.onChangeItem(id, e.target.value);
        //console.log(e.target.value + '  ' + this.props.id);
    };

    render() {
        return <div>
            <ContentEditable
                html= { this.props.name } // innerHTML of the editable div
                disabled={false}       // use true to disable edition
                onChange={(e) => this.onChangeItem(this.props.id , e)} // handle innerHTML change
            />      
            { this.props.children }
        </div>
  }
}

const mapActionsToProps = {
    onChangeItem: ChangeItem
};



export default connect(undefined, mapActionsToProps)(Item);


