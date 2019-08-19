const express = require("express");
const server = express();
const path = require("path");
const io = require("socket.io")(8080);

const port = process.env.port || 80;

server.use("/", express.static("public"));
server.use(express.json());

server.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

io.on("connection", (socket) => {
    socket.on("desconection", () => {
    });
});

server.listen(port, () => {
    console.log(`WebServer Running at ${port} port!`);
});