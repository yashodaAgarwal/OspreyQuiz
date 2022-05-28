import {Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components";
import { Homepage, PageNotFound } from "./pages";

const  App = () => {
  return (
    <div>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/*" element={<PageNotFound/>}/>
    </Routes>
    </div>
  );
}

export default App;