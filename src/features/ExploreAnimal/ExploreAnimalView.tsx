import { useState, useEffect } from "react";
import Switcher from "../../components/Switcher/Switcher";
import Carousel from "../../components/Carousel/Carousel";
import { useAnimalData } from "./AnimalContext";
import { getAnimalImages, getAnimalOccurrences } from "./Services/animalService.js";
import { FetchHttpService } from "./Services/FetchHttpService"; 
import OccurrenceMap from "./OccurrenceMap.js";

export default function ExploreAnimalView() {


    const [selectedOption, setSelectedOption] = useState<string>("Images");
    const { animalData, error } = useAnimalData();
    const taxon_id = animalData?.taxon_id;
    const [carouselImages, setCarouselImages] = useState<string[] | null>([]);
    const [occurrences, setOccurrences] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(false);

    // Quando o taxon_id mudar, busca as imagens de acordo com o novo taxon_id
    useEffect(() => {
        if (taxon_id) {
            setLoading(true);
            (async () => {
                const http = new FetchHttpService();
                const images = await getAnimalImages(http, taxon_id);
                setCarouselImages(images);
                const occurrences = await getAnimalOccurrences(http, taxon_id);
                setOccurrences(occurrences);
                setLoading(false);
                console.log(occurrences);
            })();
        }
    }, [taxon_id]);



    return (
        <div className="h-full w-full flex flex-col justify-between items-center gap-4">
            <Switcher options={["Images", "Ocorrências"]} value={selectedOption} onChange={setSelectedOption} className={`h-1/10`} />
            <div className="relative w-full flex-shrink-0 flex flex-col items-center justify-between border-24 border-primary bg-primary h-[600px] gap-6">
                {selectedOption == "Images" &&  (
                    <>
                        <Carousel className="min-h-85/100" loading={loading} items={carouselImages || []} />
                        <p className="italic text-sm text-gray-300 h-5/100">imagens retiradas da API iNaturalist</p>
                    </>

                )}
                {selectedOption == "Ocorrências" && (
                    <OccurrenceMap data={occurrences} />
                )}
            </div>
        </div>
    );
}
