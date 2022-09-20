import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setUserData } from "../redux/reducers";
import { Router } from "../router/Router";

export default function Logout() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.data);

  useEffect(() => {
    dispatch(setUserData());

    localStorage.removeItem("userData");
    sessionStorage.removeItem("userData");
  }, [userData, dispatch]);

  if (!userData) {
    return <Navigate to={Router.Home} />;
  }
}
