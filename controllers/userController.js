const User = require('../models/User');

module.exports = {
    async getSingleUser(req, res) {
        try {
            const user = await User.findById(req.params.id);
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async getAllUsers(req, res) {
        try {
            const getUsers = await User.find();
            res.json(getUsers);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async createUser(req, res) {
        try {
            const findUser = await User.findOne({ username: req.body.username });
            if (findUser) {
                return res.status(404).json({ message: 'Username not available' });
            }
            const newUser = await User.findOne({ username: req.body.username });
            res.status(200).json({ message: 'New User created!', user: newUser});
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async updateUser(req, res) {
        try {
          const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
          });
          res.status(200).json({ message: 'User updated!', user: updatedUser});
        } catch (err) {
          res.status(500).json(err);
        }
      },
      async deleteUser(req, res) {
        try {
          const deletedUser = await User.findByIdAndDelete(req.params.id);
          await Thought.deleteMany({ _id: { $in: deletedUser.thoughts } });
          res.status(200).json({ message: 'User deleted!', user: deletedUser});
        } catch (err) {
          res.status(500).json(err);
        }
      },
      async addFriend(req, res) {
        try {
          const { userId, friendId } = req.params;
          const updatedUser = await User.findByIdAndUpdate(
            userId,
            { $addToSet: { friends: friendId } },
            { new: true }
          );
      
          const updatedFriend = await User.findByIdAndUpdate(
            friendId,
            { $addToSet: { friends: userId } },
            { new: true }
          );
      
          if (!updatedUser || !updatedFriend) {
            return res.status(404).json({ message: 'Sorry, nobody there' });
          }
          res.status(200).json({ message: 'Friend added!', user: updatedUser});
        } catch (err) {
          res.status(500).json(err);
        }
      },
      async removeFriend(req, res) {
        try {
          const { userId, friendId } = req.params;
          const updatedUser = await User.findByIdAndUpdate(
            userId,
            { $pull: { friends: friendId } },
            { new: true }
          );
      
          const updatedFriend = await User.findByIdAndUpdate(
            friendId,
            { $pull: { friends: userId } },
            { new: true }
          );
      
          if (!updatedUser || !updatedFriend) {
            return res.status(404).json({ message: 'Sorry, nobody there!' });
          }
          res.status(200).json({ message: 'Friend removed!', user: updatedUser });
        } catch (err) {
          res.status(500).json(err);
        }
      }
};