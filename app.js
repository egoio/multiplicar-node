const fs = require('fs');
const argv = require('yargs').argv;
const colors = require('colors').argv;


let base= 6;
let data =''

for (let i = 0; i <= 10; i++) {
    
    let multi = base * i
    data += (`${base} * ${i} = ${base * i }\n`)

}


fs.writeFile(`tablas/tabla${base}.txt`, data, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});