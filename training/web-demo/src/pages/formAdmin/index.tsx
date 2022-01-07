import React, { useEffect } from 'react';
import axios from 'axios';
import './style.css';
import { useHistory } from 'react-router-dom';
import { Form, Input, Button, DatePicker } from 'antd';
import moment from 'moment';

const FormAdmin: React.FC = () => {
  const history = useHistory();
  const [form] = Form.useForm();

  useEffect(() => {
    axios.get('/api/users/check').then(res => {
      history.push('/formAdmin');
    }).catch(err => {
      history.push('/login');
    })
  }, [])

  const formSubmit = () => {
    const formData = form.getFieldsValue();
    const submitData = {
      ...formData,
      birth: moment(formData.birth).format('YYYY_MM')
    };
    console.log(submitData);
    axios.post('/api/form-admin', submitData).then(res => {
      res.data ? window.alert('提交成功') : window.alert('提交失败')
    }).catch(err => {
      console.log(err);
      window.alert('未登录！');
      history.push('/login');
    })
  }

  return (
    <div className="form-container">
      <div className="form-header">
        表单验证
      </div>
      <Form
        name='formAdmin'
        form={form}
        labelCol={{ span: 9 }}
        wrapperCol={{ span: 6 }}
        layout='horizontal'
      >
        <Form.Item name='name' label='名称' rules={[{ required: true, message: '请输入正确的名称'}]}>
          <Input placeholder='请输入名称' />
        </Form.Item>
        <Form.Item name='tel' label='电话号码' rules={[{ required: true, pattern: /^1[3456789]\d{9}$/, message: '请输入正确的电话号码'}]}>
          <Input placeholder='请输入电话号码' />
        </Form.Item>
        <Form.Item name='email' label='邮箱' rules={[{ required: true, type: 'email', message: '请输入正确的邮箱'}]}>
          <Input placeholder='请输入邮箱' />
        </Form.Item>
        <Form.Item name='ID'
          label='身份证号'
          rules={[{
            required: true,
            pattern: /^[1-9][0-9]{5}([1][9][0-9]{2}|[2][0][0|1][0-9])([0][1-9]|[1][0|1|2])([0][1-9]|[1|2][0-9]|[3][0|1])[0-9]{3}([0-9]|[X])$/,
            message: '请输入正确的身份证号'
          }]}>
          <Input placeholder='请输入身份证号' />
        </Form.Item>
        <Form.Item name='birth' label='出生年月' rules={[{ required: true, message: '请选择出生年月'}]}>
          <DatePicker picker='month' placeholder='请选择年月' />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 9, span: 6}}>
          <Button type='primary' onClick={formSubmit}>
            提交
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default FormAdmin;
