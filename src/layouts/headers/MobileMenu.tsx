"use client";
import Link from 'next/link';
import React, { useState } from 'react';

const MobileMenu = ({ openMenu, setOpenMenu }: any) => {
  const [openSubMenu, setOpenSubMenu] = useState(false);

  const handleWrapperClick = () => {
    setOpenMenu(false);
  };

  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };


  return (
    <>
      <div className={`uxora-menu-wrapper ${openMenu ? 'uxora-body-visible' : ''}`} onClick={handleWrapperClick}>

        <div className="uxora-menu-area text-center" onClick={stopPropagation}>
          <div className="uxora-menu-mobile-top">
            <div className="mobile-logo">
              <Link href="/">
                <img src="assets/images/logo/logo-dark.svg" alt="logo" />
              </Link>
            </div>
            <button className="uxora-menu-toggle mobile" onClick={() => setOpenMenu(!openMenu)}>
              <i className="ri-close-line"></i>
            </button>
          </div>

          <div className="uxora-mobile-menu">
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/solutions">Solutions</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
              <li className={`menu-item-has-children uxora-item-has-children ${openSubMenu ? 'uxora-active' : ''}`}>
                <a style={{ cursor: "pointer" }} onClick={() => setOpenSubMenu(!openSubMenu)}>
                  Accounts
                  <span className="uxora-mean-expand"></span>
                </a>
                <ul className={`sub-menu uxora-submenu ${openSubMenu ? 'uxora-open' : ''}`} style={{ display: openSubMenu ? 'block' : 'none' }}>
                  <li><Link href="/faq">FAQs</Link></li>
                  <li><Link href='/sign-in'>Sign In</Link></li>
                  <li><Link href='/sign-up'>Sign-Up</Link></li>
                  <li><Link href='/forgot-password'>Forgot Password</Link></li>
                </ul>
                <li><Link href="/contact-us">Contact</Link></li>
              </li>
            </ul>
          </div>
          <div className="uxora-mobile-menu-btn">
            <Link className="uxora-default-btn sm-size" href="/contact-us">Get in Touch</Link>
            <Link className="uxora-default-btn sm-size" href="/contact-us">Contact Us</Link>
          </div>
        </div>
      </div>

    </>
  );
};

export default MobileMenu;