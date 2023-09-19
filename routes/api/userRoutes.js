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
router.route('/').post(createUser);
router.route('/:id').get(getSingleUser);
router.route(':id').put(updateUser).delete(deleteUser);
router.route('/:userId/friends/:friendId').post(addFriend);
router.route('/:userId/friends/:friendId').delete(removeFriend);

module.exports = router;
