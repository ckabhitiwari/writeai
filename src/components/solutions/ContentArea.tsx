
import React from 'react';

const ContentArea = () => {
  return (
    <>
      <section className="uxora-section-padding4">
        <div className="container">
          <div className="row" data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});">
            <div className="col-lg-6 order-lg-2">
              <div className="uxora-content-thumb">
                <img src="assets/images/solution/thumb2.png" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="uxora-default-content pr-110">
                <h2>Flexible use for all professionals</h2>
                <p>Uxora is designed to meet the diverse needs of professionals across industries. Its AI-powered features make content creation fast, easy, and effective.</p>
                <div className="mt-50">
                  <div className="uxora-sub-content pr-50">
                    <ul>
                      <li><span>Marketing Teams:</span> Create high-converting ad copy and email campaigns.</li>
                      <li><span>Business owners:</span> Generate website content, product descriptions, and reports.</li>
                      <li><span>Freelancers:</span> Scale your content creation without sacrificing quality.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContentArea;