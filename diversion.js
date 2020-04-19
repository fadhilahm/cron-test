const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;

app.use(cors());

app.get("/", (req, res) =>
  res.send("Aha! this is just a diversion, but the server is running well")
);

app.listen(port, () =>
  console.log(`Running the test-cron app on port:${port}`)
);
