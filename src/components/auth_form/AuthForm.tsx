import { Button, Form, Input } from 'antd';
import React from 'react';
import st from './AuthForm.module.css'

type AuthFormProps = { Authorization: () => void };

const AuthForm: React.FC<AuthFormProps> = (props) => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
    props.Authorization()
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const [username, setUserName]= useState


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
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
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