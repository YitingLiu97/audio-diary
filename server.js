const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
app.use(express.static('public'));
app.use(express.static('scripts'));

// app.use(express.static('scripts'));

// if there is a request body, parse it as JSON
// app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views/index.html"));
});
app.get("/index.html", (req, res) => {
    res.sendFile(path.join(__dirname, "views/index.html"));
});

app.get("/about.html", (req, res) => {
    res.sendFile(path.join(__dirname, "views/about.html"));
});
app.listen(3000, () => {
    console.log("Server listening at http://localhost:3000!")
});