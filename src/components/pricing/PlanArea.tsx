
import React from 'react';

const PlanArea = () => {
  return (
    <>
      <div className="uxora-section-padding bg-heading">
        <div className="container">
          <div className="row" data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 400});">
            <div className="col-lg-6 order-lg-2">
              <div className="uxora-content-thumb thumb3">
                <img src="assets/images/pricing/Integration.png" alt="" />
              </div>
            </div>
            <div className="col-lg-6 d-flex align-items-center">
              <div className="uxora-default-content pr-24">
                <h2>Our plans bring all your favorite tools</h2>
                <p className="uxora-default-data">Our plans are designed to fit right into your workflow. Uxora easily integrates with popular tools and ensuring a smooth content creation process without switching platforms.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlanArea;