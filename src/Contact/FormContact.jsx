import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';

const onFinish = (values) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const FormContact = () => (
  <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}

    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Apellido y Nombre"
      name="Apellido y Nombre"
      rules={[
        {
          required: true,
          message: 'Ingrese su Nombre',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Email"
      name="Email"
      rules={[
        {
          required: true,
          message: 'Email incorrecto',
          type: 'email'
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Mensaje"
      name="Mensaje"
      rules={[
        {
          required: true,
          message: 'Ingrese su mensaje',
        },
      ]}
    >
      <Input.TextArea />
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button  htmlType="submit">
        Enviar
      </Button>
    </Form.Item>
  </Form>
);

export default FormContact;
