import React from 'react';
import ContentEditable from 'react-contenteditable'
import {connect} from 'react-redux';
import {ChangeItem} from '../actions/ListActions';
import {AddItem} from '../actions/ListActions';

class Item extends React.Component {
    constructor() {
        super()
        this.onChangeItem = this.onChangeItem.bind(this);
        this.onAddItem = this.onAddItem.bind(this);
    };
    
    
    onChangeItem = (id, e) => {
        this.props.onChangeItem(id, e.target.value);
        //console.log(e.target.value + '  ' + this.props.id);
    };

    onAddItem = (id, e) => {
        this.props.onAddItem(id, e.target.value);
    };

    render() {
        return <div>
            <div className='row'>
                <button className='btn-primary rounded' 
                    style={{height: '2em', width: '2em'}}
                    onClick={(e) => this.onAddItem(this.props.id, e)}
                >+</button>
                <ContentEditable
                    html= { this.props.name } // innerHTML of the editable div
                    disabled={false}       // use true to disable edition
                    onChange={(e) => this.onChangeItem(this.props.id , e)} // handle innerHTML change
                />
            </div>  
            { this.props.children }
        </div>
  }
}

const mapActionsToProps = {
    onChangeItem: ChangeItem,
    onAddItem: AddItem
};



export default connect(undefined, mapActionsToProps)(Item);


