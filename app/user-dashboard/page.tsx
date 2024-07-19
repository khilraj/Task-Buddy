// app/user-dashboard/page.tsx
import React from "react";
import { useGlobalState } from "../context/globalProvider";
import Sidebar from "../Components/Sidebar/Sidebar";
import Tasks from "../Components/Tasks/Tasks";

export default function UserDashboard() {
  const { tasks } = useGlobalState();

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <Tasks title="All Tasks" tasks={tasks} />
      </div>
    </div>
  );
}
