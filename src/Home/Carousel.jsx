import React from "react";
import { Carousel } from "antd";


const CarouselComponent = () => {

  const titleStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
    height: '91vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0',
    color: '#ffff',
    fontSize: '60px',
    };

  const titleStyle1 = {
    ...titleStyle,
    backgroundImage:`url(${require("../img/gallery1.jpg")})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const titleStyle2 = {
    ...titleStyle,
    backgroundImage:`url(${require("../img/gallery2.jpg")})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const titleStyle3 = {
    ...titleStyle,
    backgroundImage:`url(${require("../img/gallery3.jpg")})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const titleStyle4 = {
    ...titleStyle,
    backgroundImage:`url(https://cdn.pixabay.com/photo/2016/10/18/09/02/hotel-1749602_960_720.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  const title = {
    color: '#ffff',
    width: '100%',
    height: '100%',
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  }
  return (
    <Carousel autoplay arrows>
      <div>
        <div style={titleStyle1}>
            <h1 style={title}>Title 1</h1>
        </div>
      </div>
      <div>
        <div style={titleStyle2}>
            <h1 style={title}>Title 1</h1>
        </div>
      </div>
      <div>
        <div style={titleStyle3}>
            <h1 style={title}>Title 1</h1>
        </div>
      </div>
      <div>
        <div style={titleStyle4}>
            <h1 style={title}>Title 1</h1>
        </div>
      </div>
      
    </Carousel>
  );
};

export default CarouselComponent;
