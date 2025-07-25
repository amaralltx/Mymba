import { createContext, useContext, useState, ReactNode } from "react";
import { Animal } from "../../types/types";
import { getRandomAnimal } from "./Services/animalService";
import { SupabaseService } from "./Services/SupabaseService";

interface AnimalContextData {
  animalData: Animal | null;
  loading: boolean;
  error: string | null;
  handleFetchAnimal: () => Promise<void>;
}

const AnimalContext = createContext<AnimalContextData | undefined>(undefined);

// O componente aceitará qualquer coisa que possa ser renderizada dentro dele como conteúdo filho
export const AnimalProvider = ({ children }: { children: ReactNode }) => {
  const [animalData, setAnimalData] = useState<Animal | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const handleFetchAnimal = async () => {
    setLoading(true);
    setError(null);
    try {
      const supabaseService = new SupabaseService();
      const result = await getRandomAnimal(supabaseService);
      setAnimalData(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro ao buscar animal");
    } finally {
      setLoading(false);
    }
  };

  return (
    // O valor passado para o contexto é o que será acessado pelos componentes filhos
    <AnimalContext.Provider value={{ animalData, loading, error, handleFetchAnimal}}>
      {children}
    </AnimalContext.Provider>
  );
}

// Hook para facilitar o uso do contexto
export const useAnimalData = () => {
  const context = useContext(AnimalContext);
  if (!context) {
    throw new Error("useAnimalData deve ser usado dentro de um AnimalProvider");
  }
  return context;
}
