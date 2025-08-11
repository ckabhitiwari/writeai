"use client";
import VideoPopup from '@/modals/video-popup';
import React, { useState } from 'react';

const HeroAreaHomeOne = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <div className="uxora-hero-section light-bg">
        <div className="container">
          <div className="row" data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});">
            <div className="col-lg-7">
              <div className="uxora-hero-content">
                <h1 className="title">Write smarter, faster, and better—powered by AI!</h1>
                <p>Unleash the power of AI to effortlessly create engaging content. Whether you're a marketer, blogger, or business owner, our AI writing tool streamlines your writing process, saves time, and boosts creativity.</p>
                <div className="uxora-hero-btn mt-50">
                  <a href="contact-us.html" className="uxora-default-btn">Start writing for free</a>
                  <a className="play-btn video-init"
                    onClick={() => setIsVideoOpen(true)}
                    style={{ cursor: "pointer" }}>
                    <img src="assets/images/hero/play-btn.svg" alt="" />Watch video
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="uxora-hero-thumb">
                <img src="assets/images/hero/hero1.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"Q5PG0rMXgvw"}
      />
      {/* video modal end */}
    </>
  );
};

export default HeroAreaHomeOne;