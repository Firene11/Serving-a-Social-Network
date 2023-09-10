const { User, Thought } = require('../models/index');

module.exports = {
    async getAllThoughts(req, res) {
        try {
            const thoughts = await Thought.find();
            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async getSingleThought(req, res) {
        try {
          const thought = await Thought.findById(req.params.id);
          res.json(thought);
        } catch (err) {
          res.status(500).json(err);
        }
      },
      async createThought(req, res) {
        try {
          const { thoughtText, username, userId } = req.body;
      
          const newThought = await Thought.create({ thoughtText, username, userId });
          await User.findByIdAndUpdate(
            userId,
            { $push: { thoughts: newThought._id } },
            { new: true }
          );
          res.status(201).json({ message: 'New thought created!', newThought });
        } catch (err) {
          res.status(500).json(err);
        }
      },
      async updateThought(req, res) {
        try {
          const { thoughtText, username, userId } = req.body;
      
          const updatedThought = await Thought.findByIdAndUpdate(
            req.params.id,
            { thoughtText, username, userId },
            { new: true }
          );
      
          const message = updatedThought
            ? { message: 'thought updated', updatedThought }
            : { message: 'thought not found' };
          res.status(updatedThought ? 200 : 404).json(message);
        } catch (err) {
          res.status(500).json(err);
        }
      },
      async deleteThought(req, res) {
        try {
          const deletedThought = await Thought.findByIdAndDelete(req.params.id);
          const message = deletedThought
            ? { message: 'thought deleted', deletedThought }
            : { message: 'thought not found' };
      
          res.status(deletedThought ? 200 : 404).json(message);
        } catch (err) {
          res.status(500).json(err);
        }
      },
      async createReaction(req, res) {
        try {
          const deepThought = await Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $push: { reactions: req.body } },
            { new: true }
          );
      
          !thoughtData
            ? res.status(404).json({ message: 'No thought found!' })
            : res.json(deepThought);
        } catch (err) {
          res.json(500).json(err);
        }
      }

};