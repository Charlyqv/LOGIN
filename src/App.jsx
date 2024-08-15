import { useState } from 'react';
import './App.css'
import { Login } from './components/Login'
import { Register } from './components/Register'
import { ToggleContainer } from './components/ToggleContainer'

function App() {

  // const [isActive, setIsActive] = useState(false);

  // const handleRegisterClick = () => {
  //   setIsActive(true);
  // };

  // const handleLoginClick = () => {
  //   setIsActive(false);
  // };

  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className='container'>
      <Login isToggled={isToggled} onToggle={handleToggle}/>
      <Register isToggled={isToggled} onToggle={handleToggle}/>
      <ToggleContainer isToggled={isToggled} onToggle={handleToggle} />
      {/* <ToggleContainer
        onRegisterClick={handleRegisterClick} 
        onLoginClick={handleLoginClick} 
      /> */}
    </div>
  )
}

export default App
