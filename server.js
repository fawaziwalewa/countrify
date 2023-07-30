const express = require("express");
const app = express();
const port = 3000;

// Serve static files from the "public" folder
app.use(express.static("public"));

// Route for the home page
app.get("/", (req, res) => {
  res.sendFile("index.html", { root: "public" });
});

// Require the JSON data directly
const jsonData = require('./public/data.json');

// Route for the view page
app.get("/view/:id", (req, res) => {
  const id = req.params.id;

  const item = jsonData.find(item => item.alpha3Code.toLowerCase() === id);
  
  if (!item) {
    // If the item with the provided id is not found, return 404 Not Found.
    res.status(404).sendFile('404.html', { root: 'public' });
  } else {
    // If the item is found, serve the "view.html" file.
    res.sendFile("view.html", { root: "public"});
  }
});

// Route for the 404 page.
app.use((req, res) => {
    res.status(404).sendFile('404.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`listening on port ${port} and You can access it by visiting http://localhost:3000`);
});
