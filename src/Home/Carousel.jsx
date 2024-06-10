import React from "react";
import { Button, Carousel, Col, Image, Row } from "antd";
import { DownOutlined } from "@ant-design/icons";
import Typewriter from "typewriter-effect";
import logo from "../img/Hotelhive.png";
const CarouselComponent = () => {
  const imgBackground = {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    width: "100%",
    height: "94vh",
    display: "flex",
    alignItems: "center",
    margin: "0",
    color: "#ffff",
    fontSize: "60px",
  };

  const imgBackground1 = {
    ...imgBackground,
    backgroundImage: `url(${require("../img/hotel.jpg")})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const imgBackground2 = {
    ...imgBackground,
    backgroundImage: `url(${require("../img/gallery2.jpg")})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const imgBackground3 = {
    ...imgBackground,
    backgroundImage: `url(${require("../img/gallery3.jpg")})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const imgBackground4 = {
    ...imgBackground,
    backgroundImage: `url(https://cdn.pixabay.com/photo/2016/10/18/09/02/hotel-1749602_960_720.jpg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  const title = {
    color: "#ffff",
    width: "100%",
    height: "100%",
    textAlign: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: "5% 0  0 0 ",
  };
  return (
    <Carousel arrows>
      <div>
        <Row justify="center" gutter={[16, 16]}>
          <Col xs={24} lg={24}>
            <div style={imgBackground1}>
              <div style={title}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    width={400}
                    src={logo}
                    alt="logo-hotel"
                    preview={false}
                  />
                  <Col xs={0} sm={0} md={0} lg={12} xl={14}>
                    <h1 style={{ color: "#f4f1e8", fontSize: "100px" }}>
                      ¡Bienvenidos!
                    </h1>
                  </Col>
                </div>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                  <p style={{ fontSize: "50px" }}>
                    <Typewriter
                      options={{
                        strings: [
                          "Una experiencia única...",
                          "Estas preparado para vivirla?",
                        ],
                        autoStart: true,
                        loop: true,
                        delay: 150,
                      }}
                    />
                    <br />
                    <Button
                      type="primary"
                      shape="circle"
                      icon={<DownOutlined />}
                      onClick={() =>
                        document
                          .getElementById("footer")
                          .scrollIntoView({ behavior: "smooth" })
                      }
                    />
                  </p>
                </Col>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div>
        <Row justify="center" gutter={[16, 16]}>
          <Col xs={24} lg={24}>
            <div style={imgBackground3}>
              <div style={title}>
                <Image
                  preview={false}
                  width={400}
                  height={"auto"}
                  src={logo}
                  alt="logo-hotel"
                  margin="0"
                />
                <Col justify="center" xs={24} sm={24} md={24} lg={24} xl={24}>
                  <h1 style={{ margin: "0", fontSize: "50px" }}>
                    <Typewriter
                      options={{
                        strings: ["Cómodo...", "Lujoso...", "Confortable..."],
                        autoStart: true,
                        loop: true,
                        delay: 150,
                      }}
                    />
                  </h1>
                </Col>
                <Button
                  type="primary"
                  shape="circle"
                  icon={<DownOutlined />}
                  onClick={() =>
                    document
                      .getElementById("footer")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                />
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div>
        <Row justify="center" gutter={[16, 16]}>
          <Col xs={24} lg={24}>
            <div style={imgBackground4}>
              <div style={title}>
                <Image
                  preview={false}
                  width={400}
                  height={"auto"}
                  src={logo}
                  alt="logo-hotel"
                  margin="0"
                  
                />
                <Col justify="center" xs={24} sm={24} md={24} lg={24} xl={24}>
                  <h1 style={{ margin: "0", fontSize: "50px" }}>
                    <Typewriter
                      options={{
                        strings: ["Moderno...", "Exclusivo...", "Atractivo..."],
                        autoStart: true,
                        loop: true,
                        delay: 150,
                      }}
                    />
                  </h1>
                </Col>
                <Button
                  type="primary"
                  shape="circle"
                  icon={<DownOutlined />}
                  onClick={() =>
                    document
                      .getElementById("footer")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                />
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <div>
        <Row justify="center" gutter={[16, 16]}>
          <Col xs={24} lg={24}>
            <div style={imgBackground2}>
              <div style={title}>
                <Image
                  preview={false}
                  width={400}
                  height={"auto"}
                  src={logo}
                  alt="logo-hotel"
                  margin="0"
                />
                <Col justify="center" xs={24} sm={24} md={24} lg={24} xl={24}>
                  <h1 style={{ margin: "0", fontSize: "50px" }}>
                    <Typewriter
                      options={{
                        strings: ["Relajante...", "Familiar...", "Intimo..."],
                        autoStart: true,
                        loop: true,
                        delay: 150,
                      }}
                    />
                  </h1>
                </Col>
                <Button
                  type="primary"
                  shape="circle"
                  icon={<DownOutlined />}
                  onClick={() =>
                    document
                      .getElementById("footer")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
