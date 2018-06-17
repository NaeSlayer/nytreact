const router = require("express").Router();
const articleController = require("../../controllers/articleController");



// Matches with "/api/books/:id"
router.route("/api/articles")
  .get(articleController.findAll)
  .put(articleController.update)
  .delete(articleController.remove);

// Matches with "/*"
router.route("/*")
  .get(articleController.findAll)


module.exports = router;
