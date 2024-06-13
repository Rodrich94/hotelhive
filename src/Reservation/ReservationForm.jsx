// ReservationForm.jsx
import React from 'react';
import { Form, DatePicker, Button } from 'antd';

const ReservationForm = () => {
  const handleFinish = (values) => {
    console.log('Form values:', values);
    // Lógica para enviar la reserva al backend
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h2>Reserva de Habitación</h2>
      <Form layout="vertical" onFinish={handleFinish}>
        <Form.Item name="fecha" label="Fecha de Reserva" rules={[{ required: true, message: 'Selecciona una fecha!' }]}>
          <DatePicker style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Confirmar Reserva
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ReservationForm;
