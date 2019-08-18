const express = require("express");
const server = express();

const port = process.env.port || 80;

server.use(express.json());

server.listen(port, () => {
    console.log(`WebServer Running at ${port} port!`);
});