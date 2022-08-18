import React from "react";
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { connect } from "react-redux";
import { login } from "../../redux/authReducer";
import { Navigate } from "react-router-dom";
import './Login.css'

let Login = (props) => {
    
    const onFinish = (data) => {
        console.log(data);
        props.login(data.email, data.password, data.remember);
    };
    
    if (props.isAuth) {
        return <Navigate to='/profile' />
    }

    return (
        <Form
        name="normal_login"
        className="login-form form" 
        labelCol={{
            span: 4,
        }}
        wrapperCol={{
            span: 8,
        }}
        initialValues={{
            remember: true,
        }}
        onFinish={onFinish}
        >
        <Form.Item label="Email" name="email" rules={[{required: true, type: 'email', message: 'Please input valid email!',},]}>
            <Input prefix={<MailOutlined className="site-form-item-icon" />}/>
        </Form.Item>
    
        <Form.Item label="Password" name="password" rules={[{required: true, message: 'Please input your password!',},]}>
            <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} type="password"/>
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked" wrapperCol={{offset: 4}}>
            <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <div className="incorrect">{props.postErrorText}</div>

        <Form.Item wrapperCol={{offset: 7}}>
            <Button type="primary" htmlType="submit" className="login-form-button">
                Login
            </Button>
        </Form.Item>
    </Form>
    );
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        postErrorText: state.auth.postErrorText
    }
}

export default connect(mapStateToProps, {login})(Login);