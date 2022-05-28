import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Homepage, PageNotFound } from "./pages";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;
