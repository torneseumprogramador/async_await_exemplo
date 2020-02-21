const fs = require('fs');
const lerArquivo = function(arquivo){
  return new Promise(function(resolve, reject){
    fs.readFile(arquivo, 'utf8', function(err, contents) {
      if(err){
        reject(err);
      }
      else{
        resolve(contents);
      }
    });
  })
}

lerArquivo("teste1.txt").then(function(contents){
  console.log(contents);
  return lerArquivo("teste2.txt");
}).then(function(contents){
  console.log(contents);
  return lerArquivo("teste3.txt");
}).then(function(contents){
  console.log(contents);
  return lerArquivo("teste4.txt");
}).then(function(contents){
  console.log(contents);
});

console.log('Mostrou async');
