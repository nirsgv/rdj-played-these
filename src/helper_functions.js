export const getItemById = (selectedTrackId, itemList) => {
    const filteredItems = (Array.isArray(itemList) && (typeof selectedTrackId === 'string' || typeof selectedTrackId === 'number'))
        ? itemList.filter((item)=>{ return item.id===selectedTrackId && item})
        : [{}];
    return (
        filteredItems[0]
    )
};