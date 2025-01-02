import { createContext, useContext, useState, PropsWithChildren } from 'react';

type AuthContextType = {
  name: string | null; // Admin name or null if not signed in
  setAdmin: (name: string | null) => void; // Function to update admin state
};

export const AuthContext = createContext<AuthContextType | null>(null);

type AuthProviderProps = PropsWithChildren & {
  isSignedIn?: boolean;
};

export default function AdminAuthProvider({
  children,
  isSignedIn = false,
}: AuthProviderProps) {
  const [name, setName] = useState<string | null>(isSignedIn ? 'admin' : null);

  return (

    <AuthContext.Provider value={{name, setAdmin: setName}}>
    {children}
  </AuthContext.Provider>
    )
}


export const adminAuth = ()=>{
  const context = useContext(AuthContext);
  
  if(!context){
    throw new Error("Error in Context")
  }

  return context ;
}