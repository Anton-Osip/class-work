const newArray = new Array(5);

newArray.fill(5);

for(let i=0;i<newArray.length;i++){
    console.log(newArray[i]);
}
let str = "Boat Rudder Mast Boat Hull Water Fire Boat Deck Hull Fire Propeller Deck Fire Deck Boat Mast";

let arr = str.split(' ');

for(let i=0;i<arr.length;i++){
    if(arr[i] === 'Fire'){
        arr[i] = '~~';
    };
};
let str1 = arr.join(' ');
console.log(str1);
console.log(...arr);
str1='                   h                '
console.log(str1);
console.log(str1.trim());