export function listReducer (state = {}, action) {
    if (action.type === "INC") {
        state = Object.assign({}, state, {
            number: state.number + action.payload
        })
    }
    
    if (action.type === "ITEM_CHANGE") {
        var obj = JSON.parse(JSON.stringify(state));

        function recursiveSearch(obj, id)
        {
            for (var key in obj)
            {
                if (obj.hasOwnProperty(key))
                {
                    if ( obj.id === id) {
                        //console.log(obj.name);
                        obj.name = action.payload.item;
                        return;
                    }
                    if ('object' === typeof(obj[key]))
                    {
                        recursiveSearch(obj[key], id);
                    }
                }
            }
        }
        recursiveSearch(obj, action.payload.id);
        
        state = obj;
       
    }
    if (action.type === "ITEM_ADD") {
        var object = JSON.parse(JSON.stringify(state));

        function recursiveSearch(obj, id)
        {
            for (var key in obj)
            {
                if (obj.hasOwnProperty(key))
                {
                    if ( obj.id === id) {
                        console.dir(obj);
                        if (obj.items) {
                            obj.items.push({'id': Math.random(), 'name':'new', "collapsed": false, "completed": false});
                        }else{
                            obj.items = [{'id': Math.random(), 'name':'new', "collapsed": false, "completed": false}];
                        }
                        return;
                    }
                    if ('object' === typeof(obj[key]))
                    {
                        recursiveSearch(obj[key], id);
                    }
                }
            }
        }
        recursiveSearch(object, action.payload.id);
        
        state = object;
       
    }

    if (action.type === "ITEM_DELETE") { //delete items from a child object
        // eslint-disable-next-line
        var object = JSON.parse(JSON.stringify(state));

        console.log('______________')

        function recursiveSearch(obj, id)
        {
            for (var key in obj)
            {   
                if (obj[key].hasOwnProperty("items")) {

                    for (var index in obj[key].items) {
                        console.log(obj[key].items[index].name);
                        
                        if (obj[key].items[index].id === id){
                            console.log('delete: ' + obj[key].items[index].name);
                            obj[key].items.splice(index, 1);
                            return;
                        }
                    }  
                }
                if (obj.hasOwnProperty(key)) {
                    if ('object' === typeof(obj[key]))
                    {
                        recursiveSearch(obj[key], id);
                    }
                }
            }
        }
        recursiveSearch(object, action.payload.id);
        
        state = object;
       
    }

    if (action.type === "ITEM_COLLAPSE_TOGGLE") {
        // eslint-disable-next-line
        var obj = JSON.parse(JSON.stringify(state));

        function recursiveSearch(obj, id)
        {
            for (var key in obj)
            {
                if (obj.hasOwnProperty(key))
                {
                    if ( obj.id === id) {
                        //console.log(obj.name);
                        obj.collapsed = !obj.collapsed;
                        return;
                    }
                    if ('object' === typeof(obj[key]))
                    {
                        recursiveSearch(obj[key], id);
                    }
                }
            }
        }
        recursiveSearch(obj, action.payload.id);
        
        state = obj;
       
    }

    
    return state;
}

