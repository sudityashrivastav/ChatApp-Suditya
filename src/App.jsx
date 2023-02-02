import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {useState} from "react";
import ChatList from "./Components/ChatList.jsx";
import ChatScreen from "./Components/ChatScreen.jsx";
import Login from "./Components/Login.jsx";


export default function App() {
 const [accLogin, setAccLogin] = useState(false);
  
  return (
    <Router>
      <Routes>
       <Route path="/" element={accLogin == false ? <Login setAccLogin={setAccLogin} /> : <ChatList />}>      
       </Route> 
         <Route path="/chatscreen" element={<ChatScreen /> }>      
       </Route>        
      </Routes>
    </Router>
  )
}
