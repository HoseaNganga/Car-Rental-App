import React from "react";
import icon1 from "../../../ImageAssests/testimonials/pfp1.jpg";
import icon2 from "../../../ImageAssests/testimonials/pfp2.jpg";
import "./HomeTestimonials.css";
const HomeTestimonials = () => {
  return (
    <div className="homeTestimonials">
      <h2>Reviewed by People</h2>
      <h3>Client's Testimonials</h3>
      <h6>
        Discover the positive impact we've made on the our clients by reading
        through their testimonials. Our clients have experienced our service and
        results, and they're eager to share their positive experiences with you.
      </h6>
      <div className="flexHomeTestimonials">
        <div className="potter">
          <h4>
            "We rented a car from this website and had an amazing experience!
            The booking was easy and the rental rates were very affordable. "
          </h4>
          <div className="flexHomeTestimonialImg">
            <div className="homeTestimonialImg">
              <img src={icon1} alt="icon 1" />
            </div>
            <div className="testimonialDescription">
              <h5>Goju Satoru</h5>
              <h6>Shibuya</h6>
            </div>
          </div>
        </div>
        <div className="geto">
          <h4>
            "The car was in great condition and made our trip even better.
            Highly recommend for this car rental website! "
          </h4>
          <div className="flexHomeTestimonialImg">
            <div className="homeTestimonialImg">
              <img src={icon2} alt="icon 2" />
            </div>
            <div className="testimonialDescription">
              <h5>Geto Satoru</h5>
              <h6>Shibuya</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTestimonials;
