import { clerkClient } from "@clerk/nextjs/server";
import { currentUser } from "@clerk/nextjs";
import AdminDashboardUI from "./DashboardUI";



export default async function AdminDashboard() {
  const users = await clerkClient.users.getUserList();
  const user = await currentUser();

  return <AdminDashboardUI users={users} currentUser={user} />;
}

