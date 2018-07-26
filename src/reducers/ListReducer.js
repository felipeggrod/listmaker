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
    if (action.type === "LIST_CHANGE") {
        /*state = Object.assign({}, state, {
            list: '1'//action.payload
        })*/
    }
    
    return state;
}