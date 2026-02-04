import { parseRoteirosCsv } from "../utils/parseRoteirosCsv";

// Caminho relativo ao projeto
const csvPath = new URL("../../public/roteiros.csv", import.meta.url);

// Função assíncrona para ler e converter o CSV
const roteiros = await parseRoteirosCsv(csvPath);

export default roteiros;