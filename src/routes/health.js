const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({
    status:    "ok",
    timestamp: new Date().toISOString(),
    uptime:    `${Math.floor(process.uptime())}s`,
    env:       process.env.NODE_ENV || "development",
  });
});

console.log("Version is 10");


module.exports = router;