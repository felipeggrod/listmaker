export default function ChangeList (newList) {
    return {
        type: "LIST_CHANGE",
        payload: {
            list: newList
        }
    }
}