import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm  from './Components/TextForm';
import Alert  from './Components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode,setMode]=useState('dark');
  const [alert,setAlert] = useState(null);
  var showAlert =(message,type)=>{     
        setAlert({
          msg :message,
          type: type
        })
       setTimeout(() => {
         setAlert(null);
       }, 1500);
  }
  const toggleMode = ()=>{
    if(mode==='white')
    {
        setMode('dark');
        document.body.style.backgroundColor='grey'
        showAlert("Dark Mode ","success");
        document.title="Textutils-Dark Mode"
    }
    else{
      setMode('white');
      document.body.style.backgroundColor='white'
      showAlert("Light Mode Has been Enabled ","success");
      document.title="Textutils-Light Mode"
    }
  }

  return (   
    <>
    <Router>
    <Navbar title="Geyyhbs" aboutus="ABOUT ME" mode={mode} togglemode={toggleMode}></Navbar>
    <Alert alert={alert}></Alert>
    <div className='container  my-3'>
    <Switch>
          <Route path="/about">
            <About />
          </Route>         
          <Route path="/">
            <TextForm heading="Enter The Text" showAlert={showAlert}></TextForm>
          </Route>
        </Switch>
      
      <About showAlert={showAlert}></About>
    </div>
    </Router>
    </>

  );
}

export default App;
