export function listReducer (state = {}, action) {
    if (action.type === "INC") {
        state = Object.assign({}, state, {
            number: state.number + action.payload
        })
    }
    if (action.type === "DEC") {
        state = Object.assign({}, state, {
            number: state.number - action.payload
        })
    }
    if (action.type === "NAM") {
        state = {...state, name: action.payload}
    }
    if (action.type === "ITEM_CHANGE") {
        var obj = JSON.parse(JSON.stringify(state));

        function recursiveSearch(obj, id)
        {
            for (var key in obj)
            {
                if (obj.hasOwnProperty(key))
                {
                    if ( obj.id == id) {
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
    
    return state;
}

