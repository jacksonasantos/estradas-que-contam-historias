export type CategoriaId =
  | "historicas"
  | "cenicas"
  | "tematicas"
  | "cinematograficas"
  | "serras";

export interface Categoria {
  id: CategoriaId;
  label: string;
  icon: string; // Caminho para o ícone
}

export const CATEGORIAS: Categoria[] = [
  {id: "historicas",        label: "Históricas",                  icon: "/src/assets/landmark.svg",},
  {id: "cenicas",           label: "Cênicas / Famosas",           icon: "/src/assets/mountain.svg",},
  {id: "tematicas",         label: "Temáticas Especiais",         icon: "/src/assets/compass.svg",},
  {id: "cinematograficas",  label: "Temáticas Cinematográficas",  icon: "/src/assets/clapperboard.svg",},
  {id: "serras",            label: "Serras",                      icon: "/src/assets/mountainsnow.svg",},
];