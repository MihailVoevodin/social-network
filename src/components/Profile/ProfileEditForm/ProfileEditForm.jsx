import { Button, Form, Input, Checkbox } from 'antd';
import React from 'react';

const ProfileEditForm = (props) => {

    const onFinish = (data) => {
        console.log(data);
        props.offEditMode();
        props.saveProfile(data)
    };

  return (
    <Form
        style={{marginTop: '20px'}}
        name="basic"
        labelCol={{
            span: 4,
        }}
        wrapperCol={{
            span: 8,
        }}
        onFinish={onFinish}
        initialValues={props.initialValues}
        >
        <Form.Item label="Username" name="fullName" rules={[{required: true, message: 'Please input your username!'}]}>
            <Input />
        </Form.Item>
        <Form.Item label="Looking for a job" name="lookingForAJob" valuePropName="checked">
            <Checkbox></Checkbox>
        </Form.Item>
        <Form.Item label="About me" name="aboutMe">
            <Input />
        </Form.Item>
        <Form.Item label="My skills" name="lookingForAJobDescription">
            <Input />
        </Form.Item>
        <Form.Item label="Facebook" name={['contacts', 'facebook']}>
            <Input />
        </Form.Item>
        <Form.Item label="Website" name={['contacts', 'website']}>
            <Input />
        </Form.Item>
        <Form.Item label="Vk" name={['contacts', 'vk']}>
            <Input />
        </Form.Item>
        <Form.Item label="Instagram" name={['contacts', 'instagram']}>
            <Input />
        </Form.Item>
        <Form.Item label="Youtube" name={['contacts', 'youtube']}>
            <Input />
        </Form.Item>
        <Form.Item label="Github" name={['contacts', 'github']}>
            <Input />
        </Form.Item>
        <Form.Item label="Main Link" name={['contacts', 'mainLink']}>
            <Input />
        </Form.Item>
        <Form.Item
            wrapperCol={{
            offset: 8,
            span: 16,
            }}
        >
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
        </Form.Item>
        </Form>
    )
}

export default ProfileEditForm;