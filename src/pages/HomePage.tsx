// src/pages/HomePage.tsx
import React from "react";
import Button from "../components/Button/Button";
import CardFloat from "../components/CardFloat/CardFloat";
import ArrowIcon from "../assets/icons/north_east.svg";

export default function HomePage() {
    return (
        <section className="flex flex-1 h-9/10 items-center justify-evenly">
            <div className="flex flex-col gap-8 mt-52 mb-52 text-primary">
                <h1 className="text-8xl leading-[94%]">
                    PROJETO
                    <span
                        className="
                                font-bold
                                bg-gradient-to-r from-green via-blue to-green
                                bg-[length:200%_200%] bg-left
                                text-transparent bg-clip-text
                                animate-gradient-slide
                                "
                    >
                        <br />
                        MYMBÁ
                    </span>
                </h1>
                <p className="text-3xl italic tracking-[-3%]">
                    <span className="font-bold">Explore</span> e{" "}
                    <span className="font-bold">Descubra</span> a nossa fauna.
                </p>
                <a href="./explore">
                    <Button
                        icon={ ArrowIcon }
                        className={"w-76"}
                        onClick={() => {}}
                    >
                        Explore toda a diversidade
                    </Button>
                </a>
            </div>
            <CardFloat />
        </section>
    );
}
