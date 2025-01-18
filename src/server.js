const express = require("express");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173", // Allow your frontend URL
  })
);

app.get("/", async (req, res) => {
  try {
    const response = await fetch(
      "https://www.udacity.com/_next/data/0e71b6e9-4ed8-45ca-b97a-51e354c8fed7_9ad024f9/default.json"
    );
    const data = await response.json();
    res.json(data); // Pass the fetched data to the frontend
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

const port = 5173;
app.listen(port, () =>
  console.log(`Server started on port ${port}`)
);
