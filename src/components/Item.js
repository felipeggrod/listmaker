import React from 'react';
import ContentEditable from 'react-contenteditable'
import {connect} from 'react-redux';
import ChangeList from '../actions/ListActions';

class Item extends React.Component {
    constructor() {
        super()
        this.onChangeList = this.onChangeList.bind(this);
    };
    
    
    onChangeList = (id, e) => {
        
        this.props.onChangeList(id, e.target.value);
        //console.log(e.target.value + '  ' + this.props.id);
    };

    render() {
        return <div>
            <ContentEditable
                html= { this.props.name } // innerHTML of the editable div
                disabled={false}       // use true to disable edition
                onChange={(e) => this.onChangeList(this.props.id , e)} // handle innerHTML change
            />      
            { this.props.children }
        </div>
  }
}

const mapActionsToProps = {
    onChangeList: ChangeList
};



export default connect(undefined, mapActionsToProps)(Item);


