const router = require("express").Router();

const {
  addThought,
  addReaction,
  removeReaction,
  removeThought,
  getOneThought,
  updateThought,
  getAllThoughts
} = require("../../controllers/thought-controller");

// POST /api/thoughts/
router.route("/")
  .post(addThought)
  .get(getAllThoughts);

// PUT /api/thoughts/<thoughtId>
router
  .route("/:thoughtId")
  .get(getOneThought)
  .put(updateThought)
  .delete(removeThought);

// POST /api/thoughts/<thoughtId>/reactions
router.route("/:thoughtId/reactions").post(addReaction);

// DELETE /api/thoughts/<thoughtId>/<reactionId>
router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);

module.exports = router;
