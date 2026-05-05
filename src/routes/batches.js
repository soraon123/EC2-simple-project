const router = require("express").Router();

const batches = [
  { id: 1, slug: "web-dev-2024",    title: "Full Stack Web Dev",  students: 120 },
  { id: 2, slug: "devops-2024",     title: "DevOps & Cloud",      students: 85  },
  { id: 3, slug: "dsa-masterclass", title: "DSA Masterclass",     students: 200 },
];

// GET /api/batches
router.get("/", (req, res) => {
  res.json({ success: true, count: batches.length, data: batches });
});

// GET /api/batches/:slug
router.get("/:slug", (req, res) => {
  const batch = batches.find(b => b.slug === req.params.slug);
  if (!batch) return res.status(404).json({ success: false, message: "Batch not found" });
  res.json({ success: true, data: batch });
});

module.exports = router;