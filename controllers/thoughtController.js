const { User, Thought } = require('../models');

module.exports = {
    // Get all thoughts
    getThoughts(req, res) {
        Thought.find()
            .then((thoughts) => res.json(thoughts))
            .catch((err) => res.status(500).json(err));
    },
    // Get a thought
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
            //populate reactions
            .populate('reactions')
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought with that ID' })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },
    // Create a thought
    async createThought(req, res) {
        try {
          const thought = await Thought.create(req.body);
          const user = await User.findOneAndUpdate(
            { _id: req.body.userId },
            { $addToSet: { thoughts: thought._id } },
            { new: true }
          );
    
          if (!user) {
            return res.status(404).json({
              message: 'Thought created, but found no user with that ID',
            })
          }
    
          res.json('Created the thought 🎉');
        } catch (err) {
          console.log(err);
          res.status(500).json(err);
        }
      },
    // Delete a thought
    async deleteThought(req, res) {
        try {
          const thought = await Thought.findOneAndRemove({ _id: req.params.thoughtId });
    
          if (!thought) {
            return res.status(404).json({ message: 'No thought with this id!' });
          }
    
          const user = await User.findOneAndUpdate(
            { thoughts: req.params.thoughtId },
            { $pull: { thoughts: req.params.thoughtId } },
            { new: true }
          );
    
          if (!user) {
            return res.status(404).json({
              message: 'Thought deleted but no user found with this id!',
            });
          }
    
          res.json({ message: 'Thought successfully deleted!' });
        } catch (err) {
          res.status(500).json(err);
        }
      },
    // Update a thought
    updateThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought with this id!' })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },
    // Add a reaction to a thought
    async createReaction(req, res) {
        console.log('You are adding a reaction');
        console.log(req.body);
    
        try {
          const thought = await Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: { reactions: req.body } },
            { runValidators: true, new: true }
          );
    
          if (!thought) {
            return res
              .status(404)
              .json({ message: 'No thought found with that ID :(' });
          }
    
          res.json(thought);
        } catch (err) {
          res.status(500).json(err);
        }
      },
    // Remove reaction from a thought
    async deleteReaction(req, res) {
        try {
          const deletedReaction = await Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $pull:  { reactions: { reactionId: req.body.reactionId } } },
            // { runValidators: true, new: true }
          );
    
          if (!deletedReaction) {
            return res
              .status(404)
              .json({ message: 'No thought found with that ID :(' });
          }
    
          res.json(deletedReaction);
        } catch (err) {
          res.status(500).json(err);
        }
      },
    };
    