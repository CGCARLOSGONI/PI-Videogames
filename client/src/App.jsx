import style from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./components/Views/Landing/Landing";
import Home from "./components/Views/Home/Home";
import Detail from "./components/Views/Detail/Detail";
import NavBar from "./components/NavBar/NavBar";
import FormCreate from "./components/Views/FormCreate/FormCreate";

const App = () => {
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route exact path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/form" element={<FormCreate/>}/>
      </Routes>
    </div>
  );
};

export default App;
