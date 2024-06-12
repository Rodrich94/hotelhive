import React, { useState, useEffect } from "react";
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
//import Contact from './Contact/Contact'; // Asegúrate de importar tu componente Contact
const { Header, Content, Footer } = Layout;

const App = () => {
  const user = {
    name: "Leonel Bustamante",
    image: "https://media1.tenor.com/m/NVwxxoyoyGgAAAAd/racoon-pedro.gif",
    description: "Administrador de sistemas",
    joinDate: "2024-05-24",
  };

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
        },
      }}
    >
      <Layout>
        <Header
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Link to="/">
            <img src={logo} height={100} alt="Logo" style={{ marginTop: 25 }} />
          </Link>

          <Menu
            theme="light"
            mode="horizontal"
            selectedKeys={selectedKeys}
            style={{
              marginLeft: "10px",
              flex: 1,
              minWidth: 0,
            }}
          >
            <Menu.Item key="/" icon={<HomeOutlined />}>
              <Link to="/">Inicio</Link>
            </Menu.Item>
            <Menu.Item key="/calendar" icon={<CalendarOutlined />}>
              <Link to="/calendar">Calendario</Link>
            </Menu.Item>
            <Menu.Item key="/contact" icon={<UserOutlined />}>
              <Link to="/contact">Contacto</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Layout
            style={{
              height: "auto",
              backgroundColor: "rgba(244, 223, 185, 0.8)",
            }}
          >
            {/* Renderiza Breadcrumb solo si no estás en la página de inicio */}
            {location.pathname !== "/" && (
              <Breadcrumb style={{ margin: "16px 15px" }}>
                <Breadcrumb.Item>
                  <Link to="/">Inicio</Link>
                </Breadcrumb.Item>
                {pathnames.map((value, index) => {
                  const url = `/${pathnames.slice(0, index + 1).join("/")}`;
                  return (
                    <Breadcrumb.Item key={url}>
                      <Link to={url}>{value}</Link>
                    </Breadcrumb.Item>
                  );
                })}
              </Breadcrumb>
            )}
            <Content
              style={{
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
                margin: "0",
              }}
            >
              <Routes>
                <Route path="/contact" />
                <Route path="/" element={<Home />} />
                {/* Agrega más rutas según sea necesario */}
              </Routes>
            </Content>
            <Footer
              style={{
                padding: "20px",
                textAlign: "center",
                backgroundColor: "#33757b",
                justifyContent: "center",
              }}
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
                  style={{ padding: "16px", textAlign: "center" }}
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
                    <h3 style={{ color: "#f4f1e8",margin:"5px" }}>Donde nos ubicamos</h3>
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
                        style={{ width: "90%", borderRadius:"10px"}}
                        allowFullScreen=""
                        loading="lazy"
                      ></iframe>
                    </div>
                  </Col>
                </Col>
                <Col
                  xs={24}
                  lg={24}
                  style={{
                    borderTop: "1px solid",
                    padding: "10px",
                    marginTop: "5px",
                    paddingTop: "15px",
                    color:"#f4f1e8",
                  }}
                >
                  Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Col>
              </Row>
            </Footer>
          </Layout>
        </Layout>
      </Layout>
      <FloatButton.BackTop visibilityHeight={0} type="primary" style={{border:"1px solid #474747"}}/>
    </ConfigProvider>
  );
};

const WrappedApp = () => (
  <Router>
    <App />
  </Router>
);

export default WrappedApp;
