import React, { useContext, useEffect, useRef, useState } from "react";
import st from './DialogsItem.module.css'
import { Button } from 'antd';
import { SendOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { UserInfo } from "../../context";

type Message = { id: number, message: string, event: string, username: string };

const DialogsItem: React.FC = () => {

    const [messages, setMessages] = useState<Message[]>([]);
    const [value, setValue] = useState('');

    const socket = useRef<any>();
    const { userDetails } = useContext(UserInfo);

    const message = {
        username: userDetails.name,
        message: value,
        id: Date.now(),
        event: 'message'
    }

    const sendMessage = async () => {
        socket.current.send(JSON.stringify(message));
        setValue('')
    }

    useEffect(() => {
        socket.current = new WebSocket('ws://localhost:5000');
        const messagesFromStorage = localStorage.getItem('messages')
        const a = messagesFromStorage ? JSON.parse(messagesFromStorage) : [];
        setMessages(a);

        socket.current.onopen = () => {
            console.log('Connection established')
        }
        socket.current.onmessage = (event: any) => {
            setMessages(prev => [...prev, JSON.parse(event.data)])
        }
        socket.current.onclose = () => {
            console.log('Socket closed')
        }
        socket.current.onerror = () => {
            console.log('Socket error')
        }
    }, [])

    useEffect(() => {
        const listener = (event: any) => {
            if (event.code === "Enter" || event.code === "NumpadEnter") {
                event.preventDefault();
                sendMessage()
            }
        };
        document.addEventListener("keydown", listener);
        return () => {
            document.removeEventListener("keydown", listener);
        };
    }, [message])

    useEffect(() => {
        if (messages.length !== 0) {
            localStorage.setItem('messages', JSON.stringify(messages))
        }
    }, [messages]);

    return (
        <div className={st.dialog}>
            <div className={st.messages}>
                {messages.map(mess =>
                    <div key={mess.id} className={st.avatar_mess}>
                        <Avatar src="https://joeschmoe.io/api/v1/random"
                            className={st.avatar} size={60} />
                        <div className={st.container}>
                            <div className={st.name_mess} key={mess.id}>
                                <div key={userDetails.id} className={st.name}>{mess.username}</div>
                                <div className={st.message}>{mess.message}</div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className={st.area_butt}>
                <textarea value={value} onChange={e => setValue(e.target.value)} />
                <Button type="primary" shape="circle"
                    icon={<SendOutlined />} onClick={sendMessage} />
            </div>
        </div>
    )
}



export default DialogsItem;