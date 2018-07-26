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