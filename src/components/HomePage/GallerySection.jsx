import React, { useEffect, useRef, useState } from "react";

export default function GallerySection() {
  const PINK = "#E066E6";
  const LIME = "#CCFF66";
  const SLIDES = [
    { before: "/s-before.jpeg", after: "/s-after.jpeg" },
    { before: "/s1-before.jpeg", after: "/s1-after.jpeg" },
    { before: "/s2-before.jpeg", after: "/s2-after.jpeg" },
    { before: "/s3-before.jpeg", after: "/s3-after.jpeg" },
  ];

  const [index, setIndex] = useState(0);
  const timer = useRef(null);
  const touchStartX = useRef(null);

  const goTo = (i) => setIndex((prev) => (i + SLIDES.length) % SLIDES.length);
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  useEffect(() => {
    timer.current && clearInterval(timer.current);
    timer.current = setInterval(next, 5000);
    return () => timer.current && clearInterval(timer.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) (dx < 0 ? next : prev)();
    touchStartX.current = null;
  };

  const slide = SLIDES[index];

  return (
    <section id="gallery" className="py-20 bg-background scroll-m-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className="font-space-grotesk font-bold text-4xl md:text-5xl mb-4"
            style={{ color: PINK }}
          >
            Our Work Gallery
          </h2>
          <p className="font-dm-sans text-xl text-muted-foreground max-w-2xl mx-auto">
            See the transformation - before and after examples of our
            professional repair work.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div
            className="group rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md p-6 transition-all duration-500"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            style={{
              border: "2px solid transparent",
            }}
          >
            <div
              className="transition-all duration-500 rounded-2xl"
              style={{
                border: "2px solid transparent",
              }}
            >
              {/* Glow on hover using group-hover */}
              <style jsx>{`
                .group:hover {
                  border-color: ${PINK};
                  box-shadow: 0 0 25px ${PINK};
                }
              `}</style>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center">
                  <h4
                    className="font-dm-sans font-semibold text-lg mb-4"
                    style={{ color: LIME }}
                  >
                    Before
                  </h4>
                  <div className="relative aspect-[3/2] rounded-xl overflow-hidden shadow-md">
                    <img
                      alt="Before repair"
                      loading="lazy"
                      className="object-cover absolute inset-0 w-full h-full"
                      src={slide.before}
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h4
                    className="font-dm-sans font-semibold text-lg mb-4"
                    style={{ color: LIME }}
                  >
                    After
                  </h4>
                  <div className="relative aspect-[3/2] rounded-xl overflow-hidden shadow-md">
                    <img
                      alt="After repair"
                      loading="lazy"
                      className="object-cover absolute inset-0 w-full h-full"
                      src={slide.after}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Prev / Next */}
          <button
            aria-label="Previous"
            onClick={prev}
            className="inline-flex items-center justify-center size-9 absolute left-4 top-1/2 -translate-y-1/2
                       rounded-md shadow-md bg-background/80 backdrop-blur-sm transition"
            style={{ color: PINK }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                 viewBox="0 0 24 24" fill="none" stroke="currentColor"
                 strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button
            aria-label="Next"
            onClick={next}
            className="inline-flex items-center justify-center size-9 absolute right-4 top-1/2 -translate-y-1/2
                       rounded-md shadow-md bg-background/80 backdrop-blur-sm transition"
            style={{ color: PINK }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                 viewBox="0 0 24 24" fill="none" stroke="currentColor"
                 strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => goTo(i)}
                className="w-3 h-3 rounded-full transition"
                style={{
                  backgroundColor: i === index ? PINK : LIME,
                  opacity: i === index ? 1 : 0.5,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
