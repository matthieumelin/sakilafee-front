import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setToken } from "../redux/reducers";
import { Router } from "../router/Router";

export default function Logout() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    dispatch(setToken());

    localStorage.clear();
    sessionStorage.clear();
  }, [token]);

  if (!token) {
    return <Navigate to={Router.Home} />
  }
}
