import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Homepage, Loginpage, PageNotFound,Profile,Quiz,Result,Rules, Signup  } from "./pages";

const App = () => {
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/rules" element={<Rules/>} />
        <Route path="/login" element={<Loginpage/>}/> 
        <Route path="/signup" element={<Signup/>}/> 
        <Route path="/user" element={<Profile/>}/> 
        <Route path="/quiz" element={<Quiz/>}/> 
        <Route path="/result" element={<Result/>}/> 
        <Route path="/*" element={<PageNotFound />} />
        
      </Routes>
    </div>
  );
};

export default App;
