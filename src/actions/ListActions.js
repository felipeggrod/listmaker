export function ChangeItem (id, newItem) {
    return {
        type: "ITEM_CHANGE",
        payload: {
            item: newItem,
            id: id
        }
    }
}

export function AddItem (id, newItem) {
    return {
        type: "ITEM_ADD",
        payload: {
            item: newItem,
            id: id
        }
    }
}

export function DeleteItem (id, newItem) {
    return {
        type: "ITEM_DELETE",
        payload: {
            item: newItem,
            id: id
        }
    }
}

export function ToggleCollapseItem (id, newItem) {
    return {
        type: "ITEM_COLLAPSE_TOGGLE",
        payload: {
            item: newItem,
            id: id
        }
    }
}