import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Signin, Signup } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Signin />} />
        <Route path="/" element={<Signin />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
