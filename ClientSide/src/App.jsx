import "./App.css";
import { Route, Routes } from "react-router";
import AddUser from "./components/AddUser/AddUser";
import Home from "./components/Home/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="user/add" element={<AddUser />}></Route>
      </Routes>
    </div>
  );
}

export default App;
