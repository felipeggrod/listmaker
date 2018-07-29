import React from 'react';
import ContentEditable from 'react-contenteditable'
import {connect} from 'react-redux';
import {ChangeItem, ToggleCollapseItem, StrikethroughItem} from '../actions/ListActions';
import {AddItem} from '../actions/ListActions';
import {DeleteItem} from '../actions/ListActions';

class Item extends React.Component {
    constructor() {
        super()
        this.onChangeItem = this.onChangeItem.bind(this);
        this.onAddItem = this.onAddItem.bind(this);
        this.onDeleteItem = this.onDeleteItem.bind(this);
        this.onStrikethroughItem = this.onStrikethroughItem.bind(this);
    };
    
    
    onChangeItem = (id, e) => {
        this.props.onChangeItem(id, e.target.value);
        //console.log(e.target.value + '  ' + this.props.id);
    };

    onAddItem = (id) => {
        this.props.onAddItem(id);
    };

    onDeleteItem = (id) => {
        this.props.onDeleteItem(id);
    };

    onToggleCollapseItem = (id) => {
        this.props.onToggleCollapseItem(id);
    };

    onStrikethroughItem = (id) => {
        this.props.onStrikethroughItem(id);
    };

    render() {
        return <div>
            <div className='row'>
                <button className='btn-secondary border-0 my-1 p-0 rounded-circle align-bottom' 
                    style={{height: '.75em', width: '.75em', }}
                    onClick={() => this.onAddItem(this.props.id)}
                >
                <h6 style={{fontSize: '.75em'}}>+</h6>
                </button>
                
                <button className='btn-secondary border-0 my-1 p-0 rounded-circle align-middle' 
                    style={{height: '.75em', width: '.75em'}}
                    onClick={() => this.onDeleteItem(this.props.id)}
                >
                <h6 style={{fontSize: '.75em'}} >-</h6>
                </button>
                
                <button className='btn-secondary border-0 my-1 p-0 rounded-circle align-middle' 
                    style={{height: '.75em', width: '.75em'}}
                    onClick={() => this.onToggleCollapseItem(this.props.id)}
                >
                <h6 style={{fontSize: '.75em'}}>c</h6>
                </button>

                <button className='btn-secondary border-0 my-1 p-0 rounded-circle align-middle' 
                    style={{height: '.75em', width: '.75em'}}
                    onClick={() => this.onStrikethroughItem(this.props.id)}
                >
                <h6 style={{fontSize: '.75em'}}>s</h6>
                </button>

                <div>&ensp;</div>
                <ContentEditable
                    tagName={ this.props.completed? 's' : ''}
                    className='contentEditable'
                    html= { this.props.name } // innerHTML of the editable div
                    disabled={false}       // use true to disable edition
                    onChange={(e) => this.onChangeItem(this.props.id , e)} // handle innerHTML change
                />
            </div>  
            
            {(() => {//Collapsable children
                if (this.props.collapsed === false ) {
                    return this.props.children;
                }
            })()}
        </div>
  }
}

const mapActionsToProps = {
    onChangeItem: ChangeItem,
    onAddItem: AddItem,
    onDeleteItem: DeleteItem,
    onToggleCollapseItem: ToggleCollapseItem,
    onStrikethroughItem: StrikethroughItem
};



export default connect(undefined, mapActionsToProps)(Item);


