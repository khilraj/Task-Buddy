// /lib/models/userLog.model.ts
import { Schema, model, models } from "mongoose";

const MessageSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  api: {
    type: String,
    required: true,
  },
  method: {
    type: String,
    required: true,
  },
});

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
  messages: [MessageSchema], // Array of messages
});

const UserLog = models?.UserLog || model("UserLog", UserLogSchema);

export default UserLog;
