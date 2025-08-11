"use client";
import { useState } from "react";

const faq_data1 = [
  {
    question: "What is an AI writing tool?",
    answer: "An AI writing tool is software that uses artificial intelligence to assist in creating content, including blogs, emails & ads."
  },
  {
    question: "Who can use this tool?",
    answer: "It’s perfect for writers, marketers, entrepreneurs, students, & businesses looking to create high-quality content quickly."
  },
  {
    question: "Is the tool SEO-friendly?",
    answer: "Yes, it creates SEO-optimized content with keywords and readability improvements to help rank higher in SEO."
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes, we offer a free trial so you can test the features before committing to a plan."
  },
  {
    question: "Is it suitable for professional use?",
    answer: "Definitely! It’s designed for professionals to maintain high-quality, consistent, and error-free content."
  }
];

const faq_data2 = [
  {
    question: "What types of content can it create?",
    answer: "It can generate blogs, social media captions, emails, ads, product descriptions, and more."
  },
  {
    question: "Does it support multiple languages?",
    answer: "Yes, it supports several languages, making it ideal for global users."
  },
  {
    question: "Can it help with SEO?",
    answer: "Absolutely! It creates SEO-optimized content to boost search engine rankings."
  },
  {
    question: "Does it check for plagiarism?",
    answer: "Yes, it includes a plagiarism checker to ensure originality."
  }
];

const faq_data3 = [
  {
    question: "Is there a free trial available?",
    answer: "Yes, we offer a free trial so you can explore all features before committing."
  },
  {
    question: "What are the pricing plans?",
    answer: "We offer flexible pricing plans to suit individual and business needs. Visit our pricing page for details.."
  },
  {
    question: "Are there any hidden fees?",
    answer: "No, all fees are transparent, and you only pay for what you choose."
  }
];

const faq_data4 = [
  {
    question: "Is my data safe?",
    answer: "Yes, we use advanced encryption and security measures to protect your data."
  },
  {
    question: "Do you offer customer support?",
    answer: "Yes, we provide 24/7 customer support via email and live chat."
  },
  {
    question: "Can I cancel my subscription?",
    answer: "Absolutely! You can cancel your subscription at any time without penalties."
  }
];

const faq_data5 = [
  {
    question: "Can I edit the AI-generated content?",
    answer: "Yes, you can fully customize and edit the content to match your tone and style."
  },
  {
    question: "Does it adapt to my writing style?",
    answer: "Over time, the AI learns your preferences to better match your style."
  },
  {
    question: "How fast can it generate content?",
    answer: "It can produce high-quality drafts in seconds, saving you hours of work."
  }
];



const FaqArea = () => {

  const [activeIndex, setActiveIndex] = useState(0);
  const handleToggle = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(-1);
    } else {
      setActiveIndex(index);
    }
  };

  const [activeIndex2, setActiveIndex2] = useState(0);
  const handleToggle2 = (index: number) => {
    if (activeIndex2 === index) {
      setActiveIndex2(-1);
    } else {
      setActiveIndex2(index);
    }
  };

  const [activeIndex3, setActiveIndex3] = useState(0);
  const handleToggle3 = (index: number) => {
    if (activeIndex3 === index) {
      setActiveIndex3(-1);
    } else {
      setActiveIndex3(index);
    }
  };

  const [activeIndex4, setActiveIndex4] = useState(0);
  const handleToggle4 = (index: number) => {
    if (activeIndex4 === index) {
      setActiveIndex4(-1);
    } else {
      setActiveIndex4(index);
    }
  };

  const [activeIndex5, setActiveIndex5] = useState(0);
  const handleToggle5 = (index: number) => {
    if (activeIndex5 === index) {
      setActiveIndex5(-1);
    } else {
      setActiveIndex5(index);
    }
  };



  return (
    <>
      <div className="uxora-section-padding">
        <div className="container">
          <div className="row" data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});">
            <div className="col-lg-6">
              <div className="uxora-faq-tilte">
                <h2>General questions:</h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="uxora-faq-wrap1">
                {faq_data1.map((item, i) => (
                  <div key={i} className={`uxora-faq-item ${activeIndex === i ? "open" : ""}`}>
                    <div className="uxora-faq-header">
                      <h3 onClick={() => handleToggle(i)}>{item.question}</h3>
                      <div className="uxora-active-icon">
                        <img className="plasicon" src="assets/images/faq/mynus.svg" alt="" />
                        <img className="mynusicon" src="assets/images/faq/plas.svg" alt="" />
                      </div>                  </div>
                    <div className="uxora-faq-body">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="divided"></div>
          <div className="row" data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 400});">
            <div className="col-lg-6">
              <div className="uxora-faq-tilte">
                <h2>Features and functionality:</h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="uxora-faq-wrap1">

                {faq_data2.map((item, i) => (
                  <div key={i} className={`uxora-faq-item ${activeIndex2 === i ? "open" : ""}`}>
                    <div className="uxora-faq-header">
                      <h3 onClick={() => handleToggle2(i)}>{item.question}</h3>
                      <div className="uxora-active-icon">
                        <img className="plasicon" src="assets/images/faq/mynus.svg" alt="" />
                        <img className="mynusicon" src="assets/images/faq/plas.svg" alt="" />
                      </div>                  </div>
                    <div className="uxora-faq-body">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>
          <div className="divided"></div>
          <div className="row" data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});">
            <div className="col-lg-6">
              <div className="uxora-faq-tilte">
                <h2>Pricing and plans:</h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="uxora-faq-wrap1">
                {faq_data3.map((item, i) => (
                  <div key={i} className={`uxora-faq-item ${activeIndex3 === i ? "open" : ""}`}>
                    <div className="uxora-faq-header">
                      <h3 onClick={() => handleToggle3(i)}>{item.question}</h3>
                      <div className="uxora-active-icon">
                        <img className="plasicon" src="assets/images/faq/mynus.svg" alt="" />
                        <img className="mynusicon" src="assets/images/faq/plas.svg" alt="" />
                      </div>                  </div>
                    <div className="uxora-faq-body">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="divided"></div>
          <div className="row" data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 400});">
            <div className="col-lg-6">
              <div className="uxora-faq-tilte">
                <h2>Support and security:</h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="uxora-faq-wrap1">
                {faq_data4.map((item, i) => (
                  <div key={i} className={`uxora-faq-item ${activeIndex4 === i ? "open" : ""}`}>
                    <div className="uxora-faq-header">
                      <h3 onClick={() => handleToggle4(i)}>{item.question}</h3>
                      <div className="uxora-active-icon">
                        <img className="plasicon" src="assets/images/faq/mynus.svg" alt="" />
                        <img className="mynusicon" src="assets/images/faq/plas.svg" alt="" />
                      </div>                  </div>
                    <div className="uxora-faq-body">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="divided"></div>
          <div className="row" data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 600});">
            <div className="col-lg-6">
              <div className="uxora-faq-tilte">
                <h2>Performance and customization:</h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="uxora-faq-wrap1">
                {faq_data5.map((item, i) => (
                  <div key={i} className={`uxora-faq-item ${activeIndex5 === i ? "open" : ""}`}>
                    <div className="uxora-faq-header">
                      <h3 onClick={() => handleToggle5(i)}>{item.question}</h3>
                      <div className="uxora-active-icon">
                        <img className="plasicon" src="assets/images/faq/mynus.svg" alt="" />
                        <img className="mynusicon" src="assets/images/faq/plas.svg" alt="" />
                      </div>                  </div>
                    <div className="uxora-faq-body">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqArea;