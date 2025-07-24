import React from "react";
import Button from "../../components/Button/Button.jsx";
import DetailsList from "../../components/DetailsList/DetailsList.jsx";
import AboutSection from "../../components/AboutSection/AboutSection.jsx";
import ShuffleIcon from "../../assets/icons/shuffle_icon.svg";
import { getRandomAnimal } from "./animalService.jsx";

export default function ExploreAnimalDetails() {
    const [loading, setLoading] = React.useState(true);
    const [animalData, setAnimalData] = React.useState();

    const handleFetchAnimal = async () => {
        setLoading(true);
        const animal = await getRandomAnimal();
        setAnimalData(animal);
        setLoading(false);
    }

    // Busca um animal aleatório inicial quando o componente é carregado
    React.useEffect(() => {
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
                                              inline-block font-bold"
                >
                    {loading ? "Carregando..." : animalData.popular_name}
                </h1>

                {/* Nome científico */}

                <h2 className="tracking-[7%] italic text-gray-700 font-medium">
                    {loading ? "..." : animalData.scientific_name}
                </h2>
            </div>
            <div className="h-9/10 relative">
                {/* Descrição do animal */}
                <DetailsList data={loading ? "..." : [animalData.diet, animalData.weight, animalData.size, animalData.conservation_status]} />
                {/* Sobre o animal */}
                <AboutSection data={loading ? "..." : animalData.description} />
                {/* Botão para alterar animal */}
                <Button
                    icon={ShuffleIcon}
                    className={
                        "w-76 ml-auto mr-auto mt-4 absolute bottom-0 right-33/100"
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
