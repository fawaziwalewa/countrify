const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

// Load JSON data
const jsonData = JSON.parse(fs.readFileSync(path.join(__dirname, "public", "data.json"), "utf8"));

// Route for the view page
app.get("/view/:id", (req, res) => {
  const id = req.params.id.toLowerCase();

  const item = jsonData.find(item => item.alpha3Code.toLowerCase() === id);

  if (!item) {
    // If the item with the provided id is not found, return 404 Not Found.
    return res.status(404).sendFile(path.join(__dirname, "public", "404.html"));
  } else {
    // If the item is found, serve the "view.html" file.
    return res.sendFile(path.join(__dirname, "public", "view.html"));
  }
});

// Route for handling 404 errors
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "public", "404.html"));
});

module.exports = app;
