import { createContext, useContext, useState } from "react";

// Cria o contexto
const AnimalContext = createContext();

// Provider para envolver os componentes que precisam acessar o contexto
export function AnimalProvider({ children }) {
  const [animalData, setAnimalData] = useState(null);

  return (
    <AnimalContext.Provider value={{ animalData, setAnimalData }}>
      {children}
    </AnimalContext.Provider>
  );
}

// Hook para facilitar o uso do contexto
export function useAnimal() {
  return useContext(AnimalContext);
}

