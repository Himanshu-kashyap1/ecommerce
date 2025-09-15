"use client";

export default function HorizontalTextScroll() {
  const texts = ["End of season sale", "Shop the sale", "✧"];
  const repeatedTexts = Array(10).fill(texts).flat();

  return (
    <div className="relative w-full overflow-hidden py-5 bg-[#b3a088]">
      {/* Left fade overlay */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-50 bg-gradient-to-r from-[#b3a088] to-transparent z-10" />
      {/* Right fade overlay */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-50 bg-gradient-to-l from-[#b3a088] to-transparent z-10" />

      {/* Scrolling container */}
      <div className="flex animate-scroll">
        {repeatedTexts.map((text, index) => (
          <div
            key={index}
            className="mx-8 flex-shrink-0 text-xl font-semibold text-gray-800"
          >
            {text}
          </div>
        ))}
      </div>

      {/* Animation style */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
          width: max-content;
        }
      `}</style>
    </div>
  );
}
