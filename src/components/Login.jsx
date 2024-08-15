import React from 'react'
import './Login.css'

export const Login = ({ isToggled, onToggle }) => {
  return (
    <div className={`form-container login ${isToggled ? 'toggled' : ''}`}>
    {/* <div className="form-container login"> */}
      {/* className={`toggle-container ${isToggled ? 'toggled' : ''}`} */}
      <h1 style={{ color: 'black' }}>Login</h1>

      <div className='entryarea'>
        <input type="text" required/>
        <div className='labelline'>Correo Electrónico</div>
      </div>

      <div className='entryarea'>
        <input type="text" required/>
        <div className='labelline'>Contraseña</div>
      </div>

      <label style={{ color: 'black'}}>Olvidaste tu constraseña recuperala <a>Aquí</a>.</label>

      <button className='ingresar'>Ingresar</button>
    </div>
  )
}
