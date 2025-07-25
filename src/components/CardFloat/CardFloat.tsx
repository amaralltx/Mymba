import { useState, useEffect } from "react";
import Tilt from "react-parallax-tilt";

// Imagens candidatas para o CardFloat
import animal_image_01 from "../../assets/images/gaviao-real.png";
import animal_image_02 from "../../assets/images/peixe-eletrico.png";
import animal_image_03 from "../../assets/images/salamandra-de-fogo.png";
import animal_image_04 from "../../assets/images/tamandua-bandeira.png";
import animal_image_05 from "../../assets/images/uacari-branco.png";

export default function CardFloat() {
    const animals = new Map();
    animals.set(animal_image_01, "gavião-real");
    animals.set(animal_image_02, "peixe-elétrico");
    animals.set(animal_image_03, "salamandra-de-fogo");
    animals.set(animal_image_04, "tamanduá-bandeira");
    animals.set(animal_image_05, "uacari-branco");

    // Animal a ser utilizado no CardFloat
    const [randomAnimal, setRandomAnimal] = useState(null);

    useEffect(() => {
        // Obter todas as chaves do Map como um array
        const imagePaths = Array.from(animals.keys());
        const randomIndex = Math.floor(Math.random() * imagePaths.length);
        const selectedImage = imagePaths[randomIndex];
        const selectedName = animals.get(selectedImage);

        setRandomAnimal({
            image: selectedImage,
            name: selectedName,
        });
    }, []);

    return (
        <div className="relative">
            <Tilt
                glareEnable={true}
                glareMaxOpacity={0.3}
                scale={1.05}
                transitionSpeed={250}
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                className="relative" 
            >
                {randomAnimal && (
                    <img
                        src={randomAnimal.image}
                        alt={randomAnimal.name}
                        className="w-175 object-cover"
                        style={{
                            filter: "drop-shadow(0px 0.5rem 0.5rem rgba(0, 0, 0, 0.95))", 
                        }}
                        draggable={false}
                    />
                )}
            </Tilt>
            <p className="absolute right-10 bottom-0 text font-medium text-gray-700 italic underline ">
                {randomAnimal && `${randomAnimal.name}`}
            </p>
        </div>
    );
}
