import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import './App.css';
import {useState} from 'react';
import PublicConsultation from './Components/PublicConsultation';
function App(){
  const [username, setUsername] = useState("");
  const [isPatient, setIsPatient] = useState(false);
  const onLogout = () => {
    setUsername("");
  }
  return (
    <div className="App vh-100 d-flex bg-dark login-bg">
      {username === "" ?
        (!isPatient ? <Login onLogin={setUsername} setIsPatient={setIsPatient}/> : <PublicConsultation/>)
        : <Dashboard username={username} onLogout={onLogout}/>
      }
    </div>
  );
}
export default App;