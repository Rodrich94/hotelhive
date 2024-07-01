import React, { useState, useEffect } from "react";
import "./styles/App.css";
import {
  UserOutlined,
  HomeOutlined,
  CalendarOutlined,
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
} from "@ant-design/icons";
import {
  Breadcrumb,
  Layout,
  Menu,
  theme,
  ConfigProvider,
  FloatButton,
  Col,
  Row,
} from "antd";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import logo from "./img/Hotelhive2.png";
import Home from "./Home/Home";
import FormContact from "./Contact/FormContact";
import CitiesAndHotels from "../src/Reservation/CitiesAndHotels";
import HotelDetails from "../src/Reservation/HotelDetails";
import ReservationForm from "../src/Reservation/ReservationForm";
import ReservationsByDNI from "../src/Reservation/ReservationsByDni";

import { Link as ScrollLink } from "react-scroll";

const { Header, Content, Footer } = Layout;

const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  // Obtener la ubicación actual
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((item) => item);

  // Calcular la clave seleccionada del menú según la ubicación actual
  const [selectedKeys, setSelectedKeys] = useState([]);

  useEffect(() => {
    setSelectedKeys([location.pathname]);
  }, [location.pathname]);
  

  const breadcrumbItems = [
    {
      key: "home",
      content: <Link to="/">Inicio</Link>,
    },
    ...pathnames.map((value, index) => ({
      key: `${index}`,
      content: (
        <Link to={`/${pathnames.slice(0, index + 1).join("/")}`}>
          {decodeURIComponent(value)}
        </Link>
      ),
    })),
  ];

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#33757b",
          colorInfo: "#f4f1e8",
          colorSuccess: "#78B454",
          colorWarning: "#F9A52B",
          colorError: "#D33131",
          colorLink: "#474747",
          colorTextBase: "#474747",
          colorBgBase: "#f4f1e8",
        },
        components: {
          Layout: {
            headerBg: "#f4f1e8",
          },
          Menu: {
            darkItemBg: "#f4f1e8",
          },
          Card: {
            colorFillAlter: "#33757b",
          },
          Form: {
            labelColor: "#f4f1e8",
          },
        },
      }}
    >
      <Layout>
        <Header
          className="header"
        >
          <Link to="/">
            <img src={logo} height={100} alt="Logo"/>
          </Link>

          <Menu
            theme="light"
            mode="horizontal"
            selectedKeys={selectedKeys}
            className="menu"
          >
            <Menu.Item key="/" icon={<HomeOutlined />}>
              <Link to="/">Inicio</Link>
            </Menu.Item>
            <Menu.Item key="/reservas" icon={<CalendarOutlined />}>
              <Link to="/reservas">Reservas</Link>
            </Menu.Item>
            <Menu.Item key="/contact" icon={<UserOutlined />}>
              <ScrollLink to="footer" smooth={true} duration={500}>
                Contacto
              </ScrollLink>
            </Menu.Item>
            <Menu.Item key="/reservas/dni/38081094" icon={<CalendarOutlined />}>
              <Link to="/reservas/dni/38081094">Mis Reservas</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Layout
            className="layout-principal"
          >
            {location.pathname !== "/" && (
              <Breadcrumb className="breadcrumb">
                {breadcrumbItems.map((item) => (
                  <Breadcrumb.Item key={item.key}>
                    {item.content}
                  </Breadcrumb.Item>
                ))}
              </Breadcrumb>
            )}
            <Content
              style={{
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
                margin: location.pathname === "/" ? "0" : "1em",
              }}
            >
              <Routes>
                <Route path="/contact" />
                <Route path="/" element={<Home />} />
                <Route path="/reservas" element={<CitiesAndHotels />} />
                <Route
                  path="/reservas/:ciudad/:hotelId"
                  element={<HotelDetails />}
                />
                <Route
                  path="/reservas/:ciudad/:hotelId/habitacion/:habitacionId"
                  element={<ReservationForm />}
                />
                <Route path="/reservas/dni/:dni" element={<ReservationsByDNI />} />
              </Routes>
            </Content>
            <Footer
              className="footer"
              
              id="footer"
            >
              <Row>
                <Col xs={24} lg={8}>
                  <Col xs={24} lg={24}>
                    <h3 style={{ color: "#f4f1e8" }}>Contacto</h3>
                  </Col>
                  <Col xs={24} lg={24}>
                    <div
                      style={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "center",
                      }}
                    >
                      <FormContact />
                    </div>
                  </Col>
                </Col>
                <Col
                  xs={24}
                  lg={6}
                  className="contact-text"
                >
                  <Row gutter={[16, 16]}>
                    <Col xs={24} style={{ color: "#f4f1e8" }}>
                      <EnvironmentOutlined
                        style={{ fontSize: "24px", marginBottom: "8px" }}
                      />
                      <h3>Dirección</h3>
                      <p>Calle Falsa 123, Ciudad, País</p>
                    </Col>
                    <Col xs={24} style={{ color: "#f4f1e8" }}>
                      <PhoneOutlined
                        style={{ fontSize: "24px", marginBottom: "8px" }}
                      />
                      <h3>Teléfono</h3>
                      <p>(+123) 456 7890</p>
                    </Col>
                    <Col xs={24} style={{ color: "#f4f1e8" }}>
                      <MailOutlined
                        style={{ fontSize: "24px", marginBottom: "8px" }}
                      />
                      <h3>Correo Electrónico</h3>
                      <p>contacto@hotel.com</p>
                    </Col>
                  </Row>
                </Col>
                <Col xs={24} lg={10}>
                  <Col xs={24} lg={24}>
                    <h3 style={{ color: "#f4f1e8", margin: "5px" }}>
                      Donde nos ubicamos
                    </h3>
                  </Col>
                  <Col xs={24} lg={24}>
                    <div
                      style={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "center",
                      }}
                    >
                      <iframe
                        title="San Martín de los Andes"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3200.5792344470085!2d-71.35136578471177!3d-40.157320379396156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x961a93f5b0f0b351%3A0x4bd202dc9e2b2316!2sSan%20Mart%C3%ADn%20de%20los%20Andes%2C%20Neuqu%C3%A9n%2C%20Argentina!5e0!3m2!1sen!2sus!4v1686861637602!5m2!1sen!2sus"
                        width="100%"
                        height="300"
                        style={{ width: "90%", borderRadius: "10px" }}
                        allowFullScreen=""
                        loading="lazy"
                      ></iframe>
                    </div>
                  </Col>
                </Col>
                <Col className="text-footer"
                  xs={24}
                  lg={24}
                >
                  HOTEL HIVE ©{new Date().getFullYear()} Created by Team Codo a Codo
                </Col>
              </Row>
            </Footer>
          </Layout>
        </Layout>
      </Layout>
      <FloatButton.BackTop
        visibilityHeight={0}
        type="primary"
        style={{ border: "1px solid #474747" }}
      />
    </ConfigProvider>
  );
};

const WrappedApp = () => (
  <Router>
    <App />
  </Router>
);

export default WrappedApp;
