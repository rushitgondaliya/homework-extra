const express = require("express");
const { categoryController } = require("../../controllers");

const router = express.Router();

/** create category */
router.post(
  "/create-category",
  categoryController.createCategory
);

/** Get category-list */
router.get(
  "/list",
  categoryController.categoryList
  );

/** Get user details by id */
router.get(
  "/get-details/:categoryId",
  categoryController.getCategoryDetails
);

/** delete category */
router.delete(
  "/delete/:categoryId",
  categoryController.deleteRecord
);

router.put(
  "/update-category/:categoryId",
  categoryController.updatecategory
)

module.exports = router;