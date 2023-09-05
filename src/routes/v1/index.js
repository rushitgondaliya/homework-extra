const express = require("express");
const categoryRoute = require("./category.route");
const productRoute = require("./product.route");

const router = express.Router();

router.use("/product", productRoute);
router.use("/category", categoryRoute);

module.exports = router;