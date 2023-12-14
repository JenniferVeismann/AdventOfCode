const fs = require('fs'); 
const readline = require('readline');

let sum=0;
let firstNumber='';
let lastnumber='';
let lineNumber='';
let found='';
const numbers=['zero','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']


const file = readline.createInterface({ 
    input: fs.createReadStream('firstInput.txt'), 
    output: process.stdout, 
    terminal: false
}); 

file.on('line', (line) => {
    while (found!==undefined){
        found = numbers.find(v => line.includes(v));
       
        if(found){
            line=line.replace(found, `${found[0]}${numbers.indexOf(found)}${found[found.length-1]}`)
        }
    }
    found='';

    for(i of line){
        if(/^([0-9])$/.test(i)){
            firstNumber=i;
    
            break;
        }
    }
    for(let  j=line.length-1; j>=0; j--){
        if(/^([0-9])$/.test(line[j])){
            lastnumber=line[j];
   
            break;
        }

    }
    lineNumber=firstNumber+lastnumber;

    sum=sum+Number(lineNumber)
    firstNumber=0;
    lastnumber=0;
    lineNumber=0;
    
    console.log(sum)

});
