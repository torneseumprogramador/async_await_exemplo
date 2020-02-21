let fs = require('fs');

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

// const init = async() => {
//   const contents1 = await lerArquivo("teste.txt");
//   const contents2 = await lerArquivo("teste2.txt");
//   const contents3 = await lerArquivo("teste3.txt");
//   const contents4 = await lerArquivo("teste4.txt");

//   console.log(contents1);
//   console.log(contents2);
//   console.log(contents3);
//   console.log(contents4);
// }


// init();

// lerArquivo("teste.txt").then(function(contents){
//   console.log(contents);
//   return lerArquivo("teste2.txt");
// }).then(function(contents){
//   console.log(contents);
//   return lerArquivo("teste3.txt");
// }).then(function(contents){
//   console.log(contents);
//   return lerArquivo("teste4.txt");
// }).then(function(contents){
//   console.log(contents);
// });


// fs.readFile('teste.txt', 'utf8', (err, contents) => {
//   c1 = contents
//   console.log(contents);
//   fs.readFile('teste2.txt', 'utf8', (err, contents) => {
//     c2 = contents
//     console.log(contents);
//     fs.readFile('teste3.txt', 'utf8', (err, contents) => {
//       c3 = contents
//       console.log(contents);
//       fs.readFile('teste4.txt', 'utf8', (err, contents) => {
//         c4 = contents
//         console.log(contents);
//         console.log(`${c1} - ${c2} - ${c3} - ${c4}`)
//       });
//     });
//   });
// });








