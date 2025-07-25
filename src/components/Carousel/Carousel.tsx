import React, { useState, useEffect, useCallback } from "react";
import { GridLoader } from "react-spinners";

interface CarouselProps {
  items: (string | React.ReactNode)[];
  className?: string;
  loading: boolean;
}

interface CarouselItemProps {
  item: string | React.ReactNode;
}

interface NavButtonProps {
  direction: "prev" | "next";
  onClick: () => void;
}

interface SlideIndicatorsProps {
  count: number;
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
}

function CarouselItem({ item }: CarouselItemProps) {
  return (
    <div className="w-full h-[600px] flex-shrink-0 flex items-center justify-center bg-primary rounded-lg shadow-lg overflow-hidden">
      <img
        src={item as string}
        alt="Foto do animal"
        className="w-full h-full object-cover"
      />
    </div>
  );
}

function NavButton({ direction, onClick }: NavButtonProps) {
  const paths = {
    prev: "M15.75 19.5L8.25 12l7.5-7.5",
    next: "M8.25 4.5l7.5 7.5-7.5 7.5",
  };

  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center absolute top-1/2 -translate-y-1/2 cursor-pointer ${direction === "prev" ? "left-2" : "right-2"
        }`}
      aria-label={direction === "prev" ? "Slide anterior" : "Próximo slide"}
      type="button"
    >
      <svg
        className="h-10 w-10 transition-all duration-200 ease-in-out stroke-white/50 hover:stroke-white rounded-full p-2"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={3}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d={paths[direction]}
        />
      </svg>
    </button>
  );
}

function SlideIndicators({
  count,
  currentIndex,
  setCurrentIndex,
}: SlideIndicatorsProps) {
  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
      {Array.from({ length: count }).map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentIndex(index)}
          className={`w-4 h-1 rounded-full transition-all duration-300 ease-in-out cursor-pointer ${index === currentIndex ? "bg-white w-8" : "bg-white/50"
            }`}
          aria-label={`Slide ${index + 1}`}
          type="button"
        />
      ))}
    </div>
  );
}

export default function Carousel({ items, loading }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  }, [items.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  }, [items.length]);



  return (
    loading ? (
      <div className="flex items-center justify-center h-full">
        <GridLoader loading={loading} color="#3bf0b8" />
      </div>
    ) : (
      <div className={`relative overflow-hidden w-full}`}>
        <div
          className="h-full flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <CarouselItem key={index} item={item} />
          ))}
        </div>

        <NavButton direction="prev" onClick={prevSlide} />
        <NavButton direction="next" onClick={nextSlide} />

        <SlideIndicators
          count={items.length}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      </div>
    )
  );
}
