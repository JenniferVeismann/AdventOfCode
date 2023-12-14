const fs = require('fs'); 
const readline = require('readline');


const file = readline.createInterface({ 
    input: fs.createReadStream('thirdInput.txt'), 
    output: process.stdout, 
    terminal: false
}); 
const first=[]
const second=[]
const third=[]
let nrIndex=[];
let numbers=[];
let symbolIndex=[]

file.on('line', (line) => {
    getIndexes(line)


})

function getIndexes(line){

    let nrRowIndexes=[]
    let nrRowValues=[]
    let symbolRowIndex=[]

    for (i in line){
       //console.log(line[i])
        if(/^\d+$/.test(line[i])){
            nrRowIndexes.push(i)
        }
        else if(line[i]!=='.'){
            symbolRowIndex.push(i);
            // if(i===0){
            //     const add= Number(i+1)
            //     symbolRowIndex.push(String(add));
            // }
            // else if(i=line.lenght-1){
            //     const add= Number(i-1)
            //     symbolRowIndex.push(String(add));
            // }
            // else{
            //     const add= Number(i)+1
            //     const minus=Number(i)-1
            //     symbolRowIndex.push(String(add));
            //     symbolRowIndex.push(String(minus));
            // }
            // console.log(i)

        }
    }
    nrIndex.push(nrRowIndexes);
    symbolIndex.push(symbolRowIndex)
    const splited=line.split('.')

    for(j of splited){

        if(/^\d+$/.test(j)){
            //console.log(j)
            nrRowValues.push(j)
        }
    }
    numbers.push(nrRowValues)

console.log(JSON.stringify(nrIndex))
console.log('--')

console.log(JSON.stringify(numbers))
console.log('--')

console.log(JSON.stringify(symbolIndex))
console.log('--------------')


}

const arr='467.*114..'
//getIndexes(arr)


