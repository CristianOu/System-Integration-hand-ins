const express = require('express')
const app = express()
const port = 3000

const fs = require('fs')
const yaml = require('js-yaml')
const xml2js = require('xml2js')

// Read, parse XML and send response
app.get("/xml", (req, res) => {
  const parser = new xml2js.Parser();
  try {
    fs.readFile('../../../1._intro/files/file.xml', function (err, data) {
      parser.parseString(data, function (err, result) {
        if (result) {
          res.send(result.person);
        } else {
          res.send('Internal Error');
        }
      });
    });
  } catch (error) {
    console.log(error)
  }
});

// Read, parse YML and send response
app.get("/yml", (req, res) => {
  try {
    let fileContents = fs.readFileSync('../../../1._intro/files/file.yml', 'utf8');
    let response = yaml.load(fileContents);
    if (response) {
      res.send(response)
    } else {
      res.send('Internal Error')
    }
  } catch (error) {
    console.log(error)
  }
});

app.listen(port, () => {
    console.log("Server is running on", port);
});
