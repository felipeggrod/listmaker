import React from 'react';
import ReactDOM from 'react-dom';
import ContentEditable from 'react-contenteditable'
import {connect} from 'react-redux';
import {AddItem, DeleteItem, ChangeItem, ToggleCollapseItem, StrikethroughItem, AddItemSameLevel} from '../actions/ListActions';


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

    onAddItemSameLevel = (id, e) => {
        if (e.key === 'Enter') { //prevents adding a <br> and calls the action
            e.preventDefault();
            this.props.onAddItemSameLevel(id);
        }
        if (e.key === 'Backspace') {// deletes item when pressing Backspace on empty item
            if (e.currentTarget.textContent === '') {
                this.props.onDeleteItem(id);
            }
        }
        if (e.key === 'Tab') { // create a child when pressing Tab on item
            e.preventDefault();
            this.props.onAddItem(id);
        }
        
    }

    componentDidMount() { //focus on newly created editable content
        ReactDOM.findDOMNode(this.refs['0']).focus();
        (this.props.id === 0)? console.log(false) : document.execCommand('selectAll',false,null);
    }

    render() {
        return <div>

            <div id="fadeIn" className='row'>
                <div >
                    <button className='btn-secondary border-0 my-1 p-0 rounded-circle align-bottom' 
                        style={{height: '.75em', width: '.75em', }}
                        onClick={() => this.onAddItem(this.props.id)}
                    >
                    <h6 style={{fontSize: '.6em'}}>+</h6>
                    </button>
                    
                    <button className='btn-secondary border-0 my-1 p-0 rounded-circle align-middle' 
                        style={{height: '.75em', width: '.75em'}}
                        onClick={() => this.onDeleteItem(this.props.id)}
                    >
                    <h6 style={{fontSize: '.6em'}} >-</h6>
                    </button>
                    
                    <button className='btn-secondary border-0 my-1 p-0 rounded-circle align-middle' 
                        style={{height: '.75em', width: '.75em'}}
                        onClick={() => this.onToggleCollapseItem(this.props.id)}
                    >
                    <h6 style={ this.props.collapsed? {fontSize: '0.6em', color: 'black'} : {fontSize: '0.6em'}} >c</h6>
                    </button>

                    <button className='btn-secondary border-0 my-1 p-0 rounded-circle align-middle' 
                        style={{height: '.75em', width: '.75em'}}
                        onClick={() => this.onStrikethroughItem(this.props.id)}
                    >
                    <h6 style={{fontSize: '.6em'}}>s</h6>
                    </button>
                </div>

                <div >&ensp;</div>
                
                <div /*onFocus={() => console.log('ONFOCUS')} onBlur={() => console.log('ONBLUR')}*/ onKeyDown = {(e) => this.onAddItemSameLevel(this.props.id, e)}>
                    <ContentEditable
                        tagName={ this.props.completed? 's' : ''}
                        className='contentEditable'
                        html= { this.props.name } // innerHTML of the editable div
                        disabled={false}       // use true to disable edition
                        onChange={(e) => this.onChangeItem(this.props.id , e)} // handle innerHTML change
                        ref={'0'}
                    />
                    
                </div>
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
    onStrikethroughItem: StrikethroughItem,
    onAddItemSameLevel: AddItemSameLevel
};

export default connect(undefined, mapActionsToProps)(Item);


