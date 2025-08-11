import { useEffect } from 'react';

const useScrollNavigation = () => {
  useEffect(() => {
    const links = document.querySelectorAll('#scroll-btn a.questions');

    const handleClick = (e: Event) => {
      e.preventDefault();
      const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute('href')!;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.getBoundingClientRect().top + window.scrollY,
          behavior: 'smooth'
        });

        links.forEach(link => link.classList.remove('active'));
        (e.currentTarget as HTMLElement).classList.add('active');
      }
    };

    const scrNav = () => {
      const scrollY = window.scrollY;
      document.querySelectorAll('section').forEach(section => {
        const id = section.getAttribute('id');
        const offsetTop = section.offsetTop - 1;
        const height = section.offsetHeight;
        if (scrollY >= offsetTop && scrollY < offsetTop + height && id) {
          links.forEach(link => link.classList.remove('active'));
          const activeLink = document.querySelector(`#scroll-btn [data-scroll="${id}"]`);
          if (activeLink) activeLink.classList.add('active');
        }
      });
    };

    // Attach click listeners
    links.forEach(link => {
      link.addEventListener('click', handleClick);
    });

    // Attach scroll listener
    window.addEventListener('scroll', scrNav);
    scrNav(); // Run on mount

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleClick);
      });
      window.removeEventListener('scroll', scrNav);
    };
  }, []);
};

export default useScrollNavigation;
