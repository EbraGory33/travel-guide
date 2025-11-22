import jwt from "jsonwebtoken";
import ms from "ms";

/**
 * Generates a signed JWT for the authenticated user and sets it as an HTTP-only
 * cookie on the response for secure client-side storage.
 *
 * @function generateToken
 * @param {Object} user - The authenticated user document.
 * @param {string} user._id - Unique MongoDB user identifier.
 * @param {string} user.email - The user's email address.
 * @param {string} user.firstName - The user's first name.
 * @param {string} user.lastName - The user's last name.
 * @param {string} user.phone - The user's phone number.
 * @param {Object} res - Express response object used to set the cookie.
 * @returns {string} The JWT token.
 *
 * @example
 * const token = generateToken(user, res); // Sets the token cookie and returns the token string
 *
 * Security Notes:
 * - Cookie includes httpOnly, secure, and sameSite settings for protection.
 * - Token expiration duration is determined by `process.env.TOKEN_EXPIRES_IN` (e.g., "7d", "12h").
 */
const generateToken = (user, res) => {
  const payload = {
    userId: user._id,
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    phone: user.phone,
  };

  const token = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: process.env.TOKEN_EXPIRES_IN,
  });

  const tokenExpiry = process.env.TOKEN_EXPIRES_IN || "7d";
  const maxAgeMs = ms(tokenExpiry);

  console.log(`IsSecure: ${process.env.NODE_ENV !== "development"}`);

  res.cookie("jwt", token, {
    maxAge: maxAgeMs,
    httpOnly: true,
    sameSite: process.env.NODE_ENV === "development" ? "lax" : "none",
    secure: process.env.NODE_ENV !== "development",
  });

  return token;
};

export { generateToken };
