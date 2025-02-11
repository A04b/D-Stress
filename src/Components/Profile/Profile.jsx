import React from "react";
import Login from "../Login/Login";
import { Dashboard } from ".";

import { useContext } from "react";
import { login_context } from "../Context/login/login_context";

function Profile() {
  const { setUser } = useContext(login_context);
  console.log(setUser);

  return <div className="h-[70vh]">{ true ? <Dashboard /> : <Login />}</div>;
}

export default Profile;
