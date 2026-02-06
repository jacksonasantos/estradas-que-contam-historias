import { parseCsv } from "../utils/parseCsv";

// Caminho relativo ao projeto
const csvPath = new URL("../../public/roteiros.csv", import.meta.url);

// Função assíncrona para ler e converter o CSV
const roteiros = await parseCsv(csvPath);

export default roteiros;