const fs = require('fs'); 
const readline = require('readline');
const colors={'blue':14, 'red':12, 'green':13}


const file = readline.createInterface({ 
    input: fs.createReadStream('secondInput.txt'), 
    output: process.stdout, 
    terminal: false
}); 


let sum=0

file.on('line', (line) => {

    if(cubesCount(line)){
        const gameNr=line.split(':')
        sum=sum+Number(gameNr[0].replace('Game ', ''))
    }
    console.log(sum)


})


function cubesCount(line){
   
    const drawn=line.substring(line.indexOf(":") + 1)
    const slices = drawn.split(";")
    for (i of slices){
        let result=0;
        for (const [key, value] of Object.entries(colors)) {
 
            //result=cubesCount(key, line)
            const removedColor = line.split(` ${key}`);
            for ( i of removedColor){
       
                let number= i.substring(i.length-2,i.length, )
                if(number.replace(' ', '') > value){
                    
                    return false;
                }
                
              
          }
          

    }
  
    return true;
   
    }
}

