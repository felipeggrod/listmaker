export default function ChangeItem (id, newItem) {
    return {
        type: "ITEM_CHANGE",
        payload: {
            item: newItem,
            id: id
        }
    }
}