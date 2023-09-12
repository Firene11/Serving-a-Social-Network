const router = require('express').Router();

const {
  getAllThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction,
} = require('../../controllers/thoughtController');

//router.route('/').get(getAllThoughts).post(createThought);
//router.route('/:id').get(getSingleThought);

router.get('/', getAllThoughts); // GET to get all thoughts
router.get('/:id', getSingleThought); // GET to get a single thought by its _id
router.post('/', createThought); // POST to create a new thought
// (don't forget to push the created thought's _id to the associated user's thoughts array field)

/*example data
{
    "thoughtText": "Here's a cool thought...",
    "username": "lernantino",
    "userId": "5edff358a0fcb779aa7b118b"
  }
  */

router.route('/:id').put(updateThought);
router.route('/:id').delete(deleteThought);
router.route('/thoughtId/reactions').post(createReaction);
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

//router.put('/:id', updateThought); // PUT to update a thought by its _id
//router.delete('/:id', deleteThought); // DELETE to remove a thought by its _id

//router.post('/:thoughtId/reactions', createReaction); // POST to create a reaction stored in a single thought's reactions array field
//router.delete('/:thoughtId/reactions/:reactionId', deleteReaction); // DELETE to pull and remove a reaction by the reaction's reactionId value


module.exports = router;
