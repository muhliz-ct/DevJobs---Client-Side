

import { RouterProvider } from "react-router-dom"
import {router} from "@/services/paths"
import { AuthProvider } from "firebase/auth"
import AdminAuthProvider from "./auth/AuthProvider"







const App = () => {
  return (
    <AdminAuthProvider>
      <RouterProvider router={router}/>
    </AdminAuthProvider>
  )
}

export default App