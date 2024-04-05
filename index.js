// Using the ES6 Modules syntax
import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 5000;

app.get('/', (req, res) => {
  // 👇️ using __dirname
  res.sendFile(__dirname + '/index.html');
});

console.log(__dirname);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
