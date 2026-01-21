export interface Person {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string; // URL zum Planeten (Root-Ressource 3)
    films: string[];    // URLs zu Filmen
    url: string;        // Die URL für die ID-Extraktion
}
