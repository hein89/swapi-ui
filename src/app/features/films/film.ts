export interface Film {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[]; // URLs zu den Charakteren
  planets: string[];    
  url: string;          
}

// Schnittstelle für die Antwort der SWAPI-Filme-Endpunkts
// Diese enthält Metadaten und ein Array von Filmen (Meta-Objekt)
export interface SwapiResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}