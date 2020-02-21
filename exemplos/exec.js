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

const init = async() => {
  const contents1 = await lerArquivo("teste1.txt");
  const contents2 = await lerArquivo("teste2.txt");
  const contents3 = await lerArquivo("teste3.txt");
  const contents4 = await lerArquivo("teste4.txt");

  console.log(contents1);
  console.log(contents2);
  console.log(contents3);
  console.log(contents4);
}

init();

const init2 = async() => {
  const contents1 = await lerArquivo("teste1.txt");
  const contents2 = await lerArquivo("teste2.txt");
  const contents3 = await lerArquivo("teste3.txt");
  const contents4 = await lerArquivo("teste4.txt");

  return [contents1, contents2, contents3, contents4];
}

init2().then(dados => {
  console.log(dados);
});

console.log('Mostrou async');
