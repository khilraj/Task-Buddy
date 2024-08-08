// /lib/models/userLog.model.ts
import { Schema, model, models } from "mongoose";

const UserLogSchema = new Schema({
  clerkId: {
    type: String,
    required: true,
  },
  eventType: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  details: {
    type: String,
  },
});

const UserLog = models?.UserLog || model("UserLog", UserLogSchema);

export default UserLog;
