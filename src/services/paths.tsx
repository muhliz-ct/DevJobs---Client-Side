import { createBrowserRouter } from "react-router-dom";
import Home from "@/components/Home";
import SignIn from "@/components/global/SignIn";
import SignUp from "@/components/global/SignUp";
import OtpPage from "@/components/global/OtpPage"
import SignInCompany from "@/components/Company/SignInCompany";
import SignUpCompany from "@/components/Company/SignUpCompany";
import OTP from "@/components/Company/OtpPage";
import LandingPage from "@/components/Company/Landing";
import NotFoundPage from "@/components/global/NotFound";
import AdminLogin from "@/components/Admin/AdminLogin";
import Dashboard from "@/components/Admin/Dashboard";
import ProtectedRoute from "@/Routes/ProtectedRoute";



export const router = createBrowserRouter([
    {
      path: '/',
      element: < Home />,
      errorElement: <NotFoundPage />
    },
    {
      path: '/signin',
      element: <SignIn/>,
      errorElement: <NotFoundPage />
    },
    {
      path: '/signup',
      element: <SignUp/>,
      errorElement: <NotFoundPage />
    },
    {
      path: '/otppage',
      element: <OtpPage/>,
      errorElement: <NotFoundPage />
    },
    {
      path: '/companylogin',
      element: <SignInCompany/>,
      errorElement: <NotFoundPage />
    },
    {
      path: '/companysignup',
      element: <SignUpCompany/>,
      errorElement: <NotFoundPage />
    },
    {
      path: '/companyotppage',
      element: <OTP/>,
      errorElement: <NotFoundPage />
    },
    {
      path: '/landing',
      element: <LandingPage/>,
      errorElement: <NotFoundPage />
    },

    {
      path: '/admin',
      element: <AdminLogin />,
      errorElement: <NotFoundPage />
    }
  ,

  {
    path: '/admin-dashboard',
    element: 
      <ProtectedRoute>
        <Dashboard children={undefined} />
      </ProtectedRoute>,
    errorElement: <NotFoundPage />
  }
  ]);