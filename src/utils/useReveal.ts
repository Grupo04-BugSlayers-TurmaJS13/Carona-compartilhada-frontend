import { useEffect } from "react";

export function useReveal() {
  useEffect(() => {
    const revealEls = document.querySelectorAll<HTMLElement>(".reveal");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    revealEls.forEach((el) => io.observe(el));

    const heroEls = document.querySelectorAll<HTMLElement>(".hero .reveal");
    heroEls.forEach((el, i) => {
      setTimeout(() => el.classList.add("visible"), 80 + i * 100);
    });

    return () => io.disconnect();
  }, []);
}

export function useCountAnimation() {
  useEffect(() => {
    function animateCount(el: HTMLElement, target: number, duration = 1400) {
      let start: number | null = null;
      const step = (ts: number) => {
        if (!start) start = ts;
        const p = Math.min((ts - start) / duration, 1);
        const ease = 1 - Math.pow(1 - p, 3);
        el.textContent = String(Math.round(ease * target));
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }

    const countEls = document.querySelectorAll<HTMLElement>("[data-count]");

    const countObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const target = parseInt(
              (e.target as HTMLElement).dataset.count ?? "0",
            );
            animateCount(e.target as HTMLElement, target);
            countObs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.5 },
    );

    countEls.forEach((el) => countObs.observe(el));

    return () => countObs.disconnect();
  }, []);
}
