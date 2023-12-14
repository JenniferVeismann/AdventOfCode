const fs = require('fs'); 
const readline = require('readline');
let colors={'blue':0, 'red':0, 'green':0}


const file = readline.createInterface({ 
    input: fs.createReadStream('secondInput.txt'), 
    output: process.stdout, 
    terminal: false
}); 


let sum=0

file.on('line', (line) => {
    sum=sum+cubesCount(line)

    console.log(sum)

})

const arr='Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green'
function cubesCount(line){
   
    let red=0
    let green=0
    let blue=0;
    //let biggers=0

    const drawn=line.substring(line.indexOf(":") + 1)
    const slices = drawn.split(";")
    for (i of slices){
        for (let [key, value] of Object.entries(colors)) {

            const removedColor = line.split(` ${key}`);
            for ( i of removedColor){
                biggest=Number((i.substring(i.length-2,i.length, )).replace(' ', ''));
       
                if(key==='red' && biggest>red){
                    red=Number((i.substring(i.length-2,i.length, )).replace(' ', ''))
                }
                if(key==='blue' && biggest>blue){
                    blue=Number((i.substring(i.length-2,i.length, )).replace(' ', ''))
                }
                if(key==='green' && biggest>green){
                    green=Number((i.substring(i.length-2,i.length, )).replace(' ', ''))
                }
             
          }

          

    }
    const result=red*blue*green
    console.log(result)
  
    return result;
   
    }
}

//cubesCount(arr)