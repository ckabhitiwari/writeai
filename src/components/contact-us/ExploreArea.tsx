
import React from 'react';

const ExploreArea = () => {
  return (
    <>
      <section className="uxora-section-padding3">
        <div className="container">
          <div className="uxora-section-title center" data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});">
            <h2>Explore solutions customized for you</h2>
          </div>
          <div className="row" data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 400});">
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="uxora-iconbox-wrap">
                <div className="uxora-iconbox-icon">
                  <img src="assets/images/feature/icon13.svg" alt="" />
                </div>
                <div className="uxora-iconbox-content">
                  <h3>Our knowledge base</h3>
                  <p>Explore an extensive collection of knowledge, expertise & conveniently</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="uxora-iconbox-wrap">
                <div className="uxora-iconbox-icon">
                  <img src="assets/images/feature/icon14.svg" alt="" />
                </div>
                <div className="uxora-iconbox-content">
                  <h3>Discover our tutorials</h3>
                  <p>Watch and learn from market experts how to use our products effectively</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="uxora-iconbox-wrap">
                <div className="uxora-iconbox-icon">
                  <img src="assets/images/feature/icon15.svg" alt="" />
                </div>
                <div className="uxora-iconbox-content">
                  <h3>Join our community</h3>
                  <p>Collaborate, share insights, & cultivate relationships with community network</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ExploreArea;