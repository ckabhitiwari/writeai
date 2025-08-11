
import React from 'react';

const CtaAreaHomeOne = () => {
  return (
    <>
      <div className="uxora-cta-section accent-bg">
        <div className="container">
          <div className="uxora-cta-content" data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});">
            <h2>Ready to elevate your writing? Try it now!</h2>
            <p className="uxora-default-data">Uxora is an advanced AI writing tool designed to help you create high-quality content quickly and effortlessly with smart features.</p>
            <div className="uxora-cta-btn mt-50">
              <a className="uxora-default-btn" href="#">Start writing for free</a>
              <a className="uxora-default-btn" href="#">Get a demo</a>
            </div>
          </div>
          <div className="mt-50">
            <div className="uxora-cta-data">
              <ul>
                <li>
                  <img src="assets/images/shape/time.svg" alt="" />
                  <p>Lowest price per plan</p>
                </li>
                <li>
                  <img src="assets/images/shape/time.svg" alt="" />
                  <p>Easy setup that only takes minutes</p>
                </li>
                <li>
                  <img src="assets/images/shape/time.svg" alt="" />
                  <p>You can cancel anytime</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="uxora-cta-shape">
          <img src="assets/images/shape/shape1.svg" alt="" />
        </div>
      </div>
    </>
  );
};

export default CtaAreaHomeOne;