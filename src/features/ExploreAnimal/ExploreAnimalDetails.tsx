import { useState, useEffect } from "react";
import Button from "../../components/Button/Button";
import DetailsList, { DetailsData } from "../../components/DetailsList/DetailsList";
import AboutSection from "../../components/AboutSection/AboutSection";
import ShuffleIcon from "../../assets/icons/shuffle_icon.svg";
import { useAnimalData } from "./AnimalContext";

export default function ExploreAnimalDetails() {
    const { animalData, loading, error, handleFetchAnimal } = useAnimalData();
    const isLoadingOrNoData = loading || !animalData;

    const detailsData: DetailsData = {
        diet: animalData?.diet || "",
        weight: animalData?.weight || "",
        size: animalData?.size || "",
        conservation_status: animalData?.conservation_status || "",
        type: "",
    };

    useEffect(() => {
        const fetchAnimal = () => {
            handleFetchAnimal();
        };
        fetchAnimal();
    }, []);

    return (
        <div className="h-175 w-full flex flex-col justify-between gap-8">
            <div className="flex flex-col justify-between">
                {/*Nome Popular*/}
                <h1
                    className="text-4xl max-w-fit bg-gradient-to-bl from-green to-blue
                                              text-transparent bg-clip-text 
                                              inline-block font-bold
                                              "
                >
                    {isLoadingOrNoData ? "Carregando..." : animalData.popular_name}
                </h1>

                {/* Nome científico */}

                <h2 className="tracking-[7%] italic text-gray-700 font-medium">
                    {isLoadingOrNoData ? "..." : animalData.scientific_name}
                </h2>
            </div>
            <div className="h-9/10 relative">
                {/* Descrição do animal */}
                {<DetailsList data={detailsData} />}
                {/* Sobre o animal */}
                {<AboutSection about={animalData?.description || ""} />}
                {/* Botão para alterar animal */}
                <Button
                    icon={ShuffleIcon}
                    className={
                        "w-76 ml-auto mr-auto absolute bottom-0 right-1/2 translate-x-1/2"
                    }
                    onClick={() => {
                        handleFetchAnimal();
                    }}
                >
                    Mostre-me outro!
                </Button>
            </div>
        </div>
    );
}
