// src/features/ExploreAnimal/SupabaseService.ts
import supabase from "../../../utils/supabaseClient.jsx";
import type { IDatabaseService } from "./IDatabaseService";
import type { Animal } from "../../../types/types.jsx";

export class SupabaseService implements IDatabaseService {
  async getAllAnimalIds() {
    const { data, error } = await supabase.from<"animals", { id: number }>('animals').select('id');
    if (error) throw error;
    return data || [];
  }

  async getAnimalById(id: number) {
    const { data, error } = await supabase.from("animals").select("*").eq("id", id).single<Animal>();
    if (error) return null;
    return data;
  }
}