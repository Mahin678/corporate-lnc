import React from 'react';
import './Header.css';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../../image/business-woman-looking-professional-laptop-working-marketing-graphs-project.38b4f520.jpg';
import img2 from '../../../image/landmarks-modern-city.5e2272d6.jpg';
import img3 from '../../../image/people-business-meeting-high-angle.71049f7f.jpg';
import img4 from '../../../image/New Year.png';

const Header = () => {
	let text =
		'Let us communicate with the larger market of finance to ensure your capital flows in rhythm, while you can entirely focus on your other priorities... Let us like be your extended family who make sure that all your wings get stronger as each day passes by!';
	return (
		<div>
			<Carousel indicators={false} interval="3000">
				<Carousel.Item>
					<img src={img4} className=" slide-img d-block w-100" alt="..." />

					<Carousel.Caption>
						<div className="py-5">
							<div className="carousel-caption ">
								<h1>
									Happy New Year !! ,YOU CAN, IF YOU BELIEVE YOU CAN
								</h1>
								<h3>{text}</h3>
							</div>
						</div>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img src={img1} className=" slide-img d-block w-100" alt="..." />

					<Carousel.Caption>
						<div className="py-5">
							<div className="carousel-caption ">
								<h1>YOU CAN, IF YOU BELIEVE YOU CAN</h1>
								<h3>{text}</h3>
							</div>
						</div>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img src={img2} className=" slide-img d-block w-100" alt="..." />

					<Carousel.Caption>
						<div className="py-5">
							<div className="carousel-caption   ">
								<h1>YOU CAN, IF YOU BELIEVE YOU CAN</h1>
								<h3>{text}</h3>
							</div>
						</div>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img src={img3} className=" slide-img d-block w-100" alt="..." />
					<Carousel.Caption>
						<div className="py-5">
							<div className="carousel-caption  ">
								<h1>YOU CAN, IF YOU BELIEVE YOU CAN</h1>
								<h3>{text}</h3>
							</div>
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
			<div className="text-center">
				<img className="new-year-img" src={img4} alt="" />
			</div>
		</div>
	);
};

export default Header;
