
import React from 'react';

const TestimonialAreaHomeOne = () => {
  return (
    <>
      <div className="uxora-section-padding uxora-t-section">
        <div className="container">
          <div className="uxora-section-title center max-width-750" data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});">
            <h2>Users love uxora and share their stories</h2>
          </div>
          <div className="row" data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 400});">
            <div className="col-lg-6">
              <div className="uxora-t-wrap pb-24">
                <div className="uxora-t-ratting">
                  <img src="assets/images/testimonial/ratings.svg" alt="" />
                </div>
                <div className="uxora-t-content">
                  <h3>“This AI writing tool has completely transformed my workflow. It also saves me hours every week and delivers high-quality content every time. Absolutely love it!”</h3>
                </div>
                <div className="uxora-t-author">
                  <div className="uxora-t-author-thumb">
                    <img src="assets/images/testimonial/author1.png" alt="" />
                  </div>
                  <div className="uxora-t-author-data">
                    <p>Emily Rubik – <span>Content Strategist</span></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="uxora-t-wrap">
                <div className="uxora-t-ratting">
                  <img src="assets/images/testimonial/ratings.svg" alt="" />
                </div>
                <div className="uxora-t-content">
                  <h3>“Finally, a tool that understands my needs! I was skeptical at first, but this AI tool is a game-changer. It not only improves my writing but also sparks new ideas when I’m stuck.”</h3>
                </div>
                <div className="uxora-t-author">
                  <div className="uxora-t-author-thumb">
                    <img src="assets/images/testimonial/author2.png" alt="" />
                  </div>
                  <div className="uxora-t-author-data">
                    <p>David Paul - <span>Freelance Writer</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialAreaHomeOne;