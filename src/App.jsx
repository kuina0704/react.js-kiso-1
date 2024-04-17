import { useEffect, useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { Header } from './Components/Header';
import { Home } from './Home';
import { Thread } from './Components/thread/index';
import { ThreadNew } from './Components/thread/new';


function App() {
  const [threads, setThreads] = useState([]);
  
  useEffect(() => {
    fetch("https://railway.bulletinboard.techtrain.dev/threads")
    .then(res => res.json())
    .then(data => {setThreads(data)})
    .catch(() => alert("error"))  
    }, []
  );

  const clickButton = useNavigate();

  return (
    <>
      <Header clickButton={() => {clickButton("Components/thread/new")}} />

      <Link to="/">HOME</Link>
      <br />
      <Link to="/Components/thread">THREAD</Link>
      <br />
      <Link to="/Components/thread/new">CREATETHREAD</Link>

      <Routes>
        <Route path="/" element={<Home threads={threads} />} /> 
        <Route path="/Components/thread" element={<Thread />} /> 
        <Route path="/Components/thread/new" element={<ThreadNew />} /> 
      </Routes>

    </>
  );
}

export default App;