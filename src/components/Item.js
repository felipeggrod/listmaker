import React from 'react';
import ContentEditable from 'react-contenteditable'
import {connect} from 'react-redux';
import {ChangeItem} from '../actions/ListActions';
import {AddItem} from '../actions/ListActions';
import {DeleteItem} from '../actions/ListActions';

class Item extends React.Component {
    constructor() {
        super()
        this.onChangeItem = this.onChangeItem.bind(this);
        this.onAddItem = this.onAddItem.bind(this);
        this.onDeleteItem = this.onDeleteItem.bind(this);
    };
    
    
    onChangeItem = (id, e) => {
        this.props.onChangeItem(id, e.target.value);
        //console.log(e.target.value + '  ' + this.props.id);
    };

    onAddItem = (id, e) => {
        this.props.onAddItem(id, e.target.value);
    };

    onDeleteItem = (id, e) => {
        this.props.onDeleteItem(id, e.target.value);
    };

    render() {
        return <div>
            <div className='row'>
                <button className='btn-secondary border-0 my-1 p-0 rounded-circle align-bottom' 
                    style={{height: '1.3em', width: '1.3em'}}
                    onClick={(e) => this.onAddItem(this.props.id, e)}
                >
                    <h6>+</h6>
                </button>
                
                <button className='btn-secondary border-0 my-1 p-0 rounded-circle align-middle' 
                    style={{height: '1.3em', width: '1.3em'}}
                    onClick={(e) => this.onDeleteItem(this.props.id, e)}
                >
                <h6>-</h6>
                </button>
                <div>&ensp;</div>
                <ContentEditable
                    style={{outline: '0', fontSize: '1.25em'}}
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
    onAddItem: AddItem,
    onDeleteItem: DeleteItem
};



export default connect(undefined, mapActionsToProps)(Item);


