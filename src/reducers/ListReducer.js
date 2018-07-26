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
                            obj.items.push({'id': Math.random(), 'name':'new'});
                        }else{
                            obj.items = [{'id': Math.random(), 'name':'new'}];
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

    if (action.type === "ITEM_DELETE") {
        var object = JSON.parse(JSON.stringify(state));

        function recursiveSearch(obj, id)
        {
            for (var key in obj)
            {
                if (obj.hasOwnProperty(key))
                {
                    if ( obj.id === id) {
                        console.dir(obj);
                        delete obj.items;
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

    
    return state;
}

