const User = require('../models/User');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createUser = async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email
  });

  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
