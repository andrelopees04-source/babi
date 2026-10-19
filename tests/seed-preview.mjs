import {DatabaseSync} from 'node:sqlite';
import {readFileSync,mkdirSync} from 'node:fs';
import {DEFAULT_SETTINGS} from '../server/core.mjs';
mkdirSync('data',{recursive:true});
const db=new DatabaseSync('data/qa-preview.sqlite');
db.exec(readFileSync('migrations/0001-bookings.sql','utf8'));
const settings=structuredClone(DEFAULT_SETTINGS);settings.enabled=true;settings.weekly.forEach(day=>day.enabled=true);settings.leadMinutes=0;
db.prepare('INSERT INTO settings(id,value) VALUES(1,?) ON CONFLICT(id) DO UPDATE SET value=excluded.value').run(JSON.stringify(settings));
db.close();console.log('Banco de QA isolado preparado. A agenda real permanece pausada.');
