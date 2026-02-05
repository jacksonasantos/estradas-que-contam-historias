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
  {id: "historicas",        label: "Históricas",                  icon: "/landmark.svg",},
  {id: "cenicas",           label: "Cênicas / Famosas",           icon: "/mountain.svg",},
  {id: "tematicas",         label: "Temáticas Especiais",         icon: "/compass.svg",},
  {id: "cinematograficas",  label: "Temáticas Cinematográficas",  icon: "/clapperboard.svg",},
  {id: "serras",            label: "Serras",                      icon: "/mountainsnow.svg",},
];
