const router = require('express').Router();

const {
  getAllUsers, 
  getSingleUser, 
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/userController');

router.route('/').get(getAllUsers).post(createUser);
router.route('/:id').get(getSingleUser);
router.route(':id').put(updateUser).delete(deleteUser);
router.route('/:userId/friends/:friendId').post(addFriend);
router.route('/:userId/friends/:friendId').delete(removeFriend);

//router.get('/', getAllUsers); // GET all users
//router.get('/:id', getSingleUser); // GET a single user by its _id and populated thought and friend data
//router.post('/', createUser); // POST a new user


//router.put('/:id', updateUser); // PUT to update a user by its _id
//router.delete('/:id', deleteUser); // DELETE to remove user by its _id

//router.post('/:userId/friends/:friendId', addFriend); // POST to add a new friend to a user's friend list
//router.delete('/:userId/friends/:friendId', removeFriend); // DELETE to remove a friend from a user's friend list
//router.delete('/:userId/thoughts/:thoughtId'); // BONUS: Remove a user's associated thoughts when deleted.

module.exports = router;
