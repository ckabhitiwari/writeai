"use client";
import { useRouter } from "next/router";


import { useEffect } from "react";


const PLAN_TO_PRICE: Record<string, string> = {
  starter: "price_1Rtb80SBODWesqRmlLbtpVk5",
  pro: "price_1RtbCUSBODWesqRm2JAs9qTT",
  enterprise: "price_1RtbD0SBODWesqRmmuwNfrt0",
};

async function startCheckout(planKey: keyof typeof PLAN_TO_PRICE) {
  // Optional: verify logged-in via your cookie/JWT check endpoint
  const res = await fetch("/api/checkout_sessions", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ plan: planKey }),
  });

  if (res.status === 401) {
    // not logged in → redirect to login and come back
    window.location.href = `/sign-in?redirectTo=/pricing`;
    return;
  }

  const data = await res.json();
  if (data.url) window.location.href = data.url;
  else alert(data.error || "Unable to start checkout");
}

const PricingArea = () => {


  return (
    <>

      <section className="uxora-section-padding">
        <div className="container" data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});">
          <div className="uxora-section-title center max-width-800" data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});">
            <h2>Pick a perfect pricing plan for your preference</h2>
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
                <button
                  type="button"
                  className="uxora-default-btn pricing-btn"
                  onClick={() => startCheckout("starter")}
                >
                  Choose a plan
                </button>
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
                <button
                  type="button"
                  className="uxora-default-btn pricing-btn"
                  onClick={() => startCheckout("pro")}
                >
                  Choose a plan
                </button>
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
                <button
                  type="button"
                  className="uxora-default-btn pricing-btn"
                  onClick={() => startCheckout("enterprise")}
                >
                  Choose a plan
                </button>
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