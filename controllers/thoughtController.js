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
      }


};
  
