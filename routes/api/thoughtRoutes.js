const router = require('express').Router();

const { getThoughts, getSingleThought, createThought, updateThought, removeThought, addReaction, removeReaction } = require('../../controllers/thoughtController');

// get, post, put, delete
// /api/thoughts route
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId route
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(removeThought);

// /api/thoughts/:thoughtId/reactions route
router.route('/:thoughtId/reactions').post(addReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId route
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;
