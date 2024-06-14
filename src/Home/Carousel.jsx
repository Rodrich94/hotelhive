import React from "react";
import { Button, Carousel, Col, Image, Row } from "antd";
import { DownOutlined } from "@ant-design/icons";
import Typewriter from "typewriter-effect";
import logo from "../img/Hotelhive.png";
import styles from "../styles/CarouselComponent.module.css";

const CarouselComponent = () => {

  const scrollIntoView = () => {
    document.getElementById('cont-nos').scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <Carousel arrows>
      <div>
        <Row justify="center" gutter={[16, 16]}>
          <Col xs={24} lg={24}>
            <div className={`${styles.imgBackground} ${styles.imgBackground1}`}>
              <div className={styles.title}>
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
                  <Col xs={0} sm={0} md={0} lg={9} xl={9}>
                    <h1 style={{ color: "#f4f1e8", fontSize: "100px" }}>
                      ¡Bienvenidos!
                    </h1>
                  </Col>
                </div>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                  <div className={styles.typewriterText}>
                    <Typewriter
                      options={{
                        strings: [
                          "Una experiencia única...",
                          "¿Estás preparado para vivirla?",
                        ],
                        autoStart: true,
                        loop: true,
                        delay: 150,
                      }}
                    />
                    <br />
                    <Button
                      className={styles.button}
                      type="primary"
                      shape="circle"
                      icon={<DownOutlined />}
                      onClick={scrollIntoView}
                    />
                  </div>
                </Col>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div>
        <Row justify="center" gutter={[16, 16]}>
          <Col xs={24} lg={24}>
            <div className={`${styles.imgBackground} ${styles.imgBackground3}`}>
              <div className={styles.title}>
                <Image
                  preview={false}
                  width={400}
                  height={"auto"}
                  src={logo}
                  alt="logo-hotel"
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
                  className={styles.button}
                  type="primary"
                  shape="circle"
                  icon={<DownOutlined />}
                  onClick={() =>
                    document
                      .getElementById("cont-nos")
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
            <div className={`${styles.imgBackground} ${styles.imgBackground4}`}>
              <div className={styles.title}>
                <Image
                  preview={false}
                  width={400}
                  height={"auto"}
                  src={logo}
                  alt="logo-hotel"
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
                  className={styles.button}
                  type="primary"
                  shape="circle"
                  icon={<DownOutlined />}
                  onClick={() =>
                    document
                      .getElementById("cont-nos")
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
            <div className={`${styles.imgBackground} ${styles.imgBackground2}`}>
              <div className={styles.title}>
                <Image
                  preview={false}
                  width={400}
                  height={"auto"}
                  src={logo}
                  alt="logo-hotel"
                />
                <Col justify="center" xs={24} sm={24} md={24} lg={24} xl={24}>
                  <h1 style={{ margin: "0", fontSize: "50px" }}>
                    <Typewriter
                      options={{
                        strings: ["Relajante...", "Familiar...", "Íntimo..."],
                        autoStart: true,
                        loop: true,
                        delay: 150,
                      }}
                    />
                  </h1>
                </Col>
                <Button
                  className={styles.button}
                  type="primary"
                  shape="circle"
                  icon={<DownOutlined />}
                  onClick={() =>
                    document
                      .getElementById("cont-nos")
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
