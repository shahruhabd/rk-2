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

function App() {
  const { user, loading, error } = useUserContext();

  return (
    <div className="App">
      {error && <p className="error">{error}</p>}
      {loading ? <h2>Loading...</h2> : <> {user ? <Dashboard /> : <Auth />} </>}
      <Routes>
        <Route path="/main" element={<Main/>}/>
      </Routes>
    </div>
  );
}

export default App;