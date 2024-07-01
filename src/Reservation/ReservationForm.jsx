import { useParams } from 'react-router-dom';
import { Form, Input, Button, DatePicker, Row, notification } from 'antd';
import axios from '../axiosConfig';

const ReservationForm = () => {
  const { ciudad, hotelId, habitacionId } = useParams();
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    const reservationDetails = {
      id_room: habitacionId,
      dni: values.dni,
      email: values.email,
      fecha_inicio: values.fecha_inicio.format('YYYY-MM-DD'),
      fecha_fin: values.fecha_fin.format('YYYY-MM-DD'),
    };
    console.log('Reservation Details:', reservationDetails);
    
    try {
      const response = await axios.post('/api/reservations/', reservationDetails);
      notification.success({
        message: 'Reserva exitosa',
        description: 'Tu reserva ha sido creada exitosamente.',
      });
      form.resetFields();
    } catch (error) {
      console.error('Error creating reservation:', error);
      notification.error({
        message: 'Error en la reserva',
        description: 'Hubo un error al crear tu reserva. Intenta nuevamente.',
      });
    }
  };

  return (
    <Row style={{ padding: '20px', justifyContent: "center" }}>
      <h1 style={{ width: "100%", textAlign: "center" }}>Formulario de Reserva</h1>
      <Form style={{ width: "60%" }} form={form} onFinish={onFinish} layout="vertical">
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
          name="dni"
          label="DNI"
          rules={[{ required: true, message: 'Por favor ingresa tu DNI' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, message: 'Por favor ingresa tu Email' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="fecha_inicio"
          label="Fecha de Inicio"
          rules={[{ required: true, message: 'Por favor selecciona una fecha de inicio' }]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item
          name="fecha_fin"
          label="Fecha de Fin"
          rules={[{ required: true, message: 'Por favor selecciona una fecha de fin' }]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item>
          <Button style={{ width: "100%" }} type="primary" htmlType="submit">
            Reservar
          </Button>
        </Form.Item>
      </Form>
    </Row>
  );
};

export default ReservationForm;
