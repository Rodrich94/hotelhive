import React, { useEffect, useState } from 'react';
import { Row, Col, Card, Button, Typography } from 'antd';
import { Link } from 'react-router-dom';
import axios from '../axiosConfig';

const CitiesAndHotels = () => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await axios.get('/api/cities/');
        const citiesArray = response.data.map(city => ({
          id: city.id_city,
          nombre: city.name,
          hoteles: city.hotels || []  // Asegúrate de que hoteles sea un arreglo o un arreglo vacío si es undefined
        }));
        setCities(citiesArray);
      } catch (error) {
        console.error('Error fetching cities:', error);
      }
    };

    fetchCities();
  }, []);

  if (cities.length === 0) {
    return <div>Cargando ciudades...</div>;
  }

  return (
    <div style={{ padding: '20px', textAlign: "center" }}>
      {cities.map(ciudad => (
        <div key={ciudad.id}>
          <Typography.Title level={2} style={{ fontSize: "30px", margin: "20px" }}>
            {ciudad.nombre}<hr></hr>
          </Typography.Title>
          <Row gutter={[16, 16]} style={{ justifyContent: "center" }}>
            {ciudad.hoteles.map(hotel => (
              <Col key={hotel.id_hotel} xs={24} sm={12} md={8} lg={6}>
                <Card
                  cover={<img alt={hotel.name} src={hotel.image} />}
                  actions={[
                    <Link to={`/reservas/${ciudad.nombre}/${hotel.id_hotel}`}>
                      <Button type="primary">Reservar en este hotel</Button>
                    </Link>
                  ]}
                  style={{ minHeight: "500px" }}
                >
                  <Card.Meta title={hotel.name} description={hotel.description} />
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
