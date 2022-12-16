import React, { useState } from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Header from "./components/header";
import Home from "./pages/Home";
import './App.css'
import './css/signin.css'
import Signin from "./components/signin";
import { useUserContext } from "./context/userContext";
import Auth from "./components/auth";
import Dashboard from "./components/dashboard";
import Main from "./components/main";

import { signOut } from "firebase/auth";
import { auth } from "./firebase/index";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  const { user, logoutUser, loading, error } = useUserContext();

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };

  const [index, setIndex] = useState(false);
  const toggleIndex = () => {
    setIndex((prevState) => !prevState);
  };

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="signin_container">
          {error && <p className="error">{error}</p>}
          {loading ? <h2>Loading...</h2> : <> {user ? <Dashboard /> : <Auth />} </>}
          {user ? <Main/> : <></>}
        </div>
        <Routes>
          <Route path="/" element={<Home isAuth={isAuth}/>}/>
          <Route path="/login" element={<Signin setIsAuth={setIsAuth}/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;