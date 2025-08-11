"use client";

import { useEffect } from "react";

const PricingArea = () => {

  useEffect(() => {
    const toggleBtn = document.querySelector<HTMLDivElement>("#l5-pricing-btn .toggle-btn");
    const pricingTriggers = document.querySelectorAll<HTMLElement>("[data-pricing-trigger]");

    // Toggle between monthly-active and yearly-active
    const handleToggleClick = (e: Event) => {
      const target = e.target as HTMLElement;
      const parent = target.closest("#l5-pricing-btn");
      if (!parent) return;

      const isMonthly = parent.classList.contains("monthly-active");

      target.classList.toggle("clicked");
      parent.classList.remove(isMonthly ? "monthly-active" : "yearly-active");
      parent.classList.add(isMonthly ? "yearly-active" : "monthly-active");
    };

    // Handle pricing trigger toggle
    const handlePricingTriggerClick = (e: Event) => {
      const trigger = e.currentTarget as HTMLElement;
      const siblings = Array.from(trigger.parentElement?.children || []);

      siblings.forEach((sibling) => {
        (sibling as HTMLElement).classList.remove("active");
      });
      trigger.classList.add("active");

      const targetSelector = trigger.getAttribute("data-target");
      if (!targetSelector) return;

      const targetElement = document.querySelector<HTMLElement>(targetSelector);
      if (!targetElement) return;

      const isMonthly = targetElement.getAttribute("data-value-active") === "monthly";
      console.log("Currently monthly:", isMonthly);
      targetElement.setAttribute("data-value-active", isMonthly ? "yearly" : "monthly");
    };

    if (toggleBtn) {
      toggleBtn.addEventListener("click", handleToggleClick);
    }

    pricingTriggers.forEach((trigger) => {
      trigger.addEventListener("click", handlePricingTriggerClick);
    });

    // Cleanup on unmount
    return () => {
      if (toggleBtn) {
        toggleBtn.removeEventListener("click", handleToggleClick);
      }
      pricingTriggers.forEach((trigger) => {
        trigger.removeEventListener("click", handlePricingTriggerClick);
      });
    };
  }, []);

  return (
    <>

      <section className="uxora-section-padding">
        <div className="container" data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});">
          <div className="uxora-section-title center max-width-800" data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});">
            <h2>Pick a perfect pricing plan for your preference</h2>
          </div>
          <div className="pricing-btn">
            <label>Billed Monthly</label>
            <div className="toggle-btn">
              <input className="form-check-input btn-toggle price-deck-trigger" type="checkbox" id="flexSwitchCheckDefault" data-pricing-trigger data-target="#table-price-value" defaultChecked />
            </div>
            <label>Billed Annually <span>(10% Discount)</span></label>
          </div>
          <div className="uxora-pricing-wrap" id="table-price-value" data-pricing-dynamic data-value-active="monthly">
            <div className="uxora-pricing-item mt-50">
              <div className="uxora-pricing-title">
                <div className="uxora-pricing-header">
                  <h3>Starter Plan</h3>
                </div>
                <div className="uxora-pricing-price">
                  <div className="ux-price-value dynamic-value" data-active="$9" data-monthly="$9" data-yearly="$18"></div>
                  <p className="dynamic-value" data-active="/Per Month" data-monthly="/Per Month" data-yearly="/Per Yearly"></p>
                </div>
                <p>Freelancers, students, beginners looking for quick and easy content creation.</p>
              </div>
              <div className="uxora-pricing-body">
                <ul>
                  <li>10,000 AI-generated words per month</li>
                  <li>Basic grammar and spell-check</li>
                  <li>10+ Pre-built templates</li>
                  <li>Email support</li>
                  <li>Plagiarism detection (limited)</li>
                </ul>
              </div>
              <div className="uxora-pricing-btn">
                <a className="uxora-default-btn pricing-btn" href="contact-us.html">Choose a plan</a>
              </div>
              <div className="uxora-pricing-shape">
                <img src="assets/images/pricing/icon1.svg" alt="" />
              </div>
            </div>
            <div className="uxora-pricing-item mt-50">
              <div className="uxora-pricing-title">
                <div className="uxora-pricing-header">
                  <h3>Pro Plan</h3>
                </div>
                <div className="uxora-pricing-price">
                  <div className="ux-price-value dynamic-value" data-active="$29" data-monthly="$29" data-yearly="$48"></div>
                  <p className="dynamic-value" data-active="/Per Month" data-monthly="/Per Month" data-yearly="/Per Yearly"></p>
                </div>
                <p>Small businesses, professionals, and marketers needing scalable solutions.</p>
              </div>
              <div className="uxora-pricing-body">
                <ul>
                  <li>50,000 AI-generated words per month</li>
                  <li>Advanced grammar and readability</li>
                  <li>30+ Pre-built templates</li>
                  <li>SEO optimization tools</li>
                  <li>Plagiarism checker (unlimited)</li>
                  <li>Multilingual support</li>
                  <li>Priority support</li>
                </ul>
              </div>
              <div className="uxora-pricing-btn">
                <a className="uxora-default-btn pricing-btn" href="contact-us.html">Choose a plan</a>
              </div>
              <div className="uxora-pricing-shape">
                <img src="assets/images/pricing/icon2.svg" alt="" />
              </div>
            </div>
            <div className="uxora-pricing-item mt-50">
              <div className="uxora-pricing-title">
                <div className="uxora-pricing-header">
                  <h3>Enterprise Plan</h3>
                </div>
                <div className="uxora-pricing-price">
                  <div className="ux-price-value dynamic-value" data-active="$49" data-monthly="$49" data-yearly="$98"></div>
                  <p className="dynamic-value" data-active="/Per Month" data-monthly="/Per Month" data-yearly="/Per Yearly"></p>
                </div>
                <p>Large teams, agencies, and enterprises requiring advanced tools & customization.</p>
              </div>
              <div className="uxora-pricing-body">
                <ul>
                  <li>Unlimited AI-generated words</li>
                  <li>Team collaboration features</li>
                  <li>API access for seamless integration</li>
                  <li>Custom templates and workflows</li>
                  <li>Dedicated account manager</li>
                  <li>24/7 premium support</li>
                </ul>
              </div>
              <div className="uxora-pricing-btn">
                <a className="uxora-default-btn pricing-btn" href="contact-us.html">Choose a plan</a>
              </div>
              <div className="uxora-pricing-shape">
                <img src="assets/images/pricing/icon1.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default PricingArea;