const app = require("express")();
const fs = require('fs');
const yaml = require('js-yaml');
const xml2js = require('xml2js');

console.log("JS Read and Parse:");

// Read and parse YML
function readParseYML() {
  try {
    let fileContents = fs.readFileSync('../files/file.yml', 'utf8');
    let { person } = yaml.load(fileContents);
  
    console.log("===YML===");
    if (person) {
      console.log("age:", person);
    } else {
      console.log("Internal Error");
    }
  } catch (e) {
    console.log(e);
  }
};

// Read and parse XML
function readParseXML() {
  try {
    const parser = new xml2js.Parser();
    fs.readFile('../files/file.xml', function (err, data) {
      parser.parseString(data, function (err, result) {
        console.log("===XML===")
        if (result.person) {
          console.log("hobbies:", result.person);
        } else {
          console.log("Internal error");
        }
      });
    });
  } catch (e) {
    console.log(e);
  }
};

readParseYML();
readParseXML();

app.listen(3000, () => {
  console.log("Runs on port", 3000)
});