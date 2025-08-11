"use client"
import Link from 'next/link';
import { useState } from 'react';
import MobileMenu from './MobileMenu';
import useSticky from '@/hooks/use-sticky';

const HeaderOne = () => {
  useSticky();
  const [openMenu, setOpenMenu] = useState(false);



  return (
    <>


      <header className="site-header uxora-header-section" id="sticky-menu">
        <div className="container">
          <div className="row gx-3 align-items-center justify-content-between">
            <div className="col-8 col-sm-auto ">
              <div className="header-logo">
                <Link href="/">
                  <img src="assets/images/logo/logo-dark.svg" alt="logo" />
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="uxora-main-menu-item">
                <nav className="main-menu menu-style1 d-none d-lg-block menu-left">
                  <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/solutions">Solutions</Link></li>
                    <li><Link href="/pricing">Pricing</Link></li>
                    <li className="menu-item-has-children">
                      <a href="#">Pages</a>
                      <ul className="sub-menu">
                        <li><Link href="/faq">FAQs</Link></li>
                        <li><Link href='/sign-in'>Sign In</Link></li>
                        <li><Link href='/sign-up'>Sign-Up</Link></li>
                        <li><Link href='/forgot-password'>Forgot Password</Link></li>
                      </ul>
                    </li>
                    <li><Link href="/contact-us">Contact</Link></li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-auto d-flex align-items-center">
              <div className="uxora-header-info-wraper2">
                <div className="uxora-header-info-content">
                  <ul>
                    <li><Link href="/sign-in">Login</Link></li>
                  </ul>
                </div>
                <a className="uxora-default-btn uxora-header-btn" href="sign-up.html">Try for free</a>
              </div>
              <div className="uxora-header-menu">
                <nav className="navbar site-navbar justify-content-between">
                  <button onClick={() => setOpenMenu(!openMenu)} className="uxora-menu-toggle d-inline-block d-lg-none">
                    <span></span>
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </>
  );
};

export default HeaderOne;