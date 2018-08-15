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

    onAddItemSameLevel = (id, e) => {
        if (e.key === 'Enter') { //prevents adding a <br> and calls the action
            e.preventDefault();
            this.props.onAddItemSameLevel(id);
        }
    };

    componentDidMount() { //focus on newly created editable content
        ReactDOM.findDOMNode(this.refs['0']).focus();
    }

    

    render() {
        //console.log(this.props.id);
        return <div>
            
            <div className='row '>
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
                    <h6 style={{fontSize: '0.6em'}}>c</h6>
                    </button>

                    <button className='btn-secondary border-0 my-1 p-0 rounded-circle align-middle' 
                        style={{height: '.75em', width: '.75em'}}
                        onClick={() => this.onStrikethroughItem(this.props.id)}
                    >
                    <h6 style={{fontSize: '.6em'}}>s</h6>
                    </button>
                </div>

                <div >&ensp;</div>
                
                <div onFocus={() => console.log('ONFOCUS')} onBlur={() => console.log('ONBLUR')} onKeyPress = {(e) => this.onAddItemSameLevel(this.props.id, e)}>
                    <ContentEditable
                        
                        
                        tagName={ this.props.completed? 's' : ''}
                        onFocus={() => console.log('ONFOCUS inside')}
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


