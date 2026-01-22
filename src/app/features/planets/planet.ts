export interface Planet {
    name: string;
    rotation_period: string;
    orbital_period: string;
    diameter: string;
    climate: string;
    gravity: string;
    terrain: string;
    surface_water: string;
    population: string;
    residents: string[]; // URLs zu den Bewohnern (People)
    films: string[];     // URLs zu den Filmen
    url: string;
}
