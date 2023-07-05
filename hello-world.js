//1st task

console.log("HELLO WORLD");

//2nd task

const http = require("http");
const server = http.createServer(function (req, res) {
  res.write("<h1> Hello Node</h>\n");
  res.end();
});

//3rd task
const fs = require("fs");
console.log("File system starting..");
fs.writeFile("welcome.txt", "hello node", (err) => {
  err ? console.log(err) : console.log("File successfully created");
});
fs.readFile("welcome.txt", (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});

//4th task
const password = require ('./password-generator')

//5th task
const transporter = require ('./email-sender')

server.listen(3000, (err) => {
  err
    ? console.log(err)
    : console.log("Server is running on http://localhost:3000");
});

