export type Roteiro = {
  slug: string;
  categoria:
    | "Históricas"
    | "Cênicas / Famosas"
    | "Temáticas Especiais"
    | "Temáticas Cinematográficas";
  titulo: string;
  subtitulo: string;
  regiao: string;
  distancia: string;
  duracao: string;
  nivel?: "Fácil" | "Intermediário" | "Difícil";
  tipo?: "Asfalto" | "Terra" | "Misto";
  historia?: string;
  caminho?: string[];
  experiencia?: string[];
  imagem?: string;
};
