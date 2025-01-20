
const express = require('express');

const app = express();

app.get("/", (req,res) => res.send("Hello from Cloud Run!"));

app.listen(8080, () => console.log("Running on :8080"));
