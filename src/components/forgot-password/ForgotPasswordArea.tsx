"use client";

import Link from "next/link";

const ForgotPasswordArea = () => {
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
                <h2>Reset password</h2>
              </div>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="uxora-contact-box box2 mt-50">
                  <div className="uxora-main-field">
                    <p>Email Address*</p>
                    <input type="text" />
                  </div>
                  <button className="uxora-default-btn extra-btn d-block" type="button">Send reset link</button>
                  <div className="form-bottom-text">
                    <p>Remember password?
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

export default ForgotPasswordArea;