import React, { Suspense, lazy, useState } from "react";

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Login = lazy(() => import("./Pages/Login/Login"));
const Signup = lazy(() => import("./Pages/Signup/Signup"));
function App() {
  const [provideEmail, setProvideEmail] = useState(false);
  return (
    <>
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
            <Route
              path="/"
              element={<Login setProvideEmail={setProvideEmail} />}
            />
            <Route
              path="GetStarted/Signup"
              element={<Signup provideEmail={provideEmail} />}
            />
            <Route path="/Signup" element={<Signup />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
