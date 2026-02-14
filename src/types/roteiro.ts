import type { CategoriaId } from "../data/categorias";

export type Roteiro = {
  slug: string;
  categoria: CategoriaId;
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
  status?: "Em breve" | "Disponível";
};