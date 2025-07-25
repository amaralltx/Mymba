// src/features/ExploreAnimal/FetchHttpService.ts
import type { IHttpService } from "./IHttpService";

export class FetchHttpService implements IHttpService {
  async get<T>(url: string): Promise<T> {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Erro na requisição");
    return response.json();
  }
}