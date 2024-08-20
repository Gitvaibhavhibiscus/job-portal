"use client"
import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';

const FormComponent = () => {
  const [form] = useState({
    name: '',
    email: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/dynamodb', {
        method: 'POST',
        body: JSON.stringify(form),
      });

      // Handle successful response
      console.log('Data submitted successfully!');
    } catch (error) {
      console.error('Error submitting data:', error);
      // Handle errors gracefully
    }
  };

  return (
    <Form onFinish={handleSubmit} initialValues={form}>
      <Form.Item
        label="Name"
        name="name"
        rules={[
          {
            required: true,
            message: 'Please enter your name',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please enter your email',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormComponent;