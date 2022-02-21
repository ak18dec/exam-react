import { Login } from './pages/Login'
import { Signup } from './pages/Signup'
import './App.css'
import { initializeIcons } from '@fluentui/react'

import { useState } from 'react'

initializeIcons();



export const App: React.FC = () => {

  const [newUser, setNewUser] = useState(false); 

  const redirectToSignUp = () => { 
    setNewUser(true);
  };

  const redirectToLogin = () => {
    setNewUser(false);
  }

  return (
    <div className="app">

      <div className="navbar">
        
      </div>

      {/* <div className="side-panel">
        <img src={loginLogo} alt="" />
      </div> */}

      
      
      <div className="panel">
         { !newUser &&  (<Login newUserAction={redirectToSignUp} />) }
         { newUser &&  (<Signup signInAction={redirectToLogin} />) }
      </div>
    </div>
  );
}
