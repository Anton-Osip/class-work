function hello(name) {
    let normal = name[0].toUpperCase()+name.slice(1,name.length).toLowerCase()
    return 'Hello, ' +normal ;
}

console.log(hello('hElLO'));

const arr =[4,5,6,8,5,4,5];

function uniqueArray(arr){
    const newArray = [];
    for(let i=0;i<arr.length;i++){
        if(!(newArray.includes(arr[i]))){
            newArray.push(arr[i])
        }
    }
    console.log(newArray);
}

uniqueArray(arr)