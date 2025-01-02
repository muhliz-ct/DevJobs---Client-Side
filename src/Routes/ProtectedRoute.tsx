import { PropsWithChildren, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { adminAuth } from "@/auth/AuthProvider";

type ProtectedRouteProps = PropsWithChildren;

export default function ProtectedRoute({children}: ProtectedRouteProps){
    const admin = adminAuth();

    const navigate = useNavigate();

    console.log(admin);
    

    useEffect(()=>{
        if(!admin.name){
            navigate('/admin', {replace : true})
        }
    },[navigate, admin])

    return children
}