import Auth from "./components/auth";
import Dashboard from "./components/dashboard";
import { useUserContext } from "./context/userContext";
import React from "react";
import Main from "./components/main";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom"
import Signin from "./components/signin";
import Signup from "./components/signup";

function App() {
  const { user, loading, error } = useUserContext();

  return (
    <div className="App">
      {error && <p className="error">{error}</p>}
      {loading ? <h2>Loading...</h2> : <> {user ? <Dashboard /> : <Auth />} </>}
      {/* <Routes>
        <Route path="/" element={<Signin/>}/>
      </Routes> */}
    </div>
  );
}

export default App;