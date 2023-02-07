
import { useState } from "react";
import { supabase } from "../supabase.js";
import toast, { Toaster } from "react-hot-toast";
import "../Style/login.css";
import Loader from "./Loader.jsx"


export default function Login({ setAccLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);



  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true)

    if (username.length < 1) {
      
    setLoading(false)
      return toast.error("Please enter username")
    }
    else if (password.length < 1) {
      
    setLoading(false)
      return toast.error("Please enter password")
    }
    
    const { data } = await supabase.from('login-signup').select("username").eq("username", username);
    console.log(data)



    if (data.length > 0) {
      
    setLoading(false)
      return toast.error("Username not available")
    }
    else if (data.length == 0 && password.length > 0 && username.length > 0) {
      const { status } = await supabase.from('login-signup').insert({ username: username, password: password });
      if (status == 201) {
        toast.success("Account created succesfully")
      }


    }
    setLoading(false)
  }
  const handleLogin = async () => {

  }


  return (<>
    <Toaster />
    <div className="containerr">
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />
        <div className="signup">
          <form>
            <label htmlFor="chk" aria-hidden="true">Sign up</label>
            <input value={username} onChange={e => setUsername(e.target.value)} type="text" name="txt" placeholder="User name" required />
            <input value={password} onChange={e => setPassword(e.target.value)} type="password" name="pswd" placeholder="Password" required />
            <button className='flex justify-center items-center' onClick={handleSignup}>
              {loading == true ? <Loader /> : "Sign up"}
            </button>
          </form>
        </div>
        <div className="login">
          <form>
            <label htmlFor="chk" aria-hidden="true">Login</label>
            <input type="text" placeholder="Username" required />
            <input type="password" name="pswd" placeholder="Password" required />
            <button>Login</button>
          </form>
        </div>
      </div></div></>
  );
}