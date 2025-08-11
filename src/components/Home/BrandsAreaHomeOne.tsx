"use client";
import React from 'react';
import Slider from 'react-slick';
// slick css
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  speed: 5000,
  autoplaySpeed: 0,
  arrows: false,
  pauseOnHover: false,
  cssEase: 'linear',
  responsive: [{
    breakpoint: 1399,
    settings: {
      slidesToShow: 4
    }
  }, {
    breakpoint: 991,
    settings: {
      slidesToShow: 3
    }
  }, {
    breakpoint: 767,
    settings: {
      slidesToShow: 2
    }
  }, {
    breakpoint: 575,
    settings: {
      slidesToShow: 1
    }
  }]
}

const BrandsAreaHomeOne = () => {
  return (
    <>
      <div className="uxora-brand-section">
        <Slider {...settings} className="uxora-brand-slider-init">
          <div className="uxora-brand-slider-item">
            <img src="assets/images/brand/b1.svg" alt="" />
          </div>
          <div className="uxora-brand-slider-item">
            <img src="assets/images/brand/b4.svg" alt="" />
          </div>
          <div className="uxora-brand-slider-item">
            <img src="assets/images/brand/b3.svg" alt="" />
          </div>
          <div className="uxora-brand-slider-item">
            <img src="assets/images/brand/b5.svg" alt="" />
          </div>
          <div className="uxora-brand-slider-item">
            <img src="assets/images/brand/b1.svg" alt="" />
          </div>
          <div className="uxora-brand-slider-item">
            <img src="assets/images/brand/b4.svg" alt="" />
          </div>
          <div className="uxora-brand-slider-item">
            <img src="assets/images/brand/b3.svg" alt="" />
          </div>
          <div className="uxora-brand-slider-item">
            <img src="assets/images/brand/b5.svg" alt="" />
          </div>
          <div className="uxora-brand-slider-item">
            <img src="assets/images/brand/b1.svg" alt="" />
          </div>
          <div className="uxora-brand-slider-item">
            <img src="assets/images/brand/b4.svg" alt="" />
          </div>
          <div className="uxora-brand-slider-item">
            <img src="assets/images/brand/b3.svg" alt="" />
          </div>
          <div className="uxora-brand-slider-item">
            <img src="assets/images/brand/b5.svg" alt="" />
          </div>
          <div className="uxora-brand-slider-item">
            <img src="assets/images/brand/b1.svg" alt="" />
          </div>
          <div className="uxora-brand-slider-item">
            <img src="assets/images/brand/b4.svg" alt="" />
          </div>
          <div className="uxora-brand-slider-item">
            <img src="assets/images/brand/b3.svg" alt="" />
          </div>
          <div className="uxora-brand-slider-item">
            <img src="assets/images/brand/b5.svg" alt="" />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default BrandsAreaHomeOne;