const { principal } = require("./src/app");
principal();
const path = require("path")
const express = require("express");
const app = express();

app.get("/", express.static(path.join(__dirname, "public/")));



app.listen(8080, () => {
    
});
