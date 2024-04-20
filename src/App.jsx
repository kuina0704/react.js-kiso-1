import { useEffect, useState } from 'react';
import { Routes, Route, NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { Header } from './Components/Header';
import { Home } from './Home';
import { Thread } from './Components/threads/index';
import { ThreadNew } from './Components/threads/new';
import { Post } from './Components/threads/post';
import { NoMatch } from './nomatch';


function App() {
  const [threads, setThreads] = useState([]);
  
  useEffect(() => {
    fetch("https://railway.bulletinboard.techtrain.dev/threads")
    .then(res => res.json())
    .then(data => {setThreads(data)})
    .catch(() => {alert("error")})  
    }, []
  );

  const clickButton = useNavigate();

  return (
    <>
      <Header clickButton={() => {clickButton("Components/threads/new")}} />

      <div className='bg-slate-300'>
        <NavLink
          style={({ isActive }) => (isActive ? { color: 'blue' } : undefined)}
          to="/"
        >
          Home
        </NavLink>
        <br />
        <NavLink
          style={({ isActive }) => (isActive ? { color: 'blue' } : undefined)}
          to="/Components/threads"
        >
          Thread
        </NavLink>
        <br />
        <NavLink
          style={({ isActive }) => (isActive ? { color: 'blue' } : undefined)}
          to="/Components/threads/post"
        >
          post
        </NavLink>
        <br />
        <NavLink
          style={({ isActive }) => (isActive ? { color: 'blue' } : undefined)}
          to="/Components/threads/new"
        >
          ThreadNew
        </NavLink>
      </div>
      

      <Routes>
        <Route path="/" element={<Home threads={threads} />} /> 
        <Route path="/Components/threads" element={<Thread />} >
          <Route path=':postId' element={<Post/>} />
        </Route>
        <Route path="/Components/threads/new" element={<ThreadNew />} />
        <Route path="*" element={<NoMatch />}></Route>
      </Routes>

    </>
  );
}

export default App;