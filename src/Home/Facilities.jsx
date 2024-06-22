import React, { useState } from "react";
import { Card, Col, Row, Image } from "antd";
import { Content } from "antd/es/layout/layout";
import gymimg from "../img/gym.jpg";
import estar from "../img/sala-estar.jpg";
import bar from "../img/bar.jpg";
import indexRelaxImage from "../img/index-relax.jpg";

const tabList = [
  { key: "tab1", tab: "Spa" },
  { key: "tab2", tab: "Gimnasio" },
  { key: "tab3", tab: "Sala de Estar" },
  { key: "tab4", tab: "Bar" },
];

const contentList = {
  tab1: (
    <Row style={{ width: "100%" }}>
      <Col xs={24} lg={12} style={{ display: "flex", justifyContent: "center" }}>
        <Image
          
          preview={{
            destroyOnClose: true,
            imageRender: () => (
              <video
                muted
                width="60%"
                autoPlay
                controls
                src="https://videos.pexels.com/video-files/3998263/3998263-hd_1366_720_50fps.mp4"
              />
            ),
            toolbarRender: () => null,
          }}
          src={indexRelaxImage}
          style={{ borderRadius: '10px', height: "fit-content", width: '100%' }}
        />
      </Col>
      <Col xs={24} lg={12} style={{ padding: "16px" }}>
        <div>
          <h1>Bienvenido al Spa del Hotel</h1>
          <p>
            Bienvenido a nuestro exclusivo spa, un oasis de serenidad y rejuvenecimiento en el corazón de nuestro hotel. En nuestro spa, ofrecemos una amplia gama de servicios diseñados para revitalizar tanto el cuerpo como la mente, asegurando que cada huésped experimente una profunda sensación de bienestar y relajación.
          </p>
          <h2>Servicios y Tratamientos</h2>
          <p>
            Nuestro spa cuenta con una variedad de tratamientos terapéuticos y de belleza, todos diseñados para proporcionar una experiencia holística de relajación. Entre nuestros servicios destacados se incluyen:
          </p>
          <ul>
            <li>
              <strong>Masajes Terapéuticos:</strong> Nuestros terapeutas profesionales personalizarán su tratamiento para satisfacer sus necesidades específicas.
            </li>
            <li>
              <strong>Tratamientos Faciales:</strong> Ofrecemos una selección de faciales rejuvenecedores que utilizan los productos más avanzados para limpiar, hidratar y revitalizar su piel.
            </li>
            <li>
              <strong>Terapias de Cuerpo Completo:</strong> Disfrute de envolturas corporales desintoxicantes, exfoliaciones y tratamientos de barro que dejarán su piel suave y revitalizada.
            </li>
          </ul>
        </div>
      </Col>
    </Row>
  ),
  tab2: (
    <Row style={{ width: "100%" }}>
      <Col xs={24} lg={12} style={{ display: "flex", justifyContent: "center" }}>
        <Image
        preview={{
          destroyOnClose: true,
          imageRender: () => (
            <video
              muted
              width="60%"
              autoPlay
              controls
              src="https://videos.pexels.com/video-files/1596861/1596861-hd_1280_720_30fps.mp4"
            />
          ),
          toolbarRender: () => null,
        }}
          src={gymimg}
          style={{ width: "100%", borderRadius: '10px' }}
        />
      </Col>
      <Col xs={24} lg={12} style={{ padding: "16px" }}>
        <h1>Bienvenido al Gimnasio del Hotel</h1>
        <p>
          Nos complace darle la bienvenida a nuestro gimnasio, un espacio dedicado a su salud y bienestar durante su estancia en el hotel. Nuestro objetivo es proporcionarle un ambiente donde pueda mantener su rutina de ejercicio o comenzar un nuevo camino hacia un estilo de vida más saludable.
        </p>
        <h2>Instalaciones de Primera Clase</h2>
        <p>
          Nuestro gimnasio está equipado con una amplia variedad de equipos de última generación, diseñados para satisfacer todas sus necesidades de fitness:
        </p>
        <ul>
          <li><strong>Máquinas de Cardio:</strong> Cintas de correr, bicicletas estáticas y máquinas de remo.</li>
          <li><strong>Pesas Libres:</strong> Mancuernas, barras y bancos para ejercicios de fuerza.</li>
          <li><strong>Máquinas de Peso:</strong> Equipos para trabajar diferentes grupos musculares.</li>
          <li><strong>Zona de Entrenamiento Funcional:</strong> Con kettlebells, balones medicinales, cuerdas de batalla y más.</li>
        </ul>
      </Col>
    </Row>
  ),
  tab3: (
    <Row style={{ width: "100%" }}>
      <Col xs={24} lg={12} style={{ display: "flex", justifyContent: "center" }}>
        <Image
          preview={{
            destroyOnClose: true,
            imageRender: () => (
              <video
                muted
                width="60%"
                autoPlay
                controls
                src="https://videos.pexels.com/video-files/3773487/3773487-hd_1280_720_60fps.mp4"
              />
            ),
            toolbarRender: () => null,
          }}
          src={estar}
          style={{ width: "100%", borderRadius: '10px' }}
        />
      </Col>
      <Col xs={24} lg={12} style={{ padding: "16px" }}>
        <h1>Bienvenido a la Sala de Estar del Hotel</h1>
        <p>
          Nos complace darle la bienvenida a nuestra elegante Sala de Estar, un espacio diseñado para ofrecerle el máximo confort y relajación durante su estancia.
        </p>
        <h2>Ambiente Acogedor y Elegante</h2>
        <p>
          Nuestra Sala de Estar ha sido cuidadosamente decorada para crear un ambiente cálido y acogedor, con una combinación de diseño moderno y toques clásicos.
        </p>
        <h2>Servicios y Comodidades</h2>
        <p>
          Para asegurarnos de que su tiempo en la Sala de Estar sea lo más agradable posible, hemos equipado el espacio con una serie de comodidades:
        </p>
        <ul>
          <li><strong>Chimenea:</strong> En los meses más fríos, nuestra chimenea añade un toque extra de calidez y confort.</li>
          <li><strong>Biblioteca:</strong> Acceda a una colección de libros y revistas para su entretenimiento.</li>
          <li><strong>Televisión de Pantalla Grande:</strong> Relájese viendo sus programas y películas favoritas en nuestra televisión de alta definición.</li>
        </ul>
      </Col>
    </Row>
  ),
  tab4: (
    <Row style={{ width: "100%" }}>
      <Col xs={24} lg={12} style={{ display: "flex", justifyContent: "center" }}>
        <Image
          preview={{
            destroyOnClose: true,
            imageRender: () => (
              <video
                muted
                width="60%"
                autoPlay
                controls
                src="https://videos.pexels.com/video-files/854128/854128-hd_1280_720_25fps.mp4"
              />
            ),
            toolbarRender: () => null,
          }}
          src={bar}
          style={{ width: "100%", borderRadius: '10px' }}
        />
      </Col>
      <Col xs={24} lg={12} style={{ padding: "16px" }}>
        <h1>Bienvenido al Bar del Hotel</h1>
        <p>
          ¡Salud! Bienvenido a nuestro acogedor bar, donde la buena compañía se combina con las mejores bebidas para crear momentos inolvidables. Nuestro bar es el lugar perfecto para relajarse, disfrutar de una copa y sumergirse en la atmósfera animada del hotel.
        </p>
        <h2>Oferta de Bebidas</h2>
        <p>
          En nuestro bar, ofrecemos una amplia selección de bebidas para satisfacer todos los gustos y ocasiones. Desde cócteles artesanales y vinos selectos hasta cervezas locales y bebidas sin alcohol, tenemos algo para cada preferencia.
        </p>
        <h2>Complementos</h2>
        <p>
          Acompañe su bebida favorita con una deliciosa selección de aperitivos y platos pequeños, cuidadosamente preparados por nuestro talentoso equipo de cocina. Desde tentempiés ligeros hasta platos gourmet, cada bocado está diseñado para complementar perfectamente su experiencia en el bar.
        </p>
      </Col>
    </Row>
  ),
};

const Facilities = () => {
  const [activeTabKey1, setActiveTabKey1] = useState("tab1");

  const onTab1Change = (key) => {
    setActiveTabKey1(key);
  };

  return (
    <Content>
      <Row justify="center" style={{ margin: '3%' }}>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <Card
            tabList={tabList}
            activeTabKey={activeTabKey1}
            onTabChange={onTab1Change}
          >
            {contentList[activeTabKey1]}
          </Card>
        </Col>
      </Row>
    </Content>
  );
};

export default Facilities;
