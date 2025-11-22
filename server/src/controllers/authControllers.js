import { User } from "../models/User.js";
import { generateToken } from "../middleware/token.js";
import { handleServerError } from "../middleware/serverErrors.js";

/**
 * Registers a new user if the input is valid and the email is not already taken.
 * Hashes the password and generates a JWT token upon success.
 * @param {import('express').Request} req - Express request object.
 * @param {import('express').Response} res - Express response object.
 */
const registerUser = async (req, res) => {
  const { email } = req.body;
  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" });
    }

    const newUser = await User.create(req.body);

    if (newUser) {
      generateToken(newUser, res);

      return res
        .status(201)
        .json({ message: "User created", userId: newUser._id });
    } else {
      return res.status(400).json({ message: "Invalid user data" });
    }
  } catch (error) {
    return handleServerError(res, error, "registerUser");
  }
};

export { registerUser };
