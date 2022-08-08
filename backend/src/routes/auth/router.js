const express = require("express");
const router = express.Router();
const { signin, signout, signup } = require("./controller");
const upload = require("../../middleware/upload_middleware");

// Signup
router.post("/sigup", upload.single("image"), signup);
// Signin
router.post("/sigup", signin);
// Signout
router.post("/sigup", signout);

module.exports = router;
