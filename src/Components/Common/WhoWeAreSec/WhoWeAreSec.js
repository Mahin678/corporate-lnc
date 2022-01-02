import React from 'react';
import './WhoWeAreSec.css';
import im1 from '../../../image/p1.jpeg';
import im2 from '../../../image/p2.jpeg';
import im3 from '../../../image/p3.jpeg';
import bg1 from '../../../image/bg.jpeg';
const WhoWeAreSec = () => {
	return (
		<div className="WhoWeAre-main">
			<div className="container-lg">
				<h2 className="WhoWeAre-main__title text-center pt-5 pb-2">
					Who We Are
				</h2>
				<div className="WhoWeAre-main__Desc">
					<img src={bg1} alt="large-img" />
					<span>We are ensure about our Quality</span>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit.
						Accusantium ex perferendis optio nemo nam architecto
						molestiae, temporibus non omnis iure.
					</p>
				</div>
				<div className="WhoWeAre-main__PersonMain">
					<div className="WhoWeAre-main__person">
						<img src={im1} alt="person-1" />
						<div className="WhoWeAre-main__person__info">
							<span className="WhoWeAre-main__person__name">
								Mr. David Milan
							</span>
							<span className="WhoWeAre-main__person__name">
								Dr. Professor
							</span>
						</div>
					</div>
					<div className="WhoWeAre-main__person">
						<img src={im2} alt="person-2" />
						<div className="WhoWeAre-main__person__info">
							<span className="WhoWeAre-main__person__name">
								Mr. David Milan
							</span>
							<span className="WhoWeAre-main__person__name">
								Dr. Professor
							</span>
						</div>
					</div>
					<div className="WhoWeAre-main__person">
						<img src={im3} alt="person-3" />
						<div className="WhoWeAre-main__person__info">
							<span className="WhoWeAre-main__person__name">
								Mr. David Milan
							</span>
							<span className="WhoWeAre-main__person__name">
								Dr. Professor
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WhoWeAreSec;
