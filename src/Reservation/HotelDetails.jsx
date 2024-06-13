// HotelDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col, Card, Button } from 'antd';
import data from '../Data/Reservas.json';
const HotelDetails = () => {
  const { hotelId } = useParams();
  const hotel = data.ciudades.reduce((acc, ciudad) => acc.concat(ciudad.hoteles), [])
    .find(hotel => hotel.id === parseInt(hotelId));

  if (!hotel) return <div>No se encontró el hotel.</div>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>{hotel.nombre}</h1>
      <p>{hotel.descripcion}</p>
      <Row gutter={[16, 16]}>
        {hotel.habitaciones.map(habitacion => (
          <Col key={habitacion.id} xs={24} sm={12} md={8} lg={6}>
            <Card>
              <h3>{habitacion.tipo}</h3>
              <p>Precio: ${habitacion.precio}</p>
              {habitacion.disponibilidad ? (
                <Button type="primary">Seleccionar Habitación</Button>
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
