// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import Sidebar from "../app/Components/Sidebar/Sidebar";

// export default function ConditionalSidebar() {
//   const router = useRouter();
//   const [showSidebar, setShowSidebar] = useState(false);

//   useEffect(() => {
//     const currentPath = router.pathname;
//     setShowSidebar(currentPath === "/tasks");
//   }, [router.pathname]);

//   return showSidebar ? <Sidebar /> : null;
// }
