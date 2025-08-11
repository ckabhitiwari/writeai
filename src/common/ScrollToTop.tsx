"use client" 

import { useEffect } from "react";

const ScrollToTop = () => {
  useEffect(() => {
    const progressPath = document.querySelector(".progress-wrap path") as SVGPathElement;
    if (!progressPath) return;

    const pathLength = progressPath.getTotalLength();
    progressPath.style.transition = "none";
    progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
    progressPath.style.strokeDashoffset = `${pathLength}`;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = "stroke-dashoffset 10ms linear";

    const updateProgress = () => {
      const scroll = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = pathLength - (scroll * pathLength) / height;
      progressPath.style.strokeDashoffset = `${progress}`;
    };

    const handleScroll = () => {
      updateProgress();

      const progressWrap = document.querySelector(".progress-wrap");
      if (!progressWrap) return;

      if (window.scrollY > 50) {
        progressWrap.classList.add("active-progress");
      } else {
        progressWrap.classList.remove("active-progress");
      }
    };

    const handleClick = (event: Event) => {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    updateProgress();
    window.addEventListener("scroll", handleScroll);

    const progressWrap = document.querySelector(".progress-wrap");
    progressWrap?.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      progressWrap?.removeEventListener("click", handleClick);
    };
  }, []);

  return ( 
    <div className="paginacontainer">
    <div className="progress-wrap">
      <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
      </svg>
      <div className="top-arrow">
        <svg width="12" height="20" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.999999 1L8 8L1 15" stroke="#142D6F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  </div>
  );
};

export default ScrollToTop;
