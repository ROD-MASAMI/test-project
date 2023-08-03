import { Routes, Route } from "react-router-dom";
import React from "react";
import Login from "./Screens/Login";
import Home from "./Screens/Home";

const App = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Login />} />
      <Route path={"/Home"} element={<Home />} />
    </Routes>
  );
};

export default App;
