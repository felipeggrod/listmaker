export default function ChangeList (id, newItem) {
    return {
        type: "LIST_CHANGE",
        payload: {
            item: newItem,
            id: id
        }
    }
}