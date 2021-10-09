import React from "react";
import './Header.css'
import Carousel from 'react-bootstrap/Carousel'
const Header = () => {
  return (
    <div>
      <Carousel indicators={false} interval="3000" >
  <Carousel.Item>
  <img
              src="https://i.ibb.co/tmM2WGM/office.png"
              className=" slide-img d-block w-100"
              alt="..."
            />
            
        
    <Carousel.Caption>
    <div className="carousel-caption ">
              <h1>YOU CAN, IF YOU BELIVE YOU CAN</h1>
              <h3>If people wanted to improve themselves instead of saving the whole world,</h3>
            </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img
              src="https://i.ibb.co/tmM2WGM/office.png"
              className=" slide-img d-block w-100"
              alt="..."
            />

    <Carousel.Caption>
    <div className="carousel-caption  ">
              <h1>YOU CAN, IF YOU BELIVE YOU CAN</h1>
              <h3>If people wanted to improve themselves instead of saving the whole world,</h3>
            </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img
              src="https://i.ibb.co/tmM2WGM/office.png"
              className=" slide-img d-block w-100"
              alt="..."
            />
    <Carousel.Caption>
    <div className="carousel-caption ">
              <h1>YOU CAN, IF YOU BELIVE YOU CAN</h1>
              <h3>If people wanted to improve themselves instead of saving the whole world,</h3>
            </div>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      {/* <div
        id="carouselExampleControls"
        className="carousel slide carousel-fade"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://i.ibb.co/tmM2WGM/office.png"
              className=" slide-img d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h1>YOU CAN, IF YOU BELIVE YOU CAN</h1>
              <h3>If people wanted to improve themselves instead of saving the whole world,</h3>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://i.ibb.co/NSssWRN/content.png"
              className=" slide-img d-block w-100"
              alt="..."
            />
               <div className="carousel-caption d-none d-md-block">
              <h1>YOU CAN, IF YOU BELIVE YOU CAN</h1>
              <h3>If people wanted to improve themselves instead of saving the whole world,</h3>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://i.ibb.co/BVFGFKv/office-2.jpg"
              className=" slide-img d-block w-100"
              alt="..."
            />
               <div className="carousel-caption d-none d-md-block">
              <h1>YOU CAN, IF YOU BELIVE YOU CAN</h1>
              <h3>If people wanted to improve themselves instead of saving the whole world,</h3>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div> */}
    </div>
  );
};

export default Header;
