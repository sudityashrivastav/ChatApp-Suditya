import ChatList from "./ChatList.jsx";
import ChatScreen from "./ChatScreen.jsx";


const Home = ()=>{
  return (
    // <><h1 className="w-full fixed top-0 text-center font-bold text-2xl">Welcome to iChat</h1>
    <div className="h-screen w-screen bg-red-200 flex">
    
    <ChatList />
    {
      // innerWidth > 768 ? <ChatScreen/> : null/
      <ChatScreen/>
    }</div>
  )
    
    
}
export  default Home;