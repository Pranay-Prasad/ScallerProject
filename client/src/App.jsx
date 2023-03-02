import {useState} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Admin from './components/Admin';
import Main from './components/Main';
function App() {
  const [Switch, setSwitch] = useState(true)
  return (
    <div className="App">

      {/* Navbar */}
      <nav className="navbar bg-dark center">
        <form className="container-fluid justify-content-start">
          <button className="btn btn-outline-success  me-2" type="button" onClick={()=>{setSwitch(Switch^1)}}>user</button>
          <button className="btn btn-outline-success " type="button" onClick={()=>{setSwitch(Switch^1)}}>Admin</button>
        </form>
      </nav>
      
      {/* Main body where we can swicth between user and Admin mode */}
      <div className="main-body center">
        <Main Switch={Switch}></Main>
        <Admin Switch={Switch}></Admin>
      </div>
    </div>
  );
}

export default App;
