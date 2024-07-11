import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className='text-2xl font-bold mb-5 text-black '>Welcome</h1>
      <p className='mb-5 text-black'>
        This is the demo site for Traversy Media's Next.js & Clerk tutorial. Go
        ahead and sign up or sign in!
      </p>
      <Link href={'/signin'} className="text-black mr-5">SignIn</Link>
      <Link href={'/signup'} className="text-black">SignUp</Link>

    </>
  );
}




// "use client";
// import Tasks from "./Components/Tasks/Tasks";
// import { useGlobalState } from "./context/globalProvider";
// import { useUser } from "@clerk/nextjs";

// export default function Home() {
//   const { tasks } = useGlobalState();
//   const { isSignedIn } = useUser();

//   if (isSignedIn) {
//     return <Tasks title="All Tasks" tasks={tasks} />;
//   }

//   return (
//     <>
//       <h1 className="text-2xl font-bold mb-5">Welcome</h1>
//       <p className="mb-5">
//         This is the demo site for Traversy Media's Next.js & Clerk tutorial. Go
//         ahead and sign up or sign in!
//       </p>
//       <Link href={'/signin'}>SignIn</Link>
//       <Link href={'/signup'}>SignUp</Link>
//     </>
//   );
// }



// .......................................................................................



// "use client";
// import Tasks from "./Components/Tasks/Tasks";
// import { useGlobalState } from "./context/globalProvider";

// export default function Home() {
//   const { tasks } = useGlobalState();

//   return <Tasks title="All Tasks" tasks={tasks} />;
// }


// ........................................................................................

