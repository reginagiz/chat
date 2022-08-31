import { Button, Form, Input } from 'antd';
import React, { useContext, useState } from 'react';
import { UserInfo } from '../../context';
import st from './AuthForm.module.css'

type AuthFormProps = { Authorization: () => void };

const AuthForm: React.FC<AuthFormProps> = (props) => {
  const onFinish = (values: any) => {
    props.Authorization()
    setUserDetails({
      name: username,
      password: password,
      id: Date.now()
    })
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { setUserDetails } = useContext(UserInfo)

  return (
    <Form
      name="basic"
      labelCol={{ span: 9 }}
      wrapperCol={{ span: 6 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className={st.form}
    >
      <div className={st.title}>LOGIN</div>
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input onChange={(e) => { setUserName(e.target.value) }} />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password onChange={(e) => { setPassword(e.target.value) }} />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 9, span: 1 }}>
        <Button type="primary" htmlType="submit" >
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AuthForm;