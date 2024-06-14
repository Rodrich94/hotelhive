import { useParams } from 'react-router-dom';
import { Form, Input, Button, DatePicker } from 'antd';

const ReservationForm = () => {
  const { ciudad, hotelId, habitacionId } = useParams();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    const reservationDetails = {
      ciudad: decodeURIComponent(ciudad),
      hotelId,
      habitacionId,
      fecha: values.fecha.format('YYYY-MM-DD'),
    };
    console.log('Reservation Details:', reservationDetails);
    // Llamar a tu API o realizar acciones con los datos de la reserva aquí
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Formulario de Reserva</h1>
      <Form form={form} onFinish={onFinish} layout="vertical">
        <Form.Item label="Ciudad">
          <Input value={decodeURIComponent(ciudad)} disabled />
        </Form.Item>
        <Form.Item label="Hotel ID">
          <Input value={hotelId} disabled />
        </Form.Item>
        <Form.Item label="Habitación ID">
          <Input value={habitacionId} disabled />
        </Form.Item>
        <Form.Item
          name="fecha"
          label="Fecha de Reserva"
          rules={[{ required: true, message: 'Por favor selecciona una fecha' }]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Reservar
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ReservationForm;