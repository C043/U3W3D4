import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import SpaceNav from "./components/SpaceNav";

function App() {
  return (
    <BrowserRouter>
      <SpaceNav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:id" />
        <Route path="*" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
