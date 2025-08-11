"use client";

import { useState } from "react";

const faq_data = [
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


const FaqAreaHomeOne = () => {

  const [activeIndex, setActiveIndex] = useState(0);
  const handleToggle = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(-1);
    } else {
      setActiveIndex(index);
    }
  };



  return (
    <>
      <section className="uxora-section-padding bg-light2">
        <div className="container">
          <div className="row" data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});">
            <div className="col-lg-6">
              <div className="uxora-default-content">
                <h2>Got any questions just ask us directly</h2>
                <p>If you have any questions about this AI writing tool, our experts are able to answer all your questions as soon as possible.</p>
                <img src="assets/images/faq/thumb1.png" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="uxora-faq-wrap1">
                {faq_data.map((item, i) => (
                  <div className={`uxora-faq-item ${i === 4 && 'm-0'} ${activeIndex === i ? "open" : ""}`} key={i}>
                    <div className="uxora-faq-header">
                      <h3 onClick={() => handleToggle(i)}>{item.question}</h3>
                      <div className="uxora-active-icon">
                        <img className="plasicon" src="assets/images/faq/mynus.svg" alt="" />
                        <img className="mynusicon" src="assets/images/faq/plas.svg" alt="" />
                      </div>
                    </div>
                    <div className="uxora-faq-body">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                ))} 
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqAreaHomeOne;