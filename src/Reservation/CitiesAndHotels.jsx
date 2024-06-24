// CitiesAndHotels.jsx
import React from 'react';
import { Row, Col, Card, Button, Typography } from 'antd';
import { Link } from 'react-router-dom';
import data from '../Data/Reservas.json'; // Importa el JSON de datos

const CitiesAndHotels = () => {
  return (
    <div style={{ padding: '20px', textAlign:"center"}}>
      {data.ciudades.map(ciudad => (
        <div key={ciudad.id}>
          <Typography.Title level={2} style={{ fontSize: "30px",margin:"20px" }}>
            {ciudad.nombre}<hr></hr>
          </Typography.Title>
          <Row gutter={[16, 16]} style={{justifyContent:"center"}}>
            {ciudad.hoteles.map(hotel => (
              <Col key={hotel.id} xs={24} sm={12} md={8} lg={6}>
                <Card
                  cover={<img alt={hotel.nombre} src={hotel.imagen} />}
                  actions={[
                    <Link to={`/reservas/${ciudad.nombre}/${hotel.id}`}>
                      <Button type="primary">Reservar en este hotel</Button>
                    </Link>
                  ]}
                  style={{minHeight:"500px"}}
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
