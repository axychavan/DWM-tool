/* const express = require('express');
const path = require('path')
const port = 8080;
const app = express();

app.use(express.static('/angular'))
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.sendFile('/angular/index.html', { root: __dirname })
});

app.listen(port, () => {
    console.log("Server is listening on port " + port);
}); */


const express = require('express');
const http = require('http');
const path = require('path');

const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/dist/mark5'));

app.get('/*', (req, res) => res.sendFile(path.join(__dirname)));

const server = http.createServer(app);

server.listen(port, () => console.log(`App running on: http://localhost:${port}`));