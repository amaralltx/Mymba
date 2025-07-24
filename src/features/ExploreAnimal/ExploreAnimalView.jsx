import { useState } from "react";
import Switcher from "../../components/Switcher/Switcher.jsx";
import Carousel from "../../components/Carousel/Carousel.jsx";

export default function ExploreAnimalView() {
    const [selectedOption, setSelectedOption] = useState("Images");
    return (
        <div className="h-full w-full flex flex-col items-center gap-4">
            <Switcher options={["Images", "Occurrences"]} value={selectedOption} onChange={setSelectedOption} className={`h-1/10`} />

            {selectedOption == "Images" && (
                <div>
                    <Carousel className="min-h-85/100" items={["", "", "", "", ""]} />
                    <p className="italic text-gray-700 h-5/100">imagens retiradas da API iNaturalist</p>
                </>
            )}
            {selectedOption == "Occurrences" && (
                <p>Mapa</p>
            )}
        </div>
    );
}
