import {readFileSync,existsSync,writeFileSync} from 'node:fs';
import {resolve,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {spawnSync} from 'node:child_process';
import {checkLayers} from './check-layers.mjs';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const html=readFileSync(resolve(root,'dist/index.html'),'utf8');
const css=readFileSync(resolve(root,'dist/styles.css'),'utf8');
const js=readFileSync(resolve(root,'dist/app.js'),'utf8');
const catalog=JSON.parse(readFileSync(resolve(root,'docs/acceptance.json'),'utf8'));
const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(match=>match[1]);
const urls=[...html.matchAll(/(?:src|href)="([^"]+)"/g)].map(match=>match[1]);
const assets=urls.filter(url=>!url.startsWith('#')&&!/^https?:/.test(url));
const checks={
  document:html.includes('lang="pt-BR"')&&/<title>[^<]+<\/title>/.test(html)&&html.includes('name="description"')&&[...html.matchAll(/<h1\b/g)].length===1,
  design:html.includes('family=Poppins')&&css.includes('@media(max-width:700px)')&&css.includes('prefers-reduced-motion'),
  assets:assets.every(asset=>existsSync(resolve(root,'dist',asset)))&&[...html.matchAll(/<img\b[^>]*>/g)].every(match=>/\balt="/.test(match[0])),
  anchors:urls.filter(url=>url.startsWith('#')).every(url=>ids.includes(url.slice(1)))&&ids.length===new Set(ids).size,
  contact:html.includes('https://www.instagram.com/babi_institutodebeleza/')&&[...html.matchAll(/<a\b[^>]*target="_blank"[^>]*>/g)].every(match=>match[0].includes('noopener noreferrer'))&&!html.includes('api.whatsapp.com'),
  syntax:spawnSync(process.execPath,['--check',resolve(root,'dist/app.js')],{encoding:'utf8'}).status===0&&checkLayers(),
  portfolio:html.includes('aria-labelledby="lightbox-title"')&&html.includes('aria-live="polite"')&&[...html.matchAll(/data-filter="/g)].length===4&&js.includes('dialog.showModal()')&&js.includes('card.hidden = !visible'),
  sections:['servicos','sobre','portfolio','contato'].every(id=>ids.includes(id))&&html.includes('class="faq-list reveal"')&&html.includes('class="ritual-grid"')
};
if(catalog.length!==8||new Set(catalog.map(item=>item.id)).size!==8)throw Error('O catálogo mínimo de oito critérios não pode ser reduzido.');
const results=catalog.map(item=>({...item,passed:checks[item.check]===true}));
const passed=results.filter(item=>item.passed).length;
const report=['# Checklist de aceitação','', 'Gerado por `node scripts/gate.mjs`. Fonte: `docs/acceptance.json`.', '', `Total: ${results.length} | Concluídos: ${passed} | Progresso dos checks estáticos: ${(passed/results.length*100).toFixed(0)}%`, '', '| ID | Critério | Status | Evidência |','| --- | --- | --- | --- |',...results.map(item=>`| ${item.id} | ${item.criterion} | ${item.passed?'OK':'FALHOU'} | check ${item.check} |`),'','A inspeção visual e os testes interativos são registrados separadamente em `docs/qa.md`. O percentual não mede publicação ou revisão comercial.',''].join('\n');
writeFileSync(resolve(root,'docs/checklist-paridade.md'),report);
results.forEach(item=>console.log(`${item.passed?'OK':'FALHOU'} ${item.id}: ${item.criterion}`));
console.log(`Gate: ${passed}/${results.length}`);
if(passed!==results.length)process.exitCode=1;
