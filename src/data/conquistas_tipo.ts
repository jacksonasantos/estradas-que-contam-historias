  export interface ConquistaTipo {
    id: String;
    label: string;
    icon: string; // Caminho para o ícone
  }

  export const CONQUISTAS_TIPO: ConquistaTipo[] = [
    {id: "1", label: "Serra",            icon: "/assets/achievements/mountain.svg",},
    {id: "2", label: "Estrada",          icon: "/assets/achievements/road.svg",},
    {id: "3", label: "Caverna",          icon: "/assets/achievements/cave.svg",},
    {id: "4", label: "Ponto Turístico",  icon: "/assets/achievements/camera.svg",},
    {id: "5", label: "Cachoeira",        icon: "/assets/achievements/waterfall.svg",},
    {id: "6", label: "Igreja",           icon: "/assets/achievements/church.svg",},
    {id: "7", label: "Parque",           icon: "/assets/achievements/park.svg",},
    {id: "8", label: "Castelo",          icon: "/assets/achievements/castle.svg",},
    {id: "9", label: "Museu",            icon: "/assets/achievements/museum.svg",},
  ];