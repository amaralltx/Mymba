// src/features/ExploreAnimal/animalService.tsx
import type { IDatabaseService } from "./IDatabaseService";
import type { IHttpService } from "./IHttpService";

export async function getRandomAnimal(db: IDatabaseService) {
  const ids = await db.getAllAnimalIds();
  const randomIndex = Math.floor(Math.random() * ids.length);
  const randomId = ids[randomIndex].id;
  return db.getAnimalById(randomId);
}


export async function getAnimalImages(http: IHttpService, taxon_id: number): Promise<string[] | null> {
  let imagesUrls: string[] = [];
  const url = `https://api.inaturalist.org/v1/observations?taxon_id=${taxon_id}&per_page=5&photos=true`;
  try {
    const imagesData = await http.get<any>(url);
    // Imagem padrão do animal no inaturalist
    if (imagesData.results && imagesData.results[0]?.taxon?.default_photo?.medium_url) {
      imagesUrls.push(imagesData.results[0].taxon.default_photo.medium_url);
    }
    if (imagesData.results) {
      imagesData.results.forEach((result: any) => {
        if (result.photos) {
          result.photos.forEach((mediaItem: any) => {
            if (mediaItem.url) {
              imagesUrls.push(mediaItem.url);
            }
          });
        }
      });
    }
  } catch (error) {
    console.error(error);
    return null;
  } finally {
    return replaceSquareWithOriginal(imagesUrls);
  }
}

export async function getAnimalOccurrences(http: IHttpService, taxon_id: number): Promise<any> {
  let response: any[] = [];
  const url = `https://api.inaturalist.org/v1/observations?taxon_id=${taxon_id}&per_page=100&geo=true&place_id=6878`
  const occurrences = await http.get<any>(url);
  for (const occurrence of occurrences.results) {
    response.push({
      id: occurrence.id,
      user: occurrence.identifications[0].user.name,
      user_icon: occurrence.identifications[0].user.icon,
      place_guess: occurrence.place_guess,
      observed_on_string: occurrence.observed_on_string,
      date: occurrence.observed_on,
      lat: occurrence.geojson.coordinates[1],
      lon: occurrence.geojson.coordinates[0],
    });
  }
  return response;
}

// Função utilitária para trocar 'square.jpg' por 'original.jpg' em todas as URLs do array, aumentando a qualidade das imagens
export function replaceSquareWithOriginal(imagesUrls: string[]): string[] {
  return imagesUrls.map(url => url.replace('square.jpg', 'original.jpg'));
}

