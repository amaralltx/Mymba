import React from "react";
import {AnimalCard} from "../containers/AnimalCard/AnimalCard.jsx";

export default function ExplorePage() {

    return (
        <section className="flex flex-1 gap-12 h-full items-center justify-between p-12 pt-12 pb-12">
            <AnimalCard/>
        </section>
    );
}
