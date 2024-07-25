import React, { useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import Login from "./components/Login";
import SignUp from "./components/Registermy";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./components/Profile";
import { useState } from "react";
import { auth } from "./components/Firebase";


import { Profiles } from "./components/Profiles";
function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  });
  return (
    <BrowserRouter>
      <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route
                path="/"
                element={user ? <Navigate to="/Profile" /> : <Login />}
              />
              <Route path="/login" element={<Login />} />
              <Route path="/registermy" element={<SignUp />} />
              <Route path="/profiles" element={<Profiles />} />
              
            </Routes>
            <ToastContainer />
          </div>
        </div>
      </div>
      
      </BrowserRouter>
  );
}

export default App;