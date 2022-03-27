import React, { Suspense, lazy } from "react";

import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Login = lazy(() => import("./Pages/Login/Login"));
const Signup = lazy(() => import("./Pages/Signup/Signup"));

function App() {
  return (
    <div className="">
      <Router>
        <Suspense
          fallback={
            <div className="h-screen flex justify-center items-center">
              <img
                src={require("./Assets/images/icon/spinner.gif")}
                className="h-40"
              />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="GetStarted/Signup" element={<Signup />} />
            <Route path="/Signup" element={<Signup />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
