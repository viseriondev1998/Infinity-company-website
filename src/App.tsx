import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Homepage } from "./pages";

export default function App() {
     return (
          <BrowserRouter>
               <Routes>
                    <Route element={<Homepage />} path="/" />
               </Routes>
          </BrowserRouter>
     );
}
