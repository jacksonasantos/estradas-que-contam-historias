import type { ConquistaTipo } from "../data/conquistas_tipo";

export interface Conquista {
  id: number;
  slug: string;
  shortName: string;
  name: string;
  tipo: ConquistaTipo;
  city: string;
  state: string;
  country: string;
  lat: number;
  lng: number;
  latSource?: number;
  lngSource?: number;
  latTarget?: number;
  lngTarget?: number;
  cidadeFim?: string;
  estadoFim?: string;
  comprimentoKm?: number;
  imagem: string; 
  nota?: string;
  status: "ativa" | "inativa";
}