import React from "react";
import st from './Header.module.css'
import { CommentOutlined } from '@ant-design/icons';

type User = { id: number; title: string };
const data: Array<User> = [
    {
        id: 1,
        title: 'Danila Leontiev',
    },
    {
        id: 2,
        title: 'Katya Korochkina',
    },
    {
        id: 3,
        title: 'Olga Bereziy',
    },
    {
        id: 4,
        title: 'Danila Leontiev',
    },
];


const Header: React.FC = () => {
   
    return (
        <div className={st.header}>
            <CommentOutlined className={st.logo} />
            <div className={st.title}>M e s s e n g e r</div>
        </div>
    )
}

export default Header;