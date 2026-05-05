const express = require("express");
const app = express();

const healthRouter  = require("./routes/health");
const batchesRouter = require("./routes/batches");

app.use(express.json());

// homepage — students hit this in the browser to confirm it's live
app.get("/", (req, res) => {
  res.send(`
    <html>
      <body style="font-family:sans-serif; padding:40px; background:#0f172a; color:#e2e8f0">
        <h1 style="color:#38bdf8">Batch API is live</h1>
        <p>Server: <strong>${process.env.SERVER_NAME || "local"}</strong></p>
        <p>Uptime: <strong>${Math.floor(process.uptime())}s</strong></p>
        <ul>
          <li><a href="/health" style="color:#7dd3fc">/health</a></li>
          <li><a href="/api/batches" style="color:#7dd3fc">/api/batches</a></li>
        </ul>
      </body>
    </html>
  `);
});

app.use("/health",      healthRouter);
app.use("/api/batches", batchesRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});