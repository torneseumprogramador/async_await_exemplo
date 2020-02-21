const fs = require('fs');
const lerArquivo = arquivo => {
  return new Promise((resolve, reject) => {
    fs.readFile(arquivo, 'utf8', (err, contents) => {
      if(err){
        reject(err);
      }
      else{
        resolve(contents);
      }
    });
  })
}

lerArquivo("teste1.txt").then(contents => {
  console.log(contents);
  return lerArquivo("teste2.txt");
}).then(contents => {
  console.log(contents);
  return lerArquivo("teste3.txt");
}).then(contents => {
  console.log(contents);
  return lerArquivo("teste4.txt");
}).then(contents => {
  console.log(contents);
});

console.log('Mostrou async');
