import React from "react";
import st from './Footer.module.css';
import { Button } from 'antd';

type AuthFormProps = { Authorization: () => void };

const Footer: React.FC<AuthFormProps> = (props) => (
    <div className={st.footer}>
        <Button className={st.button} onClick={() => props.Authorization()}>Log out</Button>
    </div>
)

export default Footer;