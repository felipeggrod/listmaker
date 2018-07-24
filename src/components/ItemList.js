import React from 'react';
import {connect} from 'react-redux';


var itemListArray = [];

function RunList(obj, path)
{
    var txt = '';
    for (var key in obj)
    {
        if (obj.hasOwnProperty(key))
        {
            if ('object' === typeof(obj[key]))
            {
                //txt += RunList(obj[key], path + (path ? '.' : '') + key);
                itemListArray.push(<div>AAA</div>);
                console.log('if: '+obj[key]);
                RunList(obj[key], '');
            } 
            else
            {
                console.log('else: '+obj[key]);
                //txt += path + '.' + key + '\t' + obj[key] + '\n';
            }
        }
    }
    return txt;
}


const ItemList = (props) => {
    console.log(RunList(props.itemList, ''));
    console.log(this.itemListArray);
    return (
        <div> a:{this.itemListArray} </div>
    );
}


const mapStateToProps = (state) => {
    return {
        itemList: state.itemList
    };
}

export default connect(mapStateToProps, undefined)(ItemList);