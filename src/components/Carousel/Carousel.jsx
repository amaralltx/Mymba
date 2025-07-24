// src/components/Carousel.jsx
import { useState, useEffect, useCallback } from "react";

export default function Carousel({ items, className }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    }, [items.length]);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
    };

    // Loop
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide(); // Alterna para o próximo slide a cada 3 segundos
        }, 3000);

        return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
    }, [nextSlide]);
    return (
        <div className={`relative overflow-hidden w-full ${className}`}>
            <div
                className="h-full flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {items.map((item, index) => (
                    <div key={index} className="w-full h-full flex-shrink-0 flex items-center justify-center bg-primary">
                        {typeof item === 'string' ? (
                            <div className="w-full h-full flex items-center justify-center">
                                {/* Imagem principal */}
                                <img
                                    src={item}
                                    alt="Foto do animal"
                                    className="w-full h-full object-contain rounded-lg shadow-lg"
                                />
                            </div>
                        ) : (
                            item
                        )}
                    </div>
                ))}
            </div>

            {/* Controles de navegação */}
            <button
                className="flex items-center justify-center absolute left-2 top-1/2 -translate-y-1/2 cursor-pointer"
                onClick={prevSlide}
            >
                <svg
                    className="h-10 w-10 transition-all duration-200 ease-in-out stroke-white/50 hover:stroke-white rounded-full p-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="3"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                    ></path>
                </svg>
            </button>
            <button
                className="flex items-center justify-center absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
                onClick={nextSlide}
            >
                <svg
                    className="h-10 w-10 transition-all duration-200 ease-in-out stroke-white/50 hover:stroke-white rounded-full p-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="3"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    ></path>
                </svg>
            </button>

            {/* Indicadores de slide */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {items.map((_, index) => (
                    <button
                        key={index}
                        className={`w-4 h-1 rounded-full transition-all duration-300 ease-in-out ${index === currentIndex
                            ? "bg-white w-8"
                            : "bg-white/50"
                            }`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
}