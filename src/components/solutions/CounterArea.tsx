"use client";

import Count from "@/common/count";

const counter_data = [
  { symbol: '+', value: 25, label: "Pre-built templates" },
  { symbol: '%', value: 70, label: "Faster optimization" },
  { symbol: 'x', value: 10, label: "Faster content writing" },
  { symbol: '/7', value: 24, label: "AI availability support" },
]

const CounterArea = () => {
  return (
    <>
      <div className="uxora-counter-section bg-heading">
        <div className="container">
          <div className="uxora-counter-wrap" data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});">
            {counter_data.map((item, i) => (
              <div key={i} className="uxora-counter-item">
                <h2 className="uxora-counter-data">
                  <Count number={item.value} text={item.symbol} />
                </h2>
                <p>{item.label}</p>
              </div>
            ))} 
          </div>
        </div>
      </div>
    </>
  );
};

export default CounterArea;