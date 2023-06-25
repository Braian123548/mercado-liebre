const express = require("express");
const path = require("path");

const app = express();
const PORT = 3030;

app.use(express.static('public'));

app.listen(3030,()=>{
  console.log("El servidor esta corriendo en el puerto"+PORT);
})

/* rutas */
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "home.html"))
);