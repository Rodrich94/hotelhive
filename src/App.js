import React, { useState, useEffect } from "react";
import {
  AppstoreOutlined,
  UserOutlined,
  HeartOutlined,
  HomeOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme, ConfigProvider, Carousel } from "antd";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import logo from "./img/Logo.png";
import Home from './Home/Home';
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

  const [collapsed, setCollapsed] = useState(false);
  const minWidthToShowName = 150;
  const width = collapsed ? 150 : 200;

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#b99470",
          colorInfo: "#b99470",
          colorSuccess: "#8fb996",
          colorWarning: "#f2c94c",
          colorError: "#e57373",
          colorLink: "#6c83b5",
          colorTextBase: "#4a4a4a",
        },
        components: {
          Layout: {
            headerBg: "rgb(74, 74, 74)",
          },
          Menu: {
            darkItemBg: "rgb(74, 74, 74)",
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
            theme="dark"
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
          </Menu>
        </Header>
        <Layout>
           <Routes>
                <Route path="/perfil" />
                <Route path="/calendar" />
                <Route path="/" element={<Home/>} />
              </Routes>
          <Layout
            style={{
              padding: "0 24px 24px",
              height: "auto",
              backgroundColor: "rgba(244, 223, 185, 0.8)",
            }}
          >
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
            <Content
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
            </Content>
            <Footer
              style={{
                textAlign: "center",
                backgroundColor: "#f4e3c5",
              }}
            >
              Ant Design ©{new Date().getFullYear()} Created by Ant UED
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

const WrappedApp = () => (
  <Router>
    <App />
  </Router>
);

export default WrappedApp;
