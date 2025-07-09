import React from "react";
import Carousel from "../../components/Carousel/Carousel.jsx";
import Switcher from "../../components/Switcher/Switcher.jsx";
import Button from "../../components/Button/Button.jsx";
import DetailsList from "../../components/DetailsList/DetailsList.jsx";
import AboutSection from "../../components/AboutSection/AboutSection.jsx";
import ShuffleIcon from "../../assets/icons/shuffle_icon.svg";

function getRandomAnimal(){
    
}
export function AnimalCard() {
    const randomAnimal = getRandomAnimal()
    const testData = {
        nome_popular: "Sapo-de-vidro",
        nome_cientifico: "Hyalinobatrachium valerioi",
        tipo: "Anfíbio",
        dieta: "Insetos e pequenos invertebrados",
        peso: "2,5-4,5g",
        tamanho: "2,5-5,0cm",
        about: `O sapo-de-vidro é conhecido pela sua pele translúcida, que permite
      visualizar órgãos internos. Habita florestas tropicais da América Central e do
      norte da América do Sul, geralmente perto de cursos d’água. Sua reprodução
      ocorre em folhas suspensas, acima da água, onde os machos cantarolam para
      atrair fêmeas.`,
        images: [
            "https://exemplo.com/images/glass-frog-1.jpg",
            "https://exemplo.com/images/glass-frog-2.jpg",
            "https://exemplo.com/images/glass-frog-3.jpg",
        ],
    };
    const [animalData, setAnimalData] = React.useState(testData);

    const slides = [
        <div className="bg-blue-500 flex h-full items-center justify-center">
            <span className="text-white text-3xl">
                {animalData.nome_popular} 1
            </span>
        </div>,
        <div className="bg-red-500 flex h-full items-center justify-center">
            <span className="text-white text-3xl">
                {animalData.nome_popular} 2
            </span>
        </div>,
        <div className="bg-green-500 h-full flex items-center justify-center">
            <span className="text-white text-3xl">
                {animalData.nome_popular} 3
            </span>
        </div>,
    ];

    return (
        <div className="grid grid-cols-[45%_50%] gap-[5%]">
            <div className="h-full w-full flex flex-col justify-between items-center gap-4">
                <Switcher
                    options={["Sobre", "Ocorrências"]}
                    className={`h-1/10`}
                />
                <Carousel className="h-9/10" items={slides} />
            </div>
            <div className="h-175 w-full flex flex-col justify-between gap-8">
                <div className="flex flex-col justify-between">
                    {/*Nome Popular*/}
                    <h1
                        className="text-4xl max-w-fit bg-gradient-to-bl from-green to-blue
                                    text-transparent bg-clip-text 
                                    inline-block font-bold"
                    >
                        Sapo-de-Vidro
                    </h1>
                    {/* Nome científico */}
                    <h2 className="tracking-[7%] italic text-gray-700 font-medium">
                        Sapus Felicius
                    </h2>
                </div>
                <div className="h-9/10 relative">
                    {/* Descrição do animal */}
                    <DetailsList data={animalData} />
                    {/* Sobre o animal */}
                    <AboutSection data={animalData} />
                    {/* Botão para alterar animal */}
                    <Button
                        icon={ShuffleIcon}
                        className={
                            "w-76 ml-auto mr-auto mt-4 absolute bottom-0 right-33/100"
                        }
                    >
                        Mostre-me outro!
                    </Button>
                </div>
            </div>
        </div>
    );
}
