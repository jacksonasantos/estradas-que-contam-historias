import type { Roteiro } from "../types/roteiro";

export function validateRoteiros(data: unknown): asserts data is Roteiro[] {
  if (!Array.isArray(data)) {
    throw new Error("Roteiros: o dado não é um array");
  }

  data.forEach((item, index) => {
    const prefix = `Roteiro [${index}]`;

    if (typeof item !== "object" || item === null) {
      throw new Error(`${prefix} não é um objeto`);
    }

    const r = item as Partial<Roteiro>;

    const requiredFields: (keyof Roteiro)[] = [
      "slug",
      "categoria",
      "titulo",
      "subtitulo",
      "regiao",
      "distancia",
      "duracao",
      "nivel",
      "tipo"
    ];

    requiredFields.forEach(field => {
      if (!r[field] || typeof r[field] !== "string") {
        throw new Error(`${prefix} campo inválido ou ausente: ${field}`);
      }
    });
  });
}
