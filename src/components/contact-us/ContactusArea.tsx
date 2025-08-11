"use client";

const ContactusArea = () => {
  return (
    <>

      <div className="uxora-section-padding">
        <div className="container">
          <div className="row" data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});">
            <div className="col-lg-6">
              <div className="uxora-default-content">
                <h2>Get in touch with our support team</h2>
                <p>Book an appointment with our team now! If you have any questions about our AI writing tool, contact our team.</p>
                <div className="uxora-conatct-info mt-50">
                  <ul>
                    <li>
                      <a href="mailto:name@gmail.com">
                        <span>Email:</span> support@gmail.com
                      </a>
                    </li>
                    <li>
                      <a href="tel:+088">
                        <span>Phone:</span> (123) 456-7890
                      </a>
                    </li>
                    <li><span>Chat:</span> Drop us a line</li>
                    <li><span>Address:</span> 456 Elm Street, Los Angeles, CA 90001, USA </li>
                  </ul>
                </div>
                <div className="uxora-contact-shape">
                  <img src="assets/images/shape/contact-shape.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="uxora-contact-box">
                <h3>Fill out the form below</h3>
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="uxora-main-field">
                    <p>Name</p>
                    <input type="text" />
                  </div>
                  <div className="uxora-main-field">
                    <p>Email</p>
                    <input type="email" />
                  </div>
                  <div className="uxora-main-field">
                    <p>Phone number</p>
                    <input type="text" />
                  </div>
                  <p>Message</p>
                  <div className="uxora-main-field-textarea">
                    <textarea name="textarea"></textarea>
                  </div>
                  <button className="uxora-default-btn" type="button">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactusArea;