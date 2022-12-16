import React from "react";
import { useUserContext } from "../context/userContext";
import Main from "./main";

const Dashboard = () => {
  const { user, logoutUser } = useUserContext();
  return (
    <div>
      <h1>Профиль </h1>
      <h2>Имя : {user.displayName}</h2>
      <h2>Почта : {user.email}</h2>
      <button onClick={logoutUser}>Log out</button>
      <Main></Main>
    </div>
  );
};

export default Dashboard;