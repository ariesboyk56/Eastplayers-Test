import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Todo from "./pages/Todo";
import Country from "./pages/Country";
import TodoContextProvider from "./contexts/TodoContext";

const App = () => {
  return (
    <TodoContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="todo" element={<Todo />} />
          <Route path="country" element={<Country />} />
        </Routes>
      </BrowserRouter>
    </TodoContextProvider>
  );
};

export default App;
