const { principal } = require("./src/app");
principal();
const path = require("path")
const express = require("express");
const app = express();
const port = 2040;


app.use(express.static(path.join(__dirname, "/public")));
app.get("/", express.static(path.join(__dirname, "public/")));



app.listen(port, () => {
  console.log("ta funcionando")  
});
