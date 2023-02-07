import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import ChatScreen from "./Components/ChatScreen.jsx";
import Login from "./Components/Login.jsx";
import Home from "./Components/Home.jsx";
import Bg from "./Components/Bg.jsx";

export default function App() {
  const [accLogin, setAccLogin] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={accLogin == false ? <Login /> : <Home />} />
        <Route path="/bg" element={<Bg />} />
        <Route path="/chatscreen" element={accLogin == false && innerWidth < 768 ? <ChatScreen /> : null} />
      </Routes>
    </Router>
  )
}
