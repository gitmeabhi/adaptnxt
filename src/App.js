import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "./components/DashBoard"
import './App.css';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/" element = { <DashBoard />}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
