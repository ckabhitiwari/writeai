"use client";
import Link from 'next/link';
import React, { useState } from 'react';

const SigninArea = () => {

  const [passwordType, setPasswordType] = useState('password');
  const togglePasswordVisibility = () => {
    setPasswordType(passwordType === 'password' ? 'text' : 'password');
  }



  return (
    <>

      <div className="uxora-section-padding5 bg-light2">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="uxora-content-thumb">
                <img src="assets/images/content/thumb6.png" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="uxora-contact-title">
                <h2>Welcome back</h2>
              </div>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="uxora-contact-box box2 mt-50">
                  <div className="uxora-main-field">
                    <p>Email Address*</p>
                    <input type="text" />
                  </div>
                  <div className="uxora-main-field">
                    <p>Password*</p>
                    <input
                      id="password-field"
                      className="light-bg form-control"
                      type={passwordType}
                      name="password"
                      defaultValue={'Min 8 characters'}
                    />
                    <div
                      className={`fa fa-fw field-icon toggle-password ${passwordType === 'password' ? 'fa-eye-slash' : 'fa-eye'}`}
                      onClick={togglePasswordVisibility}
                    ></div>
                  </div>
                  <div className="uxora-form-box forgot-password">
                    <input type="checkbox" id="css" />
                    <label htmlFor="css">
                      Remember me
                    </label>
                    <a href="#">Forget your password?</a>
                  </div>
                  <button className="uxora-default-btn d-block" type="button">Login now</button>
                  <div className="form-bottom-text">
                    <p>Don’t have an account?
                      <Link href='/sign-in'>Create an account</Link>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SigninArea;