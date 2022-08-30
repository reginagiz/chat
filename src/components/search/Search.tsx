import { Input, Space } from 'antd';
import React from 'react';
import st from './Search.module.css'

const { Search } = Input;

const onSearch = (value: string) => console.log(value);

const SearchContact: React.FC = () => (
    <Space direction="vertical" >
        <Search placeholder="Search..." onSearch={onSearch} className={st.search} />
    </Space>
);

export default SearchContact;