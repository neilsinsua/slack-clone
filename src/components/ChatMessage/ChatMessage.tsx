import React from 'react'
import './ChatMessage.css'
import {messagesType} from '../../types'

const ChatMessage: React.FC<messagesType> =
    ({
         userImage,
         user,
         message,
         timestamp
     }) => {

        return (
            <div className="message">
                <img src={userImage} alt="avatar" className="message__image"/>
                <div className="message__content">
                    <div className="content__info">
                        <h4 className="info__name">{user}</h4>
                        <div className="info__time">{new Date(timestamp?.toDate() as Date).toUTCString()}</div>
                    </div>
                    <div className="content__body">
                        {message}
                    </div>
                </div>
            </div>
        );
    }

export default ChatMessage