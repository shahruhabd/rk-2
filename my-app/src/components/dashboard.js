import React from "react";
import { useUserContext } from "../context/userContext";
import '../css/dashboard.css'

const Dashboard = () => {
  const { user, logoutUser } = useUserContext();
  return (
    <div className="dashboard_container">
      <h1 className="dashboard_container_label">Профиль </h1>
      <h2 className="dashboard_container_initial">Имя : {user.displayName}</h2>
      <h2 className="dashboard_container_initial">Почта : {user.email}</h2>
      <button className="dashboard_container_logout" onClick={logoutUser}>Log out</button>
    </div>
  );
};

export default Dashboard;