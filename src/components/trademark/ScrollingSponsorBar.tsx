import React from 'react';

const ScrollingLogos = () => {
  const logos = [
    { src: "/sponsors/next-level-logo.png", alt: "Next Level Logo" },
    { src: "/sponsors/los-camp-logo.png", alt: "Los Camp Logo" },
    { src: "/sponsors/unleashed-logo.webp", alt: "Unleashed Logo" },
    { src: "/sponsors/barbell-logo.webp", alt: "Barbell Logo" },
    { src: "/sponsors/next-level-logo.png", alt: "Next Level Logo" },
    { src: "/sponsors/unleashed-logo.webp", alt: "Unleashed Logo" },
    { src: "/sponsors/barbell-logo.webp", alt: "Barbell Logo" },
  ];

  return (
    <div className="w-full bg-sky-50 p-8 relative">
      {/* Blur layer */}
      <div className="absolute inset-0 blur-sm opacity-95 pt-8">
        <div className="flex space-x-16 animate-scroll">
          {logos.map((logo, index) => (
            <div key={index} className="flex-shrink-0">
              <img
                src={logo.src}
                alt={logo.alt}
                loading="lazy"
                className="h-8 w-auto grayscale brightness-110"
              />
            </div>
          ))}
        </div>
      </div>


      <style jsx>{`
        .animate-scroll {
          animation: scrollX 30s linear infinite;
        }
        @keyframes scrollX {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

      `}</style>
    </div>
  );
};

export default ScrollingLogos;