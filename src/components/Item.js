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
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle border-0 my-1 p-0 rounded-circle" 
                        type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                        style={{height: '1.25em', width: '1.25em'}}
                    >
                        
                    </button>
                    
                    <div class="dropdown-menu " aria-labelledby="dropdownMenuButton">
                        <button className='dropdown-item' 
                            onClick={(e) => this.onAddItem(this.props.id, e)}
                        >
                            Add Item
                        </button>

                        <button className='dropdown-item' 
                            onClick={(e) => this.onDeleteItem(this.props.id, e)}
                        >
                            Delete Item
                        </button>
                        
                        
                    </div>
                </div>

                
                
                <div>&ensp;</div>
                <ContentEditable
                    className='contentEditable'
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


