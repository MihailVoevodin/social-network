import { Button, Form, Input, Select } from 'antd';
import React from 'react';

const ProfileEditForm = (props) => {

    const { Option } = Select;

    const onFinish = (data) => {
        console.log(data);
        props.offEditMode();
        props.editProfile()
    };

  return (
    <Form
        name="basic"
        labelCol={{
            span: 4,
        }}
        wrapperCol={{
            span: 8,
        }}
        onFinish={onFinish}
        >
        <Form.Item label="Username" name="username" rules={[{required: true, message: 'Please input your username!',},]}>
            <Input />
        </Form.Item>
        <Form.Item label="Looking for a job" name="lookingJob" rules={[{required: true, message: 'Please select something!',},]}>
            <Select placeholder="Select yes or no">
                <Option value="Yes">yes</Option>
                <Option value="No">no</Option>
            </Select>
        </Form.Item>
        <Form.Item label="My skills" name="skills">
            <Input />
        </Form.Item>
        <Form.Item label="Facebook" name="facebook">
            <Input />
        </Form.Item>
        <Form.Item label="Website" name="website">
            <Input />
        </Form.Item>
        <Form.Item label="Vk" name="vk">
            <Input />
        </Form.Item>
        <Form.Item label="Instagram" name="instagram">
            <Input />
        </Form.Item>
        <Form.Item label="Youtube" name="youtube">
            <Input />
        </Form.Item>
        <Form.Item label="Github" name="github">
            <Input />
        </Form.Item>
        <Form.Item label="Main Link" name="mainlink">
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