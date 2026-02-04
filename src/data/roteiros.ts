import type { Roteiro } from "../types/roteiro";
import { validateRoteiros } from "../utils/validateRoteiros";

const roteiros: Roteiro[] = [
  {
    slug: "imigracao-italiana",
    imagem: "/assets/roteiros/imigracao-italiana.jpg",
    categoria: "Históricas",
    titulo: "Imigração Italiana",
    subtitulo: "Estradas que contam a saga dos imigrantes italianos",
    regiao: "Sul",
    distancia: "280 km",
    duracao: "2 a 3 dias",
    nivel: "Fácil",
    tipo: "Asfalto",    
    historia: `Este roteiro percorre as estradas abertas pelos imigrantes italianos a partir de 1875, ligando colônias agrícolas, cantinas, igrejas e pequenas comunidades que preservam até hoje sua identidade cultural.
Mais do que paisagem, esta é uma viagem pela memória, onde cada curva guarda histórias de trabalho, família e pertencimento.`,
    caminho: [
      "Caxias do Sul → Flores da Cunha",
      "Flores da Cunha → Antônio Prado",
      "Antônio Prado → Bento Gonçalves",
      "Bento Gonçalves → Garibaldi"
    ],
    experiencia: [
      "Estradas secundárias e rurais",
      "Paradas culturais e gastronômicas",
      "Histórias contadas no próprio lugar",
      "Ritmo confortável, sem pressa"
    ]
  },

  {
    slug: "caminhos-farroupilhas",
    categoria: "Históricas",
    titulo: "Caminhos Farroupilhas",
    subtitulo: "Uma jornada pela história gaúcha",
    regiao: "Sul",
    distancia: "200 km",
    duracao: "2 dias",
    nivel: "Fácil",
    tipo: "Asfalto",
    historia: `Este roteiro segue caminhos marcados pela Revolução Farroupilha, conectando antigas capitais, estâncias e campos de batalha que moldaram a identidade do Rio Grande do Sul.`,
    caminho: [
      "Porto Alegre → Guaíba",
      "Guaíba → Piratini",
      "Piratini → Pelotas"
    ],
    experiencia: [
      "Viagem histórica",
      "Contato com a cultura gaúcha",
      "Estradas tradicionais",
      "Aprendizado e reflexão"
    ]
  },

  {
    slug: "rotas-jesuiticas",
    categoria: "Históricas",
    titulo: "Rotas Jesuíticas (Missões)",
    subtitulo: "Entre ruínas, fé e cultura guarani",
    regiao: "Sul",
    distancia: "350 km",
    duracao: "3 dias",
    nivel: "Fácil",
    tipo: "Asfalto",
    historia: `Uma imersão na história das reduções jesuíticas e da cultura guarani, passando por sítios arqueológicos, museus e paisagens preservadas.`,
    caminho: [
      "Santo Ângelo",
      "São Miguel das Missões",
      "São João Batista",
      "São Lourenço"
    ],
    experiencia: [
      "Patrimônio histórico",
      "Estradas tranquilas",
      "Contato cultural profundo",
      "Turismo contemplativo"
    ]
  },

  {
    slug: "rotas-jesuiticas-internacional",
    categoria: "Históricas",
    titulo: "Rotas Jesuíticas (Missões) – Internacional",
    subtitulo: "Uma travessia histórica entre Brasil e Argentina",
    regiao: "Brasil / Argentina",
    distancia: "600 km",
    duracao: "5 dias",
    nivel: "Intermediário",
    tipo: "Asfalto",
    historia: `Este roteiro amplia a experiência missioneira, cruzando fronteiras e conectando ruínas históricas preservadas no Brasil e na Argentina.`,
    caminho: [
      "São Miguel das Missões (BR)",
      "Posadas (AR)",
      "San Ignacio Miní (AR)",
      "Loreto (AR)"
    ],
    experiencia: [
      "Viagem internacional",
      "História compartilhada",
      "Estradas longas",
      "Imersão cultural"
    ]
  },

  {
    slug: "imigracao-alema",
    categoria: "Históricas",
    titulo: "Imigração Alemã",
    subtitulo: "Caminhos da colonização e da cultura germânica",
    regiao: "Sul",
    distancia: "250 km",
    duracao: "2 dias",
    nivel: "Fácil",
    tipo: "Asfalto",
    historia: `Roteiro pelas primeiras colônias alemãs do RS, destacando arquitetura, gastronomia e tradições preservadas ao longo das gerações.`,
    caminho: [
      "São Leopoldo",
      "Novo Hamburgo",
      "Ivoti"
    ],
    experiencia: [
      "Cultura germânica",
      "Estradas urbanas e rurais",
      "Viagem curta",
      "Paradas culturais"
    ]
  },

  {
    slug: "revolucao-1923",
    categoria: "Históricas",
    titulo: "Revolução de 1923",
    subtitulo: "Entre batalhas, estâncias e disputas políticas",
    regiao: "Sul",
    distancia: "300 km",
    duracao: "3 dias",
    nivel: "Intermediário",
    tipo: "Asfalto",
    historia: `Este roteiro percorre regiões marcadas pelos conflitos armados da Revolução de 1923, revelando a história política do interior gaúcho.`,
    caminho: [
      "Bagé",
      "Dom Pedrito",
      "Santana do Livramento"
    ],
    experiencia: [
      "Campos abertos",
      "História política",
      "Estradas longas",
      "Clima de fronteira"
    ]
  },

  {
    slug: "anita-garibaldi",
    categoria: "Históricas",
    titulo: "Caminhos de Anita e Garibaldi (RS/SC)",
    subtitulo: "Uma rota de amor, guerra e liberdade",
    regiao: "Sul",
    distancia: "500 km",
    duracao: "4 dias",
    nivel: "Intermediário",
    tipo: "Misto",
    historia: `Inspirado na trajetória de Anita e Giuseppe Garibaldi, este roteiro cruza paisagens que testemunharam batalhas, fugas e histórias de coragem.`,
    caminho: [
      "Laguna (SC)",
      "Osório (RS)",
      "Porto Alegre",
      "Mostardas"
    ],
    experiencia: [
      "Narrativa intensa",
      "Estradas variadas",
      "Paisagens históricas",
      "Viagem emocional"
    ]
  },

  {
    slug: "serra-gaucha",
    categoria: "Cênicas / Famosas",
    titulo: "Serra Gaúcha",
    subtitulo: "Curvas, clima europeu e paisagens icônicas",
    regiao: "Sul",
    distancia: "220 km",
    duracao: "2 dias",
    nivel: "Fácil",
    tipo: "Asfalto",
    historia: `Um dos roteiros mais clássicos do sul do Brasil, combinando serras, cidades turísticas e estradas sinuosas.`,
    caminho: [
      "Gramado",
      "Canela",
      "São Francisco de Paula",
      "Nova Petrópolis"
    ],
    experiencia: [
      "Curvas suaves",
      "Paisagens serranas",
      "Infraestrutura turística",
      "Conforto"
    ]
  },

  {
    slug: "aparados-da-serra",
    categoria: "Cênicas / Famosas",
    titulo: "Aparados da Serra",
    subtitulo: "Cânions gigantes e estradas cinematográficas",
    regiao: "Sul",
    distancia: "400 km",
    duracao: "3 dias",
    nivel: "Intermediário",
    tipo: "Misto",
    historia: `Roteiro de natureza bruta, levando a cânions monumentais por estradas remotas e pouco movimentadas.`,
    caminho: [
      "Cambará do Sul",
      "Cânion Itaimbezinho",
      "Cânion Fortaleza"
    ],
    experiencia: [
      "Natureza intensa",
      "Estradas desertas",
      "Clima imprevisível",
      "Sensação de liberdade"
    ]
  },

  {
    slug: "litoral-norte",
    categoria: "Cênicas / Famosas",
    titulo: "Litoral Norte",
    subtitulo: "Entre o mar e a estrada",
    regiao: "Sul",
    distancia: "180 km",
    duracao: "2 dias",
    nivel: "Fácil",
    tipo: "Asfalto",
    historia: `Viagem costeira combinando praias, dunas e estradas planas, ideal para rodar sem pressa.`,
    caminho: [
      "Osório",
      "Capão da Canoa",
      "Torres"
    ],
    experiencia: [
      "Brisa do mar",
      "Estradas planas",
      "Paradas à beira-mar",
      "Clima leve"
    ]
  },

  {
    slug: "campanha-gaucha",
    categoria: "Cênicas / Famosas",
    titulo: "Campanha Gaúcha",
    subtitulo: "Horizontes abertos e estradas infinitas",
    regiao: "Sul",
    distancia: "350 km",
    duracao: "3 dias",
    nivel: "Fácil",
    tipo: "Asfalto",
    historia: `Roteiro pelos campos da fronteira sul, onde o horizonte parece não ter fim.`,
    caminho: [
      "Bagé",
      "Aceguá",
      "Santana do Livramento"
    ],
    experiencia: [
      "Estradas retas",
      "Sensação de liberdade",
      "Cultura campeira",
      "Ritmo contemplativo"
    ]
  },

  {
    slug: "vale-do-taquari",
    categoria: "Cênicas / Famosas",
    titulo: "Vale do Taquari",
    subtitulo: "Rios, vales e estradas sinuosas",
    regiao: "Sul",
    distancia: "200 km",
    duracao: "2 dias",
    nivel: "Fácil",
    tipo: "Asfalto",
    historia: `Um roteiro que acompanha rios e vales, revelando paisagens verdes e cidades acolhedoras.`,
    caminho: [
      "Lajeado",
      "Estrela",
      "Teutônia"
    ],
    experiencia: [
      "Estradas sinuosas",
      "Paisagens verdes",
      "Viagem tranquila",
      "Contato com a natureza"
    ]
  },

  {
    slug: "estradas-do-vinho",
    categoria: "Temáticas Especiais",
    titulo: "Estradas do Vinho",
    subtitulo: "Entre vinhedos, cantinas e tradição",
    regiao: "Sul",
    distancia: "180 km",
    duracao: "2 dias",
    nivel: "Fácil",
    tipo: "Asfalto",
    historia: `Roteiro enogastronômico que conecta vinhedos, cantinas e pequenas propriedades familiares.`,
    caminho: [
      "Bento Gonçalves",
      "Monte Belo do Sul",
      "Garibaldi"
    ],
    experiencia: [
      "Paisagens rurais",
      "Cultura do vinho",
      "Gastronomia local",
      "Ritmo prazeroso"
    ]
  },

  {
    slug: "rota-do-churrasco",
    categoria: "Temáticas Especiais",
    titulo: "Rota do Churrasco Gaúcho",
    subtitulo: "Sabores, fogo de chão e cultura campeira",
    regiao: "Sul",
    distancia: "250 km",
    duracao: "2 dias",
    nivel: "Fácil",
    tipo: "Asfalto",
    historia: `Uma viagem pelos sabores do churrasco gaúcho, passando por estâncias, restaurantes tradicionais e cidades do interior.`,
    caminho: [
      "Porto Alegre",
      "Canoas",
      "São Leopoldo"
    ],
    experiencia: [
      "Gastronomia típica",
      "Cultura campeira",
      "Estradas fáceis",
      "Paradas saborosas"
    ]
  },

  {
    slug: "inverno-na-serra",
    categoria: "Temáticas Especiais",
    titulo: "Inverno na Serra de Moto",
    subtitulo: "Frio, neblina e paisagens dramáticas",
    regiao: "Sul",
    distancia: "230 km",
    duracao: "2 dias",
    nivel: "Intermediário",
    tipo: "Asfalto",
    historia: `Roteiro pensado para os meses frios, com clima, neblina e paisagens intensas da serra.`,
    caminho: [
      "Gramado",
      "Canela",
      "São José dos Ausentes"
    ],
    experiencia: [
      "Clima frio",
      "Paisagens dramáticas",
      "Pilotagem atenta",
      "Sensação de aventura"
    ]
  },

  {
    slug: "rota-dos-canions",
    categoria: "Temáticas Especiais",
    titulo: "Rota dos Cânions",
    subtitulo: "Estradas vertiginosas e natureza bruta",
    regiao: "Sul",
    distancia: "420 km",
    duracao: "3 dias",
    nivel: "Intermediário",
    tipo: "Misto",
    historia: `Uma rota intensa entre cânions e estradas remotas, ideal para quem busca natureza e isolamento.`,
    caminho: [
      "Cambará do Sul",
      "Praia Grande (SC)",
      "Serra do Faxinal"
    ],
    experiencia: [
      "Pilotagem técnica",
      "Natureza selvagem",
      "Estradas pouco movimentadas",
      "Aventura real"
    ]
  },

  {
    slug: "moto-e-fotografia",
    categoria: "Temáticas Especiais",
    titulo: "Moto & Fotografia",
    subtitulo: "Viajar devagar para enxergar mais",
    regiao: "Sul",
    distancia: "Variável",
    duracao: "Flexível",
    nivel: "Fácil",
    tipo: "Misto",
    historia: `Roteiro livre, pensado para quem gosta de rodar sem destino fixo, buscando imagens, detalhes e momentos.`,
    caminho: [
      "Definido pelo viajante",
      "Paradas espontâneas",
      "Retornos alternativos"
    ],
    experiencia: [
      "Viagem sem pressa",
      "Observação do entorno",
      "Fotografia de estrada",
      "Liberdade total"
    ]
  },

  {
    slug: "saneamento-basico",
    categoria: "Temáticas Cinematográficas",
    titulo: "Saneamento Básico",
    subtitulo: "Locações e bastidores do cinema gaúcho",
    regiao: "Sul",
    distancia: "200 km",
    duracao: "2 dias",
    nivel: "Fácil",
    tipo: "Asfalto",
    historia: `Roteiro pelas cidades e paisagens que serviram de locação para o filme "Saneamento Básico".`,
    caminho: [
      "Bento Gonçalves",
      "Carlos Barbosa",
      "Garibaldi"
    ],
    experiencia: [
      "Cinema nacional",
      "Paisagens reais",
      "Viagem cultural",
      "Curiosidade histórica"
    ]
  },

  {
    slug: "o-quatrilho",
    categoria: "Temáticas Cinematográficas",
    titulo: "O Quatrilho",
    subtitulo: "Cenários de um clássico do cinema nacional",
    regiao: "Sul",
    distancia: "260 km",
    duracao: "2 dias",
    nivel: "Intermediário",
    tipo: "Asfalto",
    historia: `Viagem pelos cenários que deram vida ao filme "O Quatrilho", explorando a imigração italiana e o interior gaúcho.`,
    caminho: [
      "Caxias do Sul",
      "Farroupilha",
      "Bento Gonçalves"
    ],
    experiencia: [
      "Cinema e história",
      "Estradas rurais",
      "Narrativa envolvente",
      "Viagem cultural"
    ]
  }
];

validateRoteiros(roteiros);

export default roteiros;