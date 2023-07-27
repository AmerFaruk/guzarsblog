import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const app = express();
//my selected port
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/about", (req, res) => {
    res.sendFile(__dirname + "/about-me.html");
});

app.get("/archive", (req, res) => {
    res.sendFile(__dirname + "/archive.html");
});

app.get("/cv", (req, res) => {
    res.sendFile(__dirname + "/cv.html");
});



app.listen(port, () => {
    console.log(`Server started on ${port}`);
});