import { Avatar, List } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import SearchContact from '../search/Search';
import st from './Navbar.module.css'
import { NavLink } from "react-router-dom";

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


const Navbar: React.FC = () => (
  <div className={st.navbar}>
    <SearchContact />
    <List
      itemLayout="horizontal"
      dataSource={data}
      size='large'
      className={st.list}
      renderItem={item => (
        <NavLink to={`/dialog-item/${item.id}/`}>
          <List.Item>
            <List.Item.Meta
              className={st.item}
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title={<a href="https://ant.design">{item.title}</a>}
              description="Hi, how are you? What will you do on the..."
            />
          </List.Item>
        </NavLink>
      )}
    />
  </div>
);

export default Navbar;