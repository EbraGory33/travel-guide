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

/**
 * Logs in a user by verifying the username and password, then generates a JWT token.
 * @param {import('express').Request} req - Express request object.
 * @param {import('express').Response} res - Express response object.
 */
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res.status(400).json({ message: "Invalid username or password" });
    }
    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    generateToken(user, res);

    return res.status(200).json({
      message: "Login successful",
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      },
    });
  } catch (error) {
    return handleServerError(res, error, "login");
  }
};

/**
 * Logs out the user by clearing the JWT cookie.
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
const logout = (req, res) => {
  try {
    res
      .cookie("jwt", "", {
        maxAge: 0,
        httpOnly: true,
        sameSite: process.env.NODE_ENV === "development" ? "lax" : "none",
        secure: process.env.NODE_ENV !== "development",
      })
      .status(200)
      .json({ message: "Logged out successfully" });
  } catch (error) {
    return handleServerError(res, error, "logout");
  }
};

// TODO: FIX THESE CONTROLLERS FOR DELETE USER AND UPDATE USER
const updateUser = (req, res) => {
  try {
    res.status(200).json({
      message: "USER UPDATED SUCCESSFULLY",
    });
  } catch (error) {
    return handleServerError(res, error, "update User");
  }
};

const deleteUser = (req, res) => {
  try {
    res.status(200).json({
      message: "USER DELETED SUCCESSFULLY",
    });
  } catch (error) {
    return handleServerError(res, error, "delete User");
  }
};

/**
 * Checks if the user is authenticated by returning user data.
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
const verityUser = (req, res) => {
  try {
    res.status(200).json(req.user);
  } catch (error) {
    return handleServerError(res, error, "verifyUserSession");
  }
};

export { registerUser, login, logout, updateUser, deleteUser, verityUser };
