// src/features/ExploreAnimal/IDatabaseService.ts
import type { Animal } from "../../../types/types";

export interface IDatabaseService {
  getAllAnimalIds(): Promise<{ id: number }[]>;
  getAnimalById(id: number): Promise<Animal | null>;
}