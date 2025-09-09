import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function Security ({children}){
    const authStatus = useSelector ((state)=>state.auth.status)
if (!authStatus) {
    return <Navigate to = "/login" replace/>

}
return children
}