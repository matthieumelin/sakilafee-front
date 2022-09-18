import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../redux/reducers";
import { Router } from "../router/Router";

import styled from "styled-components";

import Sidebar from "../components/account/Sidebar.component";

export default function Account() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    if (!token) navigate(Router.Login);
  });

  return (
    <div>
      <Sidebar />
    </div>
  );
}

