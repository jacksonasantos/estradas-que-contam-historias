  export interface ConquistaTipo {
    id: String;
    label: string;
    icon: string; // Caminho para o ícone
  }

  export const CONQUISTAS_TIPO: ConquistaTipo[] = [
    {id: "1", label: "Serra",            icon: "/src/assets/achievements/mountain.svg",},
    {id: "2", label: "Estrada",          icon: "/src/assets/achievements/road.svg",},
    {id: "3", label: "Caverna",          icon: "/src/assets/achievements/cave.svg",},
    {id: "4", label: "Ponto Turístico",  icon: "/src/assets/achievements/camera.svg",},
    {id: "5", label: "Cachoeira",        icon: "/src/assets/achievements/waterfall.svg",},
    {id: "6", label: "Igreja",           icon: "/src/assets/achievements/church.svg",},
    {id: "7", label: "Parque",           icon: "/src/assets/achievements/park.svg",},
    {id: "8", label: "Castelo",          icon: "/src/assets/achievements/castle.svg",},
    {id: "9", label: "Museu",            icon: "/src/assets/achievements/museum.svg",},
  ];