import express from 'express';
import bodyParser = require('body-parser');
const serverAPIPort = 3232;
const host = 'http://localhost'
const APIDomain = 'animo';
const APIPath = `/api/${APIDomain}`;
const APIRootPath = `${host}:${serverAPIPort}${APIPath}`
const staticsPort = 3000;
const staticsUrl = `${host}:${staticsPort}/`;

console.log('starting server', { serverAPIPort, APIPath });

const app = express();
app.use(bodyParser.json());

app.use((_, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  next();
});

app.get(`${APIPath}/alon`, (req, res) => {
  // @ts-ignore
  console.log("alon");
});


app.get(`${APIPath}/shira`, (req, res) => {
  // @ts-ignore
  console.log("shira");
});


function sendError(res: any, error_code: number, message: string) {
  res.status(error_code)
    .send("Error:\n" + message);
}

app.listen(serverAPIPort);
console.log('server running', serverAPIPort);

