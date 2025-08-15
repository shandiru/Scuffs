import React, { useEffect, useRef, useState } from "react";

export default function GallerySection() {
  const MAGENTA = "#b30086";
  const SLIDES = [
    {
      title: "Alloy Wheel Restoration",
      before: "/placeholder.svg?height=400&width=600",
      after: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Panel Repair",
      before: "/placeholder.svg?height=400&width=600",
      after: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Full Respray",
      before: "/placeholder.svg?height=400&width=600",
      after: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Plastic Trim Restore",
      before: "/placeholder.svg?height=400&width=600",
      after: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Dent Removal",
      before: "/placeholder.svg?height=400&width=600",
      after: "/placeholder.svg?height=400&width=600",
    },
  ];

  const [index, setIndex] = useState(0);
  const timer = useRef(null);
  const touchStartX = useRef(null);

  const goTo = (i) => setIndex((prev) => (i + SLIDES.length) % SLIDES.length);
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  // autoplay
  useEffect(() => {
    timer.current && clearInterval(timer.current);
    timer.current = setInterval(next, 5000);
    return () => timer.current && clearInterval(timer.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  // keyboard support
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "Escape") /* noop but available for consistency */ null;
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // touch-swipe
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
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-space-grotesk font-bold text-4xl md:text-5xl text-foreground mb-4">
            Our Work Gallery
          </h2>
          <p className="font-dm-sans text-xl text-muted-foreground max-w-2xl mx-auto">
            See the transformation - before and after examples of our
            professional repair work.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div
            className="bg-card rounded-lg shadow-lg overflow-hidden"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div className="p-6">
              <h3 className="font-space-grotesk font-bold text-2xl text-center text-card-foreground mb-6">
                {slide.title}
              </h3>

              {/* Slide */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center">
                  <h4 className="font-dm-sans font-semibold text-lg text-muted-foreground mb-4">
                    Before
                  </h4>
                  <div className="relative aspect-[3/2] rounded-lg overflow-hidden">
                    <img
                      alt={`Before repair - ${slide.title}`}
                      loading="lazy"
                      className="object-cover absolute inset-0 w-full h-full"
                      src={slide.before}
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="font-dm-sans font-semibold text-lg text-muted-foreground mb-4">
                    After
                  </h4>
                  <div className="relative aspect-[3/2] rounded-lg overflow-hidden">
                    <img
                      alt={`After repair - ${slide.title}`}
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
                       rounded-md border shadow-xs bg-background/80 backdrop-blur-sm
                       border-gray-300 text-gray-700 hover:bg-gray-100 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button
            aria-label="Next"
            onClick={next}
            className="inline-flex items-center justify-center size-9 absolute right-4 top-1/2 -translate-y-1/2
                       rounded-md border shadow-xs bg-background/80 backdrop-blur-sm
                       border-gray-300 text-gray-700 hover:bg-gray-100 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
                className="w-3 h-3 rounded-full transition-colors"
                style={{
                  backgroundColor:
                    i === index ? MAGENTA : "rgba(148,163,184,0.5)", // purple active, grey inactive
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
