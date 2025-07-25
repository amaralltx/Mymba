// src/features/ExploreAnimal/IHttpService.ts
export interface IHttpService {
    get<T>(url: string): Promise<T>;
  }