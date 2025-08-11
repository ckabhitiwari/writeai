"use client";
import Link from "next/link";
import { useState } from "react";

const DemoSidebar = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div className="menu-bar" onClick={() => setIsActive(!isActive)} >
        8 demos
      </div>

      <div className={`uxora-offcanves-sidebar ${isActive ? "active" : ""}`}>
        <span className="close" onClick={() => setIsActive(!isActive)}><img src="assets/images/close-white.svg" alt="" /></span>
        <h3 className="uxora-sidemenu-title">8 unique demos</h3>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="uxora-demos-wrap">
                <Link href="https://uxora-nextjs-home-1.vercel.app">
                  <div className="uxora-demos-item">
                    <img src="assets/images/demo/demo1.png" alt="" />
                  </div>
                  <div className="uxora-demo-title">
                    <h3>Digital Agency</h3>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="uxora-demos-wrap">
                <Link href="https://uxora-nextjs-home-2.vercel.app">
                  <div className="uxora-demos-item">
                    <img src="assets/images/demo/demo2.png" alt="" />
                  </div>
                  <div className="uxora-demo-title">
                    <h3>SEO Software</h3>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="uxora-demos-wrap">
                <Link href="https://uxora-nextjs-home-3.vercel.app">
                  <div className="uxora-demos-item">
                    <img src="assets/images/demo/demo3.png" alt="" />
                  </div>
                  <div className="uxora-demo-title">
                    <h3>Startup</h3>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="uxora-demos-wrap">
                <Link href="https://uxora-nextjs-home-4.vercel.app">
                  <div className="uxora-demos-item">
                    <img src="assets/images/demo/demo4.png" alt="" />
                  </div>
                  <div className="uxora-demo-title">
                    <h3>Marketing Automation</h3>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="uxora-demos-wrap">
                <Link href="https://uxora-nextjs-home-5.vercel.app">
                  <div className="uxora-demos-item">
                    <img src="assets/images/demo/demo5.png" alt="" />
                  </div>
                  <div className="uxora-demo-title">
                    <h3>Crypto App</h3>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="uxora-demos-wrap">
                <Link href="https://uxora-nextjs-home-6.vercel.app">
                  <div className="uxora-demos-item">
                    <img src="assets/images/demo/demo6.png" alt="" />
                  </div>
                  <div className="uxora-demo-title">
                    <h3>AI Content Writing Tool</h3>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="uxora-demos-wrap">
                <Link href="https://uxora-nextjs-home-7.vercel.app">
                  <div className="uxora-demos-item">
                    <img src="assets/images/demo/demo7.png" alt="" />
                  </div>
                  <div className="uxora-demo-title">
                    <h3>Task Management Software</h3>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="uxora-demos-wrap">
                <Link href="https://uxora-nextjs-home-8.vercel.app">
                  <div className="uxora-demos-item">
                    <img src="assets/images/demo/demo8.png" alt="" />
                  </div>
                  <div className="uxora-demo-title">
                    <h3>Webinar and Virtual Event Platform</h3>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`offcanvas-overlay ${isActive ? 'active' : ''}`} onClick={() => setIsActive(false)}></div>

    </>
  );
};

export default DemoSidebar;