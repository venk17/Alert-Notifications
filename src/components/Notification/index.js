// src/components/Notification/index.js
import React, {useState} from 'react'
import './index.css'
import {GrFormClose} from 'react-icons/gr'

const Notification = ({children, onClose, type}) => {
  const [isClosing, setIsClosing] = useState(false)

  const handleClose = () => {
    setIsClosing(true)
    setTimeout(() => {
      onClose()
    }, 300) // Match animation duration
  }

  return (
    <div
      className={`notification ${isClosing ? 'closing' : ''}`}
      data-type={type}
    >
      <div className="notification-content">{children}</div>
      <button
        className="close-button"
        onClick={handleClose}
        aria-label="Close notification"
      >
        <GrFormClose />
      </button>
    </div>
  )
}

export default Notification
