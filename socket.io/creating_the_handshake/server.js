const express = require('express');
const app = express();
const port = 8000;

const server = app.listen(port, () =>
    console.log(`Server is locked and loaded on port ${server.address().port}!`)
);

const io = require('socket.io')(server, {cors:true});

io.on("connection", socket => {
    console.log("Nice to meet you. (shake hand)");
    socket.on("event_from_client", data => {
        socket.broadcast.emit("")
    })
})