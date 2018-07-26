import React from 'react';
import ContentEditable from 'react-contenteditable'
import {connect} from 'react-redux';
import ChangeList from '../actions/ListActions';

class Item extends React.Component {
    constructor() {
        super()
        this.onChangeList = this.onChangeList.bind(this);
    };
    
    
    onChangeList = e => {
        
        this.props.onChangeList(e.target.value);
        console.log(e.target.value + '  ' + this.props.id);
    };

    render() {
        return <div>
            <ContentEditable
                html= { this.props.name } // innerHTML of the editable div
                disabled={false}       // use true to disable edition
                onChange={this.onChangeList} // handle innerHTML change
            />      
            { this.props.children }
        </div>
  }
}

const mapActionsToProps = {
    onChangeList: ChangeList
};



export default connect(undefined, mapActionsToProps)(Item);

