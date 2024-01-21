import React from 'react'
import '../styles/Message.css'

function Message({ message, timestamp, user, userImage}) {
  return (
    <div className="message">
      <img src={userImage} alt="" />
      <div className="message_info">
        <h4>
            {user}{" "}
            <spin className="message_timestamp">
                {new Date(timestamp?.toDate()).toUTCString()}
            </spin>
        </h4>
        <p>{message}</p>
      </div>
    </div>
  )
}

export default Message
