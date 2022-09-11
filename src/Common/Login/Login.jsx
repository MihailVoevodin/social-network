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
        className='form'
        labelCol={{
            span: 4,
        }}
        wrapperCol={{
            span: 8,
        }}
        onFinish={onFinish}
        >
            <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please input email!', },]}>
                <Input prefix={<MailOutlined className="site-form-item-icon" />} />
            </Form.Item>

            <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!', },]}>
                <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} type="password" />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 4, span: 10 }}>
                <Checkbox style={{color: "white"}}>Remember me</Checkbox>
            </Form.Item>

        <Form.Item wrapperCol={{ offset: 7 }}>
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