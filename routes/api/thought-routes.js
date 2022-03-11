const router = require("express").Router();

const {
  addThought,
  addReaction,
  removeReaction,
  removeThought
} = require("../../controllers/thought-controller");

// POST /api/thoughts/
router.route("/").post(addThought);

// PUT /api/thoughts/<thoughtId>
router
  .route("/:thoughtId")
  .get()
  .put(/* function from thought-controller.js */)
  .delete(removeThought);

// POST /api/thoughts/<thoughtId>/reactions
router.route("/:thoughtId/reactions").post(addReaction);

// DELETE /api/thoughts/<thoughtId>/<reactionId>
router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);

module.exports = router;
