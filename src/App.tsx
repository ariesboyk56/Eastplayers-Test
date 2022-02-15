import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Todo from "./pages/Todo";
import Country from "./pages/Country";

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="todo" element={<Todo />} />
          <Route path="country" element={<Country />} />
        </Routes>
      </BrowserRouter>
  );
};

export default App;
