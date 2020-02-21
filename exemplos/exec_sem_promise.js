const fs = require('fs');
 
fs.readFile('teste.txt', 'utf8', function(err, contents) {
  console.log(contents);
  fs.readFile('teste1.txt', 'utf8', function(err, contents) {
    console.log(contents);
    fs.readFile('teste2.txt', 'utf8', function(err, contents) {
      console.log(contents);
      fs.readFile('teste3.txt', 'utf8', function(err, contents) {
        console.log(contents);
        fs.readFile('teste4.txt', 'utf8', function(err, contents) {
          console.log(contents);
        });
      });
    });
  });
});

fs.readFile('teste4.txt', 'utf8', function(err, contents) {
  console.log(contents);
});
 
console.log('Mostrou async');