"use client";

import Link from 'next/link';
import React, { useState } from 'react';

const SignupArea = () => {


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
                <img src="assets/images/content/thumb7.png" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="uxora-contact-title">
                <h2>Create an account</h2>
              </div>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="uxora-contact-box box2 mt-50">
                  <div className="uxora-main-field">
                    <p>Your name*</p>
                    <input type="text" />
                  </div>
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
                      I agree to the <span>Terms</span> and <span>Conditions of Privacy</span>
                    </label>
                  </div>
                  <button className="uxora-default-btn d-block" type="button">Create account</button>
                  <div className="form-bottom-text">
                    <p>Already have an account?
                      <Link href='/sign-in'>Login now</Link>
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

export default SignupArea;