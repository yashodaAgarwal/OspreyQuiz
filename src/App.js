import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Homepage, PageNotFound,Rules  } from "./pages";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;
