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
  {id: "historicas",        label: "Históricas",                  icon: "/assets/landmark.svg",},
  {id: "cenicas",           label: "Cênicas / Famosas",           icon: "/assets/mountain.svg",},
  {id: "tematicas",         label: "Temáticas Especiais",         icon: "/assets/compass.svg",},
  {id: "cinematograficas",  label: "Temáticas Cinematográficas",  icon: "/assets/clapperboard.svg",},
  {id: "serras",            label: "Serras",                      icon: "/assets/mountainsnow.svg",},
];