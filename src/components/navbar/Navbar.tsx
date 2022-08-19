import { Avatar, List } from 'antd';
import React from 'react';
import SearchContact from '../search/Search';
import st from './Navbar.module.css'

const data = [
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
  <SearchContact/>
  <List
    itemLayout="horizontal"
    dataSource={data}
    size='large'
    className={st.list}
    renderItem={item => (
      <List.Item>
        <List.Item.Meta
          className={st.item}
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title={<a href="https://ant.design">{item.title}</a>}
          description="Hi, how are you? What will you do on the..."
        />
      </List.Item>
    )}
  />
  </div>
);

export default Navbar;