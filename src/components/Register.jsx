import React from 'react'
import './Register.css'

export const Register = ({ isToggled, onToggle }) => {
  return (
    <div className={`form-container register ${isToggled ? '' : 'toggled'}`}>
    {/* <div className="form-container register"> */}
    {/* <div className="form-container register"> */}
      <h1 style={{ color: 'black' }}>Registro</h1>

      <div className='entryarea'>
        <input type="text" required/>
        <div className='labelline'>Nombre</div>
      </div>

      <div className='entryarea'>
        <input type="text" required/>
        <div className='labelline'>Correo</div>
      </div>

      <div className='entryarea'>
        <input type="text" required/>
        <div className='labelline'>Contraseña</div>
      </div>

      {/* <label style={{ color: 'black'}}>Olvidaste tu constraseña recuperala Aquí</label> */}

      <button className='registrar'>Registrar</button>
    </div>
  )
}
