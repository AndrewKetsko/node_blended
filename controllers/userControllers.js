const User = require("../db/models/userModel");

const signUp = async (req, res) => {
  const { name, email, password } = req.body;

  const user = await User.findOne({ email });
  if (user) return res.status(409).json({ message: "some conflict" });
  const newUser = new User(req.body);
};

module.exports = { signUp };
