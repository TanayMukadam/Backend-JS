const express = require("express");
require('dotenv').config()
const app = express();
const port = process.env.PORT

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
	res.send("Hello Twitter");
});

app.get("/login", (req, res) => {
	res.send("<h1>Please Login</h1>");
});

app.get("/youtube", (req, res) => {
	res.send("<h2>Tanay Youtube</h2>");
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
