var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();
var path = require('path');
var dataService = require('./data-service.js');

app.use(express.static('public'));
// setup a 'route' to listen on the default url path

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname+"/views/main.html"));
});
// return home.html

app.get("/index", (req, res) => {
    res.sendFile(path.join(__dirname+"/views/index.html"));
});
// return about.html

app.get("/journal", (req, res) => {
    res.sendFile(path.join(__dirname+"/views/journal.html"));
});

app.get("/activity", (req, res) => {
    res.sendFile(path.join(__dirname+"/views/activity.html"));
});

app.get("/project1", (req, res) => {
    res.sendFile(path.join(__dirname+"/views/project1.html"));
});

// Hackathon image file 1
app.get("/image1", (req, res) => {
    res.sendFile(path.join(__dirname+"/data/TD_Hackathon1.jpeg"));
});

// Hackathon image file 2
app.get("/image2", (req, res) => {
    res.sendFile(path.join(__dirname+"/data/TD_Hackathon2.jpeg"));
});

// Block-chain Hackathon image file 3
app.get("/image3", (req, res) => {
    res.sendFile(path.join(__dirname+"/data/blockchain_hackathon1.jpg"));
});

// Block- chain Hackathon image file 4
app.get("/image4", (req, res) => {
    res.sendFile(path.join(__dirname+"/data/blockchain_hackathon2.jpg"));
});


app.get('*', (req, res) => {
    res.status(404);
    res.redirect("https://cdn-images-1.medium.com/max/1600/1*2AwCgo19S83FGE9An68w9A.gif");
})

//setup http server to listen on HTTP_PORT
dataService.initialize()
.then((data) => {
    app.listen(HTTP_PORT, () => console.log(`Listening on port ${HTTP_PORT}`));
})
.catch(() => {
    console.log("There was an error initializing");
})