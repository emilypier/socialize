const router = require("express").Router();

const {} = require("../../controllers/thought-controller");

// POST /api/thoughts/
router.route("/").post(/* function from thought-controller.js */);

// PUT /api/thoughts/<thoughtId>
router
  .route("/:thoughtId")
  .get()
  .put(/* function from thought-controller.js */)
  .delete(/* function from thought-controller.js */);

router
  .route("/:thoughtId/reactions")
  .post();

// DELETE /api/thoughts/<thoughtId>/<reactionId>
router
  .route("/:thoughtId/reactions/:reactionId")
  .delete(/* function from thought-controller.js */);

module.exports = router;
