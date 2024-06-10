import React from "react";
import CarouselComponent from "./Carousel";
import { Content } from "antd/es/layout/layout";
import {
  StarFilled,
  CoffeeOutlined,
  WifiOutlined,
  PhoneOutlined,
  CarOutlined,
} from "@ant-design/icons";
import fachada from '../img/fachada-hotel.jpg'
import { Card, Col, Image, Row } from "antd";
import montaña from "../img/montania.png";
import Facilities from "./Facilities";
const { Meta } = Card;

const Home = () => {
  const contentHome = {
    display: "flex",
    justifyContent: "center",
    minHeight: "100vh",
    flexDirection: "column",
    alignItems: "center",
  };

  const contentHistory = {
    ...contentHome,
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#f4f0ed",
  };
  const iconStyle = { fontSize: "36px", color: "#145c62" };

  return (
    <div>
      <Content>
        <Row justify="center" gutter={[16, 16]}>
          <Col xs={24} lg={24}>
            <CarouselComponent />
          </Col>
        </Row>
      </Content>

      <Content style={contentHome}>
        <Row justify="center" gutter={[16, 16]}>
          <Col xs={24} lg={24} style={{display:"flex",justifyContent:"center"}}>
            <Col  xs={22} lg={5} style={{ textAlign: "center",justifyContent:"center" }}>
              <h1 style={{ fontSize: "48px" }}>Hotel Hive</h1>
              <div style={{ display: "flex", alignItems:"center",justifyContent: "space-between", width:'100%' }}>
                <StarFilled style={iconStyle} />
                <StarFilled style={iconStyle} />
                <StarFilled style={iconStyle} />
                <StarFilled style={iconStyle} />
                <StarFilled style={iconStyle} />
              </div>
            </Col>
          </Col>
          <Col xs={20} lg={16}>
            <p style={{ fontSize: "18px", textAlign: "center" }}>
              Sumérgete en una experiencia de hospitalidad única, donde cada
              detalle está cuidadosamente diseñado para hacer de tu estancia una
              verdadera delicia. Desde nuestras cómodas habitaciones hasta
              nuestras instalaciones de primera clase, en HotelHive encontrarás
              el refugio perfecto para relajarte, disfrutar y crear recuerdos
              inolvidables.
            </p>
          </Col>
        </Row>
        <Row
          justify="space-around"
          gutter={[60, 60]}
          style={{ marginTop: "50px", marginBottom: "10%" }}
        >
          <Col xs={23} sm={23} md={6}>
            <Card
              hoverable
              style={{ width: "100%", minHeight:"200px",alignItems:"center",textAlign:"center",paddingTop:"10%"}}
              cover={<WifiOutlined style={iconStyle} />}
            >
              <Meta
                title="WIFI"
                description="Disfruta de wifi libre y gratuito en todo el hotel"
              />
            </Card>
          </Col>
          <Col xs={23} sm={23} md={6}>
            <Card
              hoverable
              style={{ width: "100%", minHeight:"200px",alignItems:"center",textAlign:"center",paddingTop:"10%"}}
              cover={<CoffeeOutlined style={iconStyle} />}
            >
              <Meta
                title="Servicio a la habitacion"
                description="Disfruta de serv. a la habitacion 24hs"
              />
            </Card>
          </Col>
          <Col xs={23} sm={23} md={6}>
            <Card
              hoverable
              style={{ width: "100%", minHeight:"200px",alignItems:"center",textAlign:"center",paddingTop:"10%"}}
              cover={<CarOutlined style={iconStyle} />}
            >
              <Meta
                title="Estacionamiento"
                description="Disfruta de Estacionamiento libre"
              />
            </Card>
          </Col>
          <Col xs={23} sm={23} md={6}>
            <Card
              hoverable
              style={{ width: "100%", minHeight:"200px",alignItems:"center",textAlign:"center",paddingTop:"10%"}}
              cover={<PhoneOutlined style={iconStyle} />}
            >
              <Meta
                title="Atencion al cliente"
                description="Disfruta de la recepción y atención 24hs"
              />
            </Card>
          </Col>
        </Row>
      </Content>
      <Content style={contentHistory}>
        <Col xs={0} sm={0} md={0} lg={9}  style={{ margin: " 5%", borderRadius:'10px' }}>
          <Image
            preview={{
              destroyOnClose: true,
              imageRender: () => (
                <video
                  muted
                  width="60%"
                  controls
                  src="https://cdn.pixabay.com/video/2019/07/30/25639-351374270_large.mp4"
                />
              ),
              toolbarRender: () => null,
            }}
            src={fachada}
            style={{borderRadius:'10px'}}
          />
        </Col>
        <Col xs={24} sm={24} md={24} lg={14} style={{ padding: "10%" }}>
          <h1>¿Quienes somos Nosotros?</h1>
          <Col xs={24} sm={24} md={24} lg={22}>
            <Card hoverable >
              <Meta
                title="HotelHive"
                style={{ fontSize: "120%" }}
                description="
              En HotelHive somos apasionados por ofrecer una experiencia 
              excepcional a nuestros huéspedes. Más que un simple lugar para
              hospedarse, nos esforzamos por crear un ambiente acogedor donde 
              cada detalle esté cuidadosamente diseñado para brindar comodidad y 
              satisfacción. Nuestro equipo está comprometido en proporcionar un servicio 
              personalizado y atento en todo momento. Desde el momento en que llegas hasta el momento en que te marchas,
                nos dedicamos a asegurarnos de que tu estadía sea inolvidable. Ya sea que estés aquí por negocios, placer o 
                simplemente para aprender, en HotelHive encontrarás todo lo que necesitas para una experiencia verdaderamente 
                gratificante. "
              />
              <div style={{ width: "100%", marginTop: " 5%", borderRadius:'10px' }}>
                <Image src={montaña} preview={false}></Image>
            </div>
            </Card>
            </Col>  
        </Col>
      </Content>
      <Col xs={24} sm={24} md={24} lg={24}>
        <Content style={contentHome}>
          <Col  xs={22} sm={22} md={22} lg={24} style={{display:'flex', flexDirection: "row",justifyContent:"center",alignItems:"center"}}>
            <h1 style={{ fontSize: "50px", height: "auto", margin: "20px" }}>
              Instalaciones
              <hr color="#145c62"></hr>
            </h1>
          </Col>
          <div style={{ width: "95%" }}>
            <Facilities></Facilities>
          </div>
        </Content>
        </Col>
    </div>
  );
};
export default Home;
