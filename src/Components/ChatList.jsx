// import { data } from "./dummyData.js"
import { useEffect, useState } from "react";
import { supabase } from "../supabase.js"


const ChatList = () => {
  const [data, setData] = useState([]);
  console.log(innerWidth);
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    async function fetchData() {
      // You can await here;
      const response = await supabase.from('login-signup').select("username");
      setData(response.data);
      // ...
    }
    fetchData();
  }, [1])
  return (
    <div style={{ backgroundColor: "#fafafa" }} className="h-full w-full md:w-1/2 flex items-center flex-col">

      <div className="fixed md:w-1/4 top-9 z-10 py-4 px-4 h-12 w-11/12 bg-white rounded-3xl flex justify-center items-center gap-x-3 drop-shadow-xl mb-2">
        <input value={inputValue} onChange={e => setInputValue(e.target.value)} type="text" placeholder="Seach message..." className="h-full bg-white w-11/12 md:w-full py-4 my-4 opacity-60 focus:outline-none" />
        <img className="h-6 w-6 opacity-60" src="./searchIcon.png" />
      </div>

      <div className="pt-24 w-11/¹2 w-11/12">
        {
          data.filter(person => person.username.includes(inputValue)).map((elem, key) => (
        <div className="flex items-center gap-3 my-1 px-3 bg-red-400 py-2 rounded" key={key}>
          <img src="./profile.jpg" className="w-12 h-12 rounded-full" />
          <div className="">
            <h3 className="font-bold">{elem.username}</h3>
            <p className="opacity-60">{elem.username}</p>
          </div>
        </div>
        ))
        }
      </div>
    </div>
  )
}

export default ChatList;