import React from 'react';
import './ServiceCard.css'
const ServiceCard = () => {
    return (
        <div className="serviceCar-main py-lg-5 my-lg-5 ">
           <div className="container-lg">
           <h2 className="serviceCar-main__Title mb-lg-4 text-center" >Service Card</h2>
            <p className="serviceCar-main__Desc mb-lg-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, maiores eum? Accusamus incidunt molestiae, tempora eveniet veniam inventore excepturi assumenda?
            </p>
            <div className="serviceCar-main__Card  mt-lg-5">
                <div className="serviceCar-main__card__item service-one-style">
                    <div className="serviceCar-main__item__icon">
                    <img src="https://www.trustnota.com/hubfs/icon_checking-1.svg" alt="service-icon-1" />
                    </div>
                    <h6 className="serviceCar-main__item__title" >
                        Service Title
                    </h6>
                    <p className="serviceCar-main__item__desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, modi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus atque 
                    </p>
                    <a href="#" className="serviceCar-main__item__btn">Learn More</a>
                </div >
                <div className="serviceCar-main__card__item service-two-style">
                <div className="serviceCar-main__item__icon">
                        <img src="https://www.trustnota.com/hubfs/icon_checking-1.svg" alt="service-icon-1" />
                    </div>
                    <h6 className="serviceCar-main__item__title" >
                        Service Title
                    </h6>
                    <p className="serviceCar-main__item__desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, modi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus atque 
                    </p>
                    <a href="#" className="serviceCar-main__item__btn">Learn More</a>
                </div>
                <div className="serviceCar-main__card__item service-three-style">
                <div className="serviceCar-main__item__icon">
                        <img src="https://www.trustnota.com/hubfs/icon_checking-1.svg" alt="service-icon-1" />
                    </div>
                    <h6 className="serviceCar-main__item__title" >
                        Service Title
                    </h6>
                    <p className="serviceCar-main__item__desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, modi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus atque 
                    </p>
                    <a href="#" className="serviceCar-main__item__btn">Learn More</a>
                </div>
            </div>
           </div>
        </div>
    );
};

export default ServiceCard;