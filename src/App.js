import Hero from "./components/hero/Hero";
import Nav from "./components/Nav/Nav";
import Message from "./components/message/Message";
import Profile from "./components/profile/Proifle";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Explore from "./components/explore/Explore";
import Home from "./pages/home/Home";
import Search from "./components/Search/Search";
import Create from "./components/create/Create";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/explore" element={<Explore/>}/>
        <Route path="/messages" element={<Message/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="/profile" element={<Profile/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
