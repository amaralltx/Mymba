import React from "react";
import ExploreAnimalDetails from "../features/ExploreAnimal/ExploreAnimalDetails.jsx";
import ExploreAnimalView from "../features/ExploreAnimal/ExploreAnimalView.jsx";

export default function ExplorePage() {

    return (
        <section className=" w-full grid grid-cols-[45%_50%] gap-[5%] p-12 pt-12 pb-12">
            <ExploreAnimalView />
            <ExploreAnimalDetails />
        </section>
    );
}
