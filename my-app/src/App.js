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
import './css/adapt.css'
import Jewelery from "./pages/Jewelery";
import MClothing from "./pages/MensClothing";

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
          
        </div>
        {user ? <>
          <div className="nav-links">
            <Link className="nav-links_link" to="/electronics">Electronics</Link>
            <Link className="nav-links_link" to='/mens-clothing'>Mens clothing</Link>
            <Link className="nav-links_link" to='/jewelery'>Jewelery</Link>
          </div>
          </> : <></>}
        <Routes>
          <Route path="/" element={<Home isAuth={isAuth}/>}/>
          <Route path="/jewelery" element={<Jewelery isAuth={isAuth}/>}/>
          <Route path="/electronics" element={<Main isAuth={isAuth}/>}/>
          <Route path="/mens-clothing" element={<MClothing isAuth={isAuth}/>}/>
          <Route path="/login" element={<Signin setIsAuth={setIsAuth}/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;