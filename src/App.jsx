import { useEffect, useState } from 'react';
import { Header } from './Components/Header';

function App() {
  const [threads, setThreads] = useState([]);
  
  useEffect(() => {
    fetch("https://railway.bulletinboard.techtrain.dev/threads")
    .then(res => res.json())
    .then(data => {setThreads(data)})
    .catch(() => alert("error"))  
    }, []
  );

  const clickButton = () => {
    console.log("clickButton");
  }

  return (
    <>
      <Header clickButton={clickButton} />
      <main>
        <ul>
          {threads.map((thread) => (
            <li key={thread.id}>{thread.title}</li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default App;