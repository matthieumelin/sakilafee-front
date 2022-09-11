import React, {useEffect} from "react";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Router } from "../router/Router";

export default function Account() {
  const navigate = useDispatch();
  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    if (!token) navigate(Router.Login);
  });
  
  return <div>Account</div>;
}
