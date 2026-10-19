import {readFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
export function validateLayer(source) {
  return !/(?:\bimport\s*(?:[({*]|['"]|[\w]+\s+from)|\brequire\s*\(|\bprocess\s*\.|\b__dirname\b)/.test(source);
}
export function checkLayers() {
  if (!validateLayer("document.querySelector('button').addEventListener('click', () => {});")) throw Error('Fixture permitida rejeitada.');
  if (validateLayer("import fs from 'node:fs';")) throw Error('Violação de camada não detectada.');
  if (!validateLayer(readFileSync(new URL('../dist/app.js', import.meta.url),'utf8'))) throw Error('A UI depende de módulos ou código de servidor.');
  return true;
}
if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  try { checkLayers(); console.log('Camadas: OK; fixtures permitida e proibida verificadas.'); }
  catch (error) { console.error(error.message); process.exitCode=1; }
}
