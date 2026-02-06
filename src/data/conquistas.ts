import { parseCsv } from "../utils/parseCsv";

// Caminho relativo ao projeto
const csvPath = new URL("../../public/conquistas.csv", import.meta.url);

// Função assíncrona para ler e converter o CSV
const conquistas = await parseCsv(csvPath);

export default conquistas;