import { Schema, model, models } from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new Schema({
  clerkId: { type: String, required: true, unique: true,
  },
  email: { type: String, required: true, unique: true,
  },
  username: { type: String, unique: true,
  },
  photo: { type: String, required: true,
  },
  firstName: { type: String,
  },
  lastName: { type: String,
  },
});

// Hash the email before saving the user
UserSchema.pre('save', async function (next) {
  if (this.isModified('email')) {
    try {
      const salt = await bcrypt.genSalt(10);
      this.email = await bcrypt.hash(this.email, salt);
    } catch (err) {
      return err;
    }
  }
  next();
});

const User = models?.User || model("User", UserSchema);

export default User;
