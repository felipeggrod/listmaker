export default function ChangeItemList (newList) {
    return {
        type: "LIST_CHANGE",
        payload: {
            itemList: newList
        }
    }
}