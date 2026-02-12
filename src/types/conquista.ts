import type { ConquistaTipo } from "../data/conquistas_tipo";

export interface Conquista {
  id: number;
  slug: string;
  shortName: string;
  name: string;
  type: ConquistaTipo;
  city: string;
  state: string;
  country: string;
  lat: number;
  lng: number;
  latSource?: number;
  lngSource?: number;
  latTarget?: number;
  lngTarget?: number;
  cityTarget?: string;
  stateTarget?: string;
  length_m?: number;
  image?: string; 
  note?: string;
  status: "ativa" | "inativa";
}