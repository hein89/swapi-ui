export interface Film {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[]; // URLs zu den Charakteren
  planets: string[];    // URLs zu den Planeten
  url: string;          // Die URL dieses Films (wichtig für die ID)
}

// Schnittstelle für die Antwort der SWAPI-Filme-Endpunkts
// Diese enthält Metadaten und ein Array von Filmen (Meta-Objekt)
export interface SwapiResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}