import fs from "fs/promises";

export async function parseRoteirosCsv(csvPath: URL): Promise<any[]> {
  // Lê o arquivo CSV com encoding utf-8 explícito
  const raw = await fs.readFile(csvPath, { encoding: "utf-8" });
  const [header, ...lines] = raw.split(/\r?\n/).filter(Boolean);
  const keys = header.split(";").map(k => k.trim());

  return lines.map(line => {
    const values = line.split(";").map(v => v.trim());
    const obj: any = {};
    keys.forEach((key, i) => {
      // Trata campos compostos (caminho, experiencia)
      if (["caminho", "experiencia"].includes(key)) {
        obj[key] = values[i] ? values[i].split("|").map(s => s.trim()) : [];
      } else {
        obj[key] = values[i];
      }
    });
    return obj;
  });
}
