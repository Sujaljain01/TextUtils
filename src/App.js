import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import './App.css';
import About from './components/About';
import React,{ useState } from 'react';
import Alert from './components/Alert';


function App() {
  const [mode,setMode]= useState('light');
  const [alert,setAlert] =useState(null);

  const showAlert= (message,type) =>  {
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1200);
  }

  const toggleMode = ()=>{
    if(mode=== 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#09091c';
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode('light');
         document.body.style.backgroundColor = 'white';
        showAlert("Light mode has been enabled ","success");
        } 
  }
  return (
    <>
    <Navbar title="Textutils" about="About" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/> 
 <div className="container my-3 fw-lighter ">
 <TextForm showAlert={showAlert}  heading= "Enter the text to analyze" mode={mode} />
 </div>
    </>
  );
}

export default App;
