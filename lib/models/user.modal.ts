import { Schema, model, models } from "mongoose";
import bcrypt from "bcrypt";

const SALT_ROUNDS = 10

const UserSchema = new Schema({
  clerkId: { type: String, required: true, unique: true,
  },
  email: { type: String, required: true, unique: true,
  },
  username: { type: String, required: true, unique: true,
  },
  photo: { type: String, required: true,
  },
  // firstName: { type: String,
  // },
  // lastName: { type: String,
  // },
});

// Hash personal information before saving the user
UserSchema.pre('save', async function (next) {
  const user = this as any;

  if (user.isModified('email')) {
    user.email = await bcrypt.hash(user.email as string, SALT_ROUNDS);
  }
  if (user.isModified('username')) {
    user.username = await bcrypt.hash(user.username as string, SALT_ROUNDS);
  }
  next();
});

const User = models?.User || model("User", UserSchema);

export default User;
