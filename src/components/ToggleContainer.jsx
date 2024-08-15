import React from 'react'
import './ToggleContainer.css'

export const ToggleContainer = ({ isToggled, onToggle }) => {
  return (
    <div 
      className={`toggle-container ${isToggled ? 'toggled' : ''}`}
    >
      <h1>{isToggled ? 'Bienvenido, por favor regístrate!' : 'Hola, estás de vuelta!'}</h1>

      <label>{isToggled ? 'Ingresa tu información personal.' : 'Ingrese sus credenciales para utilizar todas las funciones del sitio.'}</label>

      <button onClick={onToggle}>{isToggled ? 'Login' : 'Registro '}</button>  
    </div>
  )
}
