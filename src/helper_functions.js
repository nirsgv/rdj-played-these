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
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
const isLetter = (char) => {
    return char.length === 1 && char.match(/[a-z]/i);
};
const isNumber = (char) => {
    return !isNaN(char);
};
const isSpace = (char) => {
    return char === ' ';
};
const isLowerCase = (char) => {
    return char.toLowerCase() === char;
}
function PowersofTwo(num) {
    if (num % 1 !== 0) {return false}
    else if(num===2){return true}
    return PowersofTwo(num/2);
}
/*
numArray.sort((a, b) => a - b); // For ascending sort
numArray.sort((a, b) => b - a); // For descending sort*/
