export const getItemById = (id, arr) => {
    const correctIdArr = (Array.isArray(arr) && (typeof id === 'string' || typeof id === 'number'))
        ? arr.filter((item)=>{ return item.id===id && item})
        : [{}];
    return (
        correctIdArr[0]
    )
};

export const reverseString = (str) => {
    return str.split("").reverse().join("");
};

function LetterCapitalize(str) {
    return str.split(' ').map((item,index)=>{return item.charAt(0).toUpperCase() + item.slice(1) }).join(' ');
}