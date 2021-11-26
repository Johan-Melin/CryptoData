const express = require('express');
const app = express();
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send("Server has been running for " + process.uptime() + "seconds.")
})

app.listen(port, () => {
    console.log("LISTENING ON PORT "+port);
})