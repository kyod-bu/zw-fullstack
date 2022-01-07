import React from 'react';
import { Input, Button, Form } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './style.css';

const Login: React.FC = () => {
  const [form] = Form.useForm();
  const history = useHistory();

  const submit = () => {
    const submitData = form.getFieldsValue();
    axios.post('/api/users/login', submitData).then(res => {
      res.data ? history.push('/formAdmin') : window.alert('登录失败')
    })
  }

  return (
    <div className="login-container">
      <div className="login-header">
        登录
      </div>
      <Form
        name='login'
        form={form}
        labelCol={{ span: 10 }}
        wrapperCol={{ span: 4 }}
        layout='horizontal'
      >
        <Form.Item
          name='username'
          label='用户名'
          rules={[{ required: true, message: '用户名不能为空'}]}
        >
          <Input prefix={<UserOutlined />} placeholder='请输入用户名' />
        </Form.Item>
        <Form.Item
          name='password'
          label='密码'
          rules={[{ required: true, message: '密码不能为空'}]}
        >
          <Input
            prefix={<LockOutlined />}
            type='password'
            placeholder='请输入密码'
          />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 10, span: 4}}>
          <Button type='primary' onClick={submit}>
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Login;
