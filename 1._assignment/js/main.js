const app = require("express")();
const fs = require('fs');
const yaml = require('js-yaml');
const xml2js = require('xml2js');

console.log("JS Read and Parse:")

try {
  let fileContents = fs.readFileSync('../files/file.yml', 'utf8');
  let data = yaml.load(fileContents);

  console.log("===YML===")
  console.log("age:", data.age);
} catch (e) {
  console.log(e);
}


try {
  const parser = new xml2js.Parser();
  fs.readFile('../files/file.xml', function (err, data) {
    parser.parseString(data, function (err, result) {
      console.log("===XML===")
      console.log("hobbies:", result.hobbies.hobby);
    });
  });
} catch (e) {
  console.log("ERROR", e)
}

app.listen(3000, () => {
  console.log("Runs on port", 3000)
});