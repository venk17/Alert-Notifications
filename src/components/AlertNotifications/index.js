// src/components/AlertNotifications/index.js
import React from 'react'
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import Notification from '../Notification'
import './index.css'

const notificationsData = [
  {
    id: 1,
    type: 'success',
    heading: 'Success Notification',
    description: 'This is a success notification.',
  },
  {
    id: 2,
    type: 'error',
    heading: 'Error Notification',
    description: 'This is an error notification.',
  },
  {
    id: 3,
    type: 'warning',
    heading: 'Warning Notification',
    description: 'This is a warning notification.',
  },
  {
    id: 4,
    type: 'info',
    heading: 'Info Notification',
    description: 'This is an info notification.',
  },
]

const AlertNotifications = () => {
  const renderIcon = type => {
    switch (type) {
      case 'success':
        return <AiFillCheckCircle className="icon success" />
      case 'error':
        return <RiErrorWarningFill className="icon error" />
      case 'warning':
        return <MdWarning className="icon warning" />
      case 'info':
        return <MdInfo className="icon info" />
      default:
        return null
    }
  }

  const handleClose = id => {
    console.log(`Close notification with id: ${id}`)
    // Implement close functionality here
  }

  return (
    <div className="alert-notifications">
      <h1>Alert Notifications</h1>
      <p>You can access all the files in the folder</p>
      <p>Sorry, you are not authorized to have access to delete the file</p>
      <p>Viewers of this file can see comments and suggestions</p>
      <p>Anyone on the internet can view these files</p>

      {notificationsData.map(({id, type, heading, description}) => (
        <Notification key={id} onClose={() => handleClose(id)}>
          {renderIcon(type)}
          <div className="notification-text">
            <h4>{heading}</h4>
            <p>{description}</p>
          </div>
        </Notification>
      ))}
    </div>
  )
}

export default AlertNotifications
