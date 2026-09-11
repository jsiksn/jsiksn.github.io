// 토큰 규율 검사: src/ 안의 .astro/.css 에서 tokens.css 밖에 직접 적은 색(hex)과 px 값을 찾는다.
// 허용 px: 1px(hairline), 2px(focus ring). 실행: npm run tokens:lint
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = new URL("../src/", import.meta.url).pathname;
const ALLOW_PX = new Set(["0px", "1px", "2px"]);
const files = [];
(function walk(d) {
  for (const n of readdirSync(d)) {
    const p = join(d, n);
    if (statSync(p).isDirectory()) walk(p);
    else if (/\.(astro|css)$/.test(n) && !p.endsWith("tokens.css")) files.push(p);
  }
})(ROOT);

let problems = 0;
for (const f of files) {
  const src = readFileSync(f, "utf8");
  // <style> 블록과 .css 전체만 검사 (마크업 속성의 width/height 숫자는 대상 아님)
  const css = f.endsWith(".css") ? src : [...src.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/g)].map((m) => m[1]).join("\n");
  css.split("\n").forEach((line, i) => {
    const l = line.replace(/\/\*.*?\*\//g, "");
    for (const m of l.matchAll(/#[0-9a-fA-F]{3,8}\b/g)) { console.log(`${relative(ROOT, f)}:${i + 1} hex ${m[0]}`); problems++; }
    for (const m of l.matchAll(/(?<![\w.-])(\d+(?:\.\d+)?px)\b/g)) { if (!ALLOW_PX.has(m[1])) { console.log(`${relative(ROOT, f)}:${i + 1} px ${m[1]}`); problems++; } }
  });
}
console.log(problems ? `토큰 밖 직접 값 ${problems}건` : "토큰 밖 직접 값 없음");
process.exit(problems ? 1 : 0);
