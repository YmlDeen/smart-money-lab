const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Test API
app.get("/api/test", (req, res) => {
  res.json({ message: "Server is working 🚀" });
});

// Gold H1 API (fallback sample)
app.get("/api/gold-history-h1", (req, res) => {
  let data = [];
  let price = 1800;

  for (let i = 0; i < 300; i++) {
    let open = price;
    price += (Math.random() - 0.5) * 15;
    let close = price;
    let high = Math.max(open, close) + Math.random() * 5;
    let low = Math.min(open, close) - Math.random() * 5;

    data.push({
      time: new Date(Date.now() + i * 3600000).toISOString(),
      open,
      high,
      low,
      close,
    });
  }

  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
