import { data } from "../dummyData.jsx";
import { useState } from "react";


const ChatList = () => {
  console.log(data);
  const [inputValue, setInputValue] = useState("");



  return (
    <div style={{ backgroundColor: "#fafafa" }} className="h-screen w-screen flex items-center flex-col sm:items-start">
      <div className="fixed max-w-sm top-0 z-10 py-4 h-12 w-11/12 bg-white rounded-3xl flex justify-center items-center gap-x-3 drop-shadow-xl mb-2">


        <input value={inputValue} onChange={e => setInputValue(e.target.value)} type="text" placeholder="Seach message..." className="h-full w-3/4 py-4 bg-transparent my-4 opacity-60 focus:outline-none" />
        <img className="h-6 w-6 opacity-60" src="./searchIcon.png" />
      </div>

      <div className="pt-14 w-11/12 max-w-sm">
        {
          data.filter(person => person.name.includes(inputValue)).map((elem, key) => (
            <div className="flex items-center gap-3 my-1 px-3 bg-red-400 py-2 rounded" key={key}>
              <img src="./profile.jpg" className="w-12 h-12 rounded-full" />
              <div className="">
                <h3 className="font-bold">{elem.name}</h3>
                <p className="opacity-60">{elem.message}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ChatList;