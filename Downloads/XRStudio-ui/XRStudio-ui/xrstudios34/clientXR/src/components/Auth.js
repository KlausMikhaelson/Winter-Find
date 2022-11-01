// import React, { useEffect, useState } from "react";

// export const AuthContext = React.createContext();

// export const AuthProvider = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState(true);
//   const [pending, setPending] = useState(true);

//   useEffect(() => {
//     auth.onAuthStateChanged((user) => {
//       setCurrentUser(user);
//       setPending(false);
//     });
//   }, []);

//   if (pending) {
//     return <>Loading...</>;
//   }

//   return (
//     <AuthContext.Provider
//       value={{
//         currentUser,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };
