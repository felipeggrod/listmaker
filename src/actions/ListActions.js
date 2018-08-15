export function ChangeItem (id, item) {
    return {
        type: "ITEM_CHANGE",
        payload: {
            item: item,
            id: id
        }
    }
}

export function AddItem (id) {
    return {
        type: "ITEM_ADD",
        payload: {
            id: id
        }
    }
}

export function DeleteItem (id) {
    return {
        type: "ITEM_DELETE",
        payload: {
            id: id
        }
    }
}

export function ToggleCollapseItem (id) {
    return {
        type: "ITEM_COLLAPSE_TOGGLE",
        payload: {
            id: id
        }
    }
}

export function StrikethroughItem (id) {
    return {
        type: "ITEM_STRIKETHROUGH",
        payload: {
            id: id
        }
    }
}

export function AddItemSameLevel (id) {
    return {
        type: "ITEM_ADD_SAME_LEVEL",
        payload: {
            id: id
        }
    }
}

export function Reset () {
    return {
        type: "RESET",
        payload: {}
    }
}


