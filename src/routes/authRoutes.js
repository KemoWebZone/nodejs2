const router = require("express").Router();
const { register, login } = require("../controllers/authController");
const { protect } = require("../middleware/authMiddleware");
const User = require("../models/User");

router.post("/register", register);
router.post("/login", login);

router.get("/me", protect, async (req, res) => {
  const user = await User.findById(req.user.id).select("-password");
  res.json(user);
});

module.exports = router;
