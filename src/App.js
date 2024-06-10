import React, { useState, useEffect } from "react";
import {
  UserOutlined,
  HomeOutlined,
  CalendarOutlined,
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
              <Breadcrumb style={{ margin: "16px 0" }}>
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
                textAlign: "center",
                backgroundColor: "#33757b",
              }}
              id="footer"
            >
              <Row>
                <Col xs={24} lg={12}>
                  <h3>Contacto</h3>
                  <FormContact />
                </Col>
                <Col xs={24} lg={12}>
                  <h3>Donde nos ubicamos</h3>
                  <iframe src="https://maps.google.com/?cid=8197747569466981434" width="600" height="360" frameborder="0"  allowfullscreen></iframe>
                </Col>
                <Col xs={24} lg={24} style={{borderTop:"1px solid", padding:"10px"}}>
                  Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Col>
              </Row>
            </Footer>
          </Layout>
        </Layout>
      </Layout>
      <FloatButton.BackTop visibilityHeight={0} type="primary" />
    </ConfigProvider>
  );
};

const WrappedApp = () => (
  <Router>
    <App />
  </Router>
);

export default WrappedApp;
