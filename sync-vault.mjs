// Kopiuje ../vault do content/ (bez .obsidian), notatkę 00 zamienia na index.md z aliasem.
import fs from "node:fs"
import path from "node:path"

const src = path.resolve("..", "vault")
const dst = path.resolve("content")
fs.rmSync(dst, { recursive: true, force: true })
fs.cpSync(src, dst, { recursive: true, filter: (p) => !p.includes(".obsidian") })

const home = path.join(dst, "00 - Impresjonizm.md")
const text = fs.readFileSync(home, "utf8")
fs.writeFileSync(
  path.join(dst, "index.md"),
  `---\ntitle: Impresjonizm w malarstwie\naliases:\n  - "00 - Impresjonizm"\n---\n\n${text}`,
)
fs.rmSync(home)
