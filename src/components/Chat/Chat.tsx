import React, {useEffect, useState} from 'react'
import './Chat.css';
import {useParams} from 'react-router';
import {InfoOutlined, StarBorderOutlined} from "@material-ui/icons";
import db from "../../firebase";
import ChatMessage from "../ChatMessage/ChatMessage";
import {messagesType} from '../../types'

interface ChatProps {
}

interface roomType {
    name: string,
}

const Chat: React.FC<ChatProps> = ({}) => {
    const [messages, setMessages] = useState<messagesType[]>([]);
    const [roomInfo, setRoomInfo] = useState<roomType>({
        name: '',
    });
    const {roomID} = useParams();

    useEffect(() => {
        if (roomID) {
            //load room info
            db.collection('rooms').doc(roomID).onSnapshot(
                snapshot => {
                    const newRoomInfoState = snapshot.data() as roomType;
                    if (newRoomInfoState) {
                        setRoomInfo(newRoomInfoState);
                    }
                }
            )
            //load messages
            db.collection('rooms')
                .doc(roomID)
                .collection('messages')
                .orderBy('timestamp', 'asc')
                .onSnapshot(snapshot => {
                    const newMessagesState = snapshot.docs.map(doc => doc.data()) as messagesType[];
                    if(newMessagesState) {
                        setMessages(newMessagesState);
                    }
                })
        }
    }, [roomID])

    return (
        <div className="chat">
            <div className="chat__header">
                <div className="chat__header__left">
                    <h4 className="channel__name">
                        <strong>
                            {`#${roomInfo.name}`}
                        </strong>
                        <StarBorderOutlined className="star"/>
                    </h4>
                </div>
                <div className="chat__header__right">
                    <InfoOutlined className="info"/>
                    <div>Details</div>
                </div>
            </div>
            <div className="chat__messages">
                {messages.map(message => <ChatMessage
                    userImage={message.userImage}
                    user={message.user}
                    message={message.message}
                    timestamp={message.timestamp}
                />)}
            </div>
        </div>

    );
}

export default Chat