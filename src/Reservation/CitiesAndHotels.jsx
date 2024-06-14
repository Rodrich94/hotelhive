// CitiesAndHotels.jsx
import React from 'react';
import { Row, Col, Card, Button } from 'antd';
import { Link } from 'react-router-dom';
import data from '../Data/Reservas.json'; // Importa el JSON de datos

const CitiesAndHotels = () => {
  return (
    <div style={{ padding: '20px'}}>
      {data.ciudades.map(ciudad => (
        <div key={ciudad.id}>
          <h2>{ciudad.nombre}</h2>
          <Row gutter={[16, 16]}>
            {ciudad.hoteles.map(hotel => (
              <Col key={hotel.id} xs={24} sm={12} md={8} lg={6}>
                <Card
                  cover={<img alt={hotel.nombre} src={hotel.imagen} />}
                  actions={[
                    <Link to={`/reservas/${ciudad.nombre}/${hotel.id}`}>
                      <Button type="primary">Reservar en este hotel</Button>
                    </Link>
                  ]}
                >
                  <Card.Meta title={hotel.nombre} description={hotel.descripcion} />
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </div>
  );
};

export default CitiesAndHotels;
