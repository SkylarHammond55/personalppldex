const router = require('express').Router();
const { Profile } = require('../../models');
const withAuth = require('../../utils/auth');

router.get("/upload", (req, res) => {
  res.render("upload");
});

router.post("/upload", upload.single("image"), (req, res) => {
  res.send("Image Uploaded");
});
