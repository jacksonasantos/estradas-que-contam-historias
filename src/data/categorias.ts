export type CategoriaId =
  | "historicas"
  | "cenicas"
  | "tematicas"
  | "cinematograficas"
  | "serras";

export interface Categoria {
  id: CategoriaId;
  label: string;
  icon: string; // nome do ícone (ou SVG)
}

export const CATEGORIAS: Categoria[] = [
  {
    id: "historicas",
    label: "Históricas",
    icon: "temple",
  },
  {
    id: "cenicas",
    label: "Cênicas / Famosas",
    icon: "mountain",
  },
  {
    id: "tematicas",
    label: "Temáticas Especiais",
    icon: "compass",
  },
  {
    id: "cinematograficas",
    label: "Temáticas Cinematográficas",
    icon: "clapperboard",
  },
  {
    id: "serras",
    label: "Serras",
    icon: "mountains",
  },
];
