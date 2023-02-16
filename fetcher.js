
const fs = require('fs');
const request = require('request');

const fetcher = function() {

  let args = process.argv.slice(2);
  let site = args[0];
  let filePath = args[1];

  request(`${site}`, (error, response, body) => {
    if (error) {
      console.log('error:', error);
      return;
    }
    
    if (response.statusCode === 200 || response.statusCode === 201) {
      fs.writeFile(filePath, body, err => {
        if (err) {
          console.log(`Error: ${err}`);
        }
        console.log(`File written successfully. Downloaded and saved ${body.length} bytes to ${filePath}.`);
      });
    }
  });
};

fetcher();
