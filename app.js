const express = require("express");
const app = express();

app.get("/test", (req, res) => {
  res.json({ meassage: "Welcome to Swathi world ❤️" });
});

app.listen(3000, () => {
  console.log("server listening on port 3000");
});
