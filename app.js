const express = require('express');
const app = express();
const port = process.env.PORT || 3000
const formatTime = require('./src/utils/formatTime.js');

app.get('/', (req, res) => {
    res.send("Server has been running for " + formatTime(process.uptime()));
})

app.listen(port, () => {
    console.log("LISTENING ON PORT "+port);
})