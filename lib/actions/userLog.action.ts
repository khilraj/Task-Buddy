// /lib/actions/userLog.action.ts
import UserLog from "@/lib/models/userLog.model";
import { connect } from "@/lib/db";

export async function addUserLog(clerkId: string, eventType: string, details: string, messages: Array<{ email: string, api: string, method: string}>) {
  try {
    await connect();
    const newLog = await UserLog.create({ clerkId, eventType, details, messages });
    return JSON.parse(JSON.stringify(newLog));
  } catch (error) {
    console.log(error);
  }
}
