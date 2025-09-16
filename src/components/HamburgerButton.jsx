import React from 'react'
import { Menu, X } from 'lucide-react'
import '../styles/HamburgerButton.css'

const HamburgerButton = ({ onClick, isOpen }) => {
  return (
    <button className="hamburger-button" onClick={onClick}>
      {isOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
  )
}

export default HamburgerButton
