import { useParams } from 'react-router-dom';
import { Form, Input, Button, DatePicker, Row } from 'antd';

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
    <Row style={{ padding: '20px', justifyContent:"center"}}>
      <h1 style={{width:"100%", textAlign:"center"}}>Formulario de Reserva</h1>
      <Form style={{width:"60%"}} form={form} onFinish={onFinish} layout="vertical">
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
          <Button style={{width:"100%"}} type="primary" htmlType="submit">
            Reservar
          </Button>
        </Form.Item>
      </Form>
    </Row>
  );
};

export default ReservationForm;