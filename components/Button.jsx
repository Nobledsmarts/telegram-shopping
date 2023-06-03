import React from 'react'
import './Button.css'

export const Button = ({type, title, disable, onClick}) => {
  return (
    <button 
        className={`btn ${
            type == 'add' && 'add' || 
            type == 'remove' && 'remove' || 
            type == 'checkout' && 'checkout'
        }`}
        disabled = {disable}
        onClick={onClick}
    >
        {title}
    </button>
  )
}
