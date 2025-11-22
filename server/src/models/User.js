import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    firstName: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Invalid email format"],
    },

    password: {
      type: String,
      required: true,
      minlength: 8,
      select: false,
    },

    phone: {
      type: String,
      trim: true,
    },

    // Favorite destinations, bookmarks, etc.
    savedTrips: [
      {
        tripId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Trip",
        },
        addedAt: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);

/**
 * Mongoose pre-save hook that securely hashes the user's password.
 * Ensures plain-text passwords are never stored in the database.
 *
 * @param {string} password - The user's unencrypted password.
 * @returns {Promise<string>} Resolves with the hashed password saved to the document.
 */
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  const SALT_ROUNDS = Number(process.env.SALT_ROUNDS) || 10;
  const salt = await bcrypt.genSalt(SALT_ROUNDS);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

export const User = mongoose.model("User", userSchema);
