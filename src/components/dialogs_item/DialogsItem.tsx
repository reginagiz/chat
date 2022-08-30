import React, { useEffect, useRef, useState } from "react";
import st from './DialogsItem.module.css'
import { Button } from 'antd';
import { SendOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

type Message = { id: number, message: string, event: string };
const DialogsItem: React.FC = () => {

    const [messages, setMessages] = useState<Message[]>([]);
    const [value, setValue] = useState('');
    const socket = useRef<any>();


    useEffect(() => {
        socket.current = new WebSocket('ws://localhost:5000');

        socket.current.onopen = () => {
            console.log('Connection established')
        }
        socket.current.onmessage = (event: any) => {
            const message = JSON.parse(event.data)
            setMessages(prev => [...prev, message])
        }
        socket.current.onclose = () => {
            console.log('Socket closed')
        }
        socket.current.onerror = () => {
            console.log('Socket error')
        }
    }, [])

    const sendMessage = async () => {
        const message = {
            message: value,
            id: Date.now(),
            event: 'message'
        }
        socket.current.send(JSON.stringify(message));
        setValue('')
    }

    return (
        <div className={st.dialog}>
            <div className={st.messages}>
                {messages.map(mess =>
                    <div key={mess.id} className={st.avatar_mess}>
                        <Avatar src="https://joeschmoe.io/api/v1/random"
                            className={st.avatar} size={60} />
                        <div className={st.message} key={mess.id}>
                            {mess.message}
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