const express = require("express");
const path = require("path");
const app = express(); 
const port = process.env.PORT || "8000"; 
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")))

app.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});
app.use(function(req, res){
    res.status(404).send("🍌, 404")
});
app.get("/", (req, res) => { res.status(200).send("some stuff"); }); 
app.listen(port, () => { console.log(`Listening to requests on http://localhost:${port}`); });
