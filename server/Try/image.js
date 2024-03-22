import express from "express";
const router = express.Router();
import multer from "multer";
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + `${file.originalname}`;
    cb(null, uniqueSuffix);
  },
});
// import { v2 as cloudinary } from "cloudinary";

// cloudinary.config({
//   cloud_name: "dbii4tsax",
//   api_key: "452693787624869",
//   api_secret: "lx376G9WtctgE6qFGTpCCzY2f3g",
//   secure: true,
// });
//finally upload image to file
const upload = multer({ storage });
router.post("/upload", upload.single("file"), (req, res, next) => {
  console.log(req.file);
  res.json({
    status: true,
    msg: "User image uploaded successfully",
  });
});

export default router;
