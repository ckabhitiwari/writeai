 
"use client"
import { useEffect, useState } from "react";

interface StickyState {
  sticky: boolean;
}

const useSticky = (): StickyState | null => {
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const stickyHeader = () => {
      const header = document.querySelector("header");
      if (!header) return;

      const headerHeight = header.offsetHeight;
      const scroll = window.scrollY;

      if (scroll > headerHeight && scroll > lastScroll) {
        header.classList.add("hide-header");
      } else if (scroll < lastScroll) {
        header.classList.remove("hide-header");
      }

      setLastScroll(scroll);
    };

    const handleStickyMenu = () => {
      const stickyMenu = document.getElementById("sticky-menu");
      if (!stickyMenu) return;

      if (window.scrollY > 20) {
        stickyMenu.classList.add("sticky-menu");
      } else {
        stickyMenu.classList.remove("sticky-menu");
      }
    };

    const handleScroll = () => {
      stickyHeader();
      handleStickyMenu();
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", stickyHeader);
    window.addEventListener("load", stickyHeader);

    stickyHeader(); // Initial call

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", stickyHeader);
      window.removeEventListener("load", stickyHeader);
    };
  }, [lastScroll]);

  return null;
};

export default useSticky;

