"use client";
import { SignUp } from "@clerk/nextjs";
import React from "react";

function SignUpPage() {
  return (
    <div className="flex items-center justify-center h-full">
      <SignUp />
    </div>
  );
}

export default SignUpPage;



// 'use client';
// import * as React from 'react';
// import { useSignUp } from '@clerk/nextjs';
// import { useRouter } from 'next/navigation';
// import Link from 'next/link';
// import * as Clerk from '@clerk/elements/common'
// import * as SignUp from '@clerk/elements/sign-up'
// import { zxcvbn, zxcvbnOptions } from '@zxcvbn-ts/core';
// import * as zxcvbnCommonPackage from '@zxcvbn-ts/language-common';
// import * as zxcvbnEnPackage from '@zxcvbn-ts/language-en';

// // Set up zxcvbn options
// const options = {
//   translations: zxcvbnEnPackage.translations,
//   graphs: zxcvbnCommonPackage.adjacencyGraphs,
//   dictionary: {
//     ...zxcvbnCommonPackage.dictionary,
//     ...zxcvbnEnPackage.dictionary,
//   },
// };
// zxcvbnOptions.setOptions(options);

// export default function SignUpPage() {
//   const { isLoaded, signUp, setActive } = useSignUp();
//   const [emailAddress, setEmailAddress] = React.useState('');
//   const [password, setPassword] = React.useState('');
//   const [pendingVerification, setPendingVerification] = React.useState(false);
//   const [code, setCode] = React.useState('');
//   const [passwordStrength, setPasswordStrength] = React.useState('');
//   const router = useRouter();

//   const handleSubmit = async (e: { preventDefault: () => void; }) => {
//     e.preventDefault();
//     if (!isLoaded) {
//       return;
//     }

//     try {
//       await signUp.create({
//         emailAddress,
//         password,
//       });

//       // Send email verification code
//       await signUp.prepareEmailAddressVerification({ strategy: 'email_code' });

//       // Change UI to show verification step
//       setPendingVerification(true);
//     } catch (err) {
//       console.error(JSON.stringify(err, null, 2));
//     }
//   };

//   const handleVerify = async (e: { preventDefault: () => void; }) => {
//     e.preventDefault();
//     if (!isLoaded) {
//       return;
//     }

//     try {
//       const completeSignUp = await signUp.attemptEmailAddressVerification({
//         code,
//       });
//       if (completeSignUp.status !== 'complete') {
//         console.log(JSON.stringify(completeSignUp, null, 2));
//       }

//       if (completeSignUp.status === 'complete') {
//         await setActive({ session: completeSignUp.createdSessionId });
//         router.push('/');
//       }
//     } catch (err) {
//       console.error(JSON.stringify(err, null, 2));
//     }
//   };

//   const checkPasswordStrength = (password: string) => {
//     const result = zxcvbn(password);
//     const score = result.score;
//     switch (score) {
//       case 0:
//         return 'Very weak';
//       case 1:
//         return 'Weak';
//       case 2:
//         return 'Fair';
//       case 3:
//         return 'Strong';
//       case 4:
//         return 'Very strong';
//       default:
//         return 'Very weak';
//     }
//   };

//   const handlePasswordChange = (e: { target: { value: any; }; }) => {
//     const newPassword = e.target.value;
//     setPassword(newPassword);
//     setPasswordStrength(checkPasswordStrength(newPassword));
//   };

//   return (
//     <>
//       <style jsx>{`
//         /* Global Styles */
//         body, html {
//           height: 100%;
//           margin: 0;
//           font-family: Arial, sans-serif;
//           background-color: #f0f4f8;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }

//         .container {
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//           align-items: center;
//           height: 100%;
//           width: 100%;
//         }

//         form {
//           background-color: white;
//           padding: 2rem;
//           border-radius: 8px;
//           box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
//           max-width: 400px;
//           width: 100%;
//           box-sizing: border-box;
//         }

//         form div {
//           margin-bottom: 1.5rem;
//         }

//         label {
//           display: block;
//           font-size: 0.875rem;
//           margin-bottom: 0.5rem;
//           color: #333;
//           font-weight: bold;
//         }

//         input[type="email"], input[type="password"] {
//           width: 100%;
//           padding: 0.75rem;
//           font-size: 0.875rem;
//           border-radius: 4px;
//           border: 1px solid #ccc;
//           box-sizing: border-box;
//           transition: border-color 0.3s;
//         }

//         input[type="email"]:focus, input[type="password"]:focus {
//           border-color: #007bff;
//           outline: none;
//         }

//         button {
//           display: block;
//           width: 100%;
//           padding: 0.75rem;
//           font-size: 0.875rem;
//           color: white;
//           background-color: #007bff;
//           border: none;
//           border-radius: 4px;
//           cursor: pointer;
//           transition: background-color 0.3s;
//         }

//         button:hover {
//           background-color: #0056b3;
//         }

//         .password-strength {
//           font-size: 0.875rem;
//           color: #555;
//           margin-top: 0.5rem;
//         }

//         .password-strength.Very-weak {
//           color: #ff4d4d;
//         }

//         .password-strength.Weak {
//           color: #ff751a;
//         }

//         .password-strength.Fair {
//           color: #ffb31a;
//         }

//         .password-strength.Strong {
//           color: #66b366;
//         }

//         .password-strength.Very-strong {
//           color: #33cc33;
//         }

//         .signin-link {
//           margin-top: 1rem;
//           font-size: 0.875rem;
//           text-align: center;
//         }

//         .signin-link a {
//           color: #007bff;
//           text-decoration: none;
//         }

//         .signin-link a:hover {
//           text-decoration: underline;
//         }
//       `}</style>

//       <div className="container">
//         <form onSubmit={handleSubmit}>
//           <div>
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               value={emailAddress}
//               onChange={(e) => setEmailAddress(e.target.value)}
//             />
//           </div>
//           <div>
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={handlePasswordChange}
//             />
//             <div className={`password-strength ${passwordStrength.replace(" ", "-")}`}>
//               Password strength: {passwordStrength}
//             </div>
//           </div>
//           <button type="submit">Sign Up</button>
//         </form>
//         <div className="signin-link">
//           Already have an account? <Link href="/signin">Sign in here!</Link>
//         </div>
//       </div>
//     </>
//   );
// }
