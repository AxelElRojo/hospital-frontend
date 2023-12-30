import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import './App.css';
import {useState} from 'react';
function App(){
  const [username, setUsername] = useState("1");
  const onLogout = () => {
    setUsername("");
  }
  return (
    <div className="App vh-100 d-flex bg-dark">
      {username === "" ?
        <Login onLogin={setUsername}/> : <Dashboard username={username} onLogout={onLogout}/>
      }
    </div>
  );
}
export default App;