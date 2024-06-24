import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Row, Col, Card, Button,Typography} from 'antd';
import data from '../Data/Reservas.json';

const HotelDetails = () => {
  const { ciudad, hotelId } = useParams();
  const hotel = data.ciudades.reduce((acc, ciudad) => acc.concat(ciudad.hoteles), [])
    .find(hotel => hotel.id === parseInt(hotelId));

  if (!hotel) return <div>No se encontró el hotel.</div>;

  return (
    <div style={{ padding: '20px' }}>
      <Typography.Title level={2} style={{ fontSize: "30px",margin:"5px" }}>
        {hotel.nombre}<hr></hr>
      </Typography.Title>
      <Typography.Paragraph
              style={{ fontSize: "18px", textAlign: "left" }}
            >
        {hotel.descripcion}
      </Typography.Paragraph>
      <Row gutter={[16, 16]}>
        {hotel.habitaciones.map(habitacion => (
          <Col key={habitacion.id} xs={24} sm={12} md={8} lg={6}>
            <Card cover={<img alt={habitacion.nombre} src={habitacion.imagen} />} 
            style={{minHeight:"500px"}}>
              <h3>{habitacion.tipo}</h3>
              <p>Precio: ${habitacion.precio}</p>
              {habitacion.disponibilidad ? (
                <Link to={`/reservas/${encodeURIComponent(ciudad)}/${hotelId}/habitacion/${habitacion.id}`}>
                  <Button type="primary">Seleccionar Habitación</Button>
                </Link>
              ) : (
                <p>No disponible</p>
              )}
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HotelDetails;
