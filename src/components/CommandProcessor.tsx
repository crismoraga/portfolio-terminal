'use client';

import React from 'react';
import { portfolioData } from '../data/portfolioData';

type CommandOutput = { result: React.ReactElement | React.ReactElement[]; newPath?: string };

const FORTUNES = ['La seguridad es un proceso.', 'Código limpio, mente limpia.', 'Aprender nunca termina.', 'Automatiza para crear.'];
const JOKES = ['¿Modo oscuro? La luz atrae bugs!', 'Un SQL entra a un bar y pregunta: ¿Puedo JOIN?', 'Feature, no bug.', 'Pentesters: detectives del software.'];
const QUOTES = ['La seguridad no es un producto, es un proceso. – B. Schneier', 'Talk is cheap. Show me the code. – Linus Torvalds', 'First, solve the problem. Then, write the code.', 'La automatización libera tu mente para la creatividad.'];

class CommandProcessor {
  static process(command: string, currentPath: string): CommandOutput {
    const args = command.trim().split(/\s+/).filter(Boolean);
    const cmd = (args[0] || '').toLowerCase();
    switch (cmd) {
      case 'help': return this.help();
      case 'clear': return this.clear();
      case 'ls': return this.ls(currentPath);
      case 'cd': return this.cd(args[1] || '~', currentPath);
      case 'pwd': return this.pwd(currentPath);
      case 'cat': return this.cat(args[1], currentPath);
      case 'about': return this.about();
      case 'whoami': return this.whoami();
      case 'contact': return this.contact();
      case 'cv':
      case 'resume': return this.resume();
      case 'skills': return this.skills();
      case 'projects': return this.projects();
      case 'education': return this.education();
      case 'experience': return this.experience();
      case 'certifications':
      case 'certs': return this.certifications();
      case 'ayudantias':
      case 'ta': return this.teachingAssistant();
      case 'extracurricular': return this.extracurricular();
      case 'achievements': return this.achievements();
      case 'interests': return this.interests();
      case 'languages': return this.languages();
      case 'competencias':
      case 'competencies': return this.competencies();
      case 'aptitudes': return this.aptitudes();
      case 'date': return this.date();
      case 'echo': return this.echo(args.slice(1).join(' '));
      case 'downloadcv': return this.downloadCv();
      case 'matrix': return this.matrix();
      case 'sudo': return this.sudo(args.slice(1).join(' '));
      case 'hack':
      case 'hackthematrix': return this.hack();
      case 'neofetch': return this.neofetch();
      case 'cowsay': return this.cowsay(args.slice(1).join(' '));
      case 'fortune': return this.fortune();
      case 'joke': return this.joke();
      case 'easter':
      case 'easteregg': return this.easterEgg();
      case 'banner': return this.banner();
      case 'ascii': return this.ascii(args.slice(1).join(' '));
      case 'scan': return this.scan();
      case 'quote': return this.quote();
      default: return cmd ? { result: <p className="error">Comando no reconocido: {cmd}. Escribe 'help'.</p> } : { result: <></> };
    }
  }

  // ----- Básicos -----
  static help(): CommandOutput { return { result: <div className="font-mono text-xs"><p className="success">SISTEMA: help clear ls cd pwd cat</p><p className="success">PERSONAL: about whoami contact cv</p><p className="success">CARRERA: experience education projects skills certifications ayudantias extracurricular</p><p className="success">PERFIL: achievements interests languages competencias aptitudes</p><p className="success">UTILS: date echo downloadcv</p><p className="success">FUN: matrix sudo hack neofetch cowsay fortune joke banner ascii scan quote easter</p></div> }; }
  static clear(): CommandOutput { return { result: <></> }; }
  static pwd(path: string): CommandOutput { return { result: <p>{path}</p> }; }
  static echo(text: string): CommandOutput { return { result: <p>{text}</p> }; }
  static date(): CommandOutput { return { result: <p>{new Date().toLocaleString()}</p> }; }
  static whoami(): CommandOutput { return { result: <p>{portfolioData.name}</p> }; }

  // ----- FS Simulado -----
  static ls(path: string): CommandOutput { const root = [<p key="a">about.md</p>, <p key="p">proyectos/</p>, <p key="c">contacto/</p>, <p key="e1">educacion/</p>, <p key="e2">experiencia/</p>, <p key="s">skills.json</p>]; const content = path === '~' ? root : path === '~/proyectos' ? portfolioData.projects.map((p,i)=><p key={i}>{p.name}.md</p>) : []; return { result: <div className="grid grid-cols-3 gap-1">{content}</div> }; }
  static cd(dir: string, currentPath: string): CommandOutput { if (dir === '~' || dir === '/') return { result: <></>, newPath: '~' }; if (dir === '..') { if (currentPath === '~') return { result: <p className="error">Ya estás en el directorio raíz</p>, newPath: '~' }; const parts = currentPath.split('/'); parts.pop(); return { result: <></>, newPath: parts.join('/') }; } if (dir === 'proyectos' && currentPath === '~') return { result: <></>, newPath: '~/proyectos' }; return { result: <p className="error">Directorio no encontrado: {dir}</p> }; }
  static cat(filename: string | undefined, path: string): CommandOutput { if (!filename) return { result: <p className="error">Debes especificar un archivo</p> }; if (filename === 'about.md' && path === '~') return this.about(); if (filename === 'skills.json' && path === '~') return { result: <pre className="text-[10px]">{JSON.stringify(portfolioData.skills, null, 2)}</pre> }; if (path === '~/proyectos' && filename.endsWith('.md')) { const project = portfolioData.projects.find(p => p.name === filename.replace('.md','')); if (project) return { result: <div><h2 className="text-lg success mb-1">{project.name}</h2><p>{project.description}</p><p className="mb-1">Tech: {project.technologies.join(', ')}</p><a className="clickable" href={project.url} target="_blank" rel="noopener noreferrer">Ver →</a></div> }; } return { result: <p className="error">Archivo no encontrado: {filename}</p> }; }

  // ----- Datos CV -----
  static about(): CommandOutput { return { result: <div><h2 className="text-lg success mb-1">Sobre Mí</h2><p>{portfolioData.about}</p></div> }; }
  static contact(): CommandOutput { return { result: <div><h2 className="text-lg success mb-1">Contacto</h2><p>Email: <a className="clickable" href={`mailto:${portfolioData.contact.email}`}>{portfolioData.contact.email}</a></p><p>Tel: {portfolioData.contact.phone}</p><p>Ubicación: {portfolioData.contact.location}</p><p>LinkedIn: <a className="clickable" href={portfolioData.contact.linkedin} target="_blank">LinkedIn</a></p><p>GitHub: <a className="clickable" href={portfolioData.contact.github} target="_blank">GitHub</a></p></div> }; }
  static skills(): CommandOutput { return { result: <div><h2 className="text-lg success mb-1">Habilidades</h2><div className="grid grid-cols-2 gap-2">{Object.entries(portfolioData.skills).map(([cat, list],i)=><div key={i}><h3 className="warning text-sm">{cat}</h3><ul className="list-disc pl-4 text-xs">{list.map((s,j)=><li key={j}>{s}</li>)}</ul></div>)}</div></div> }; }
  static projects(): CommandOutput { return { result: <div><h2 className="text-lg success mb-1">Proyectos</h2>{portfolioData.projects.map((p,i)=><div key={i} className="mb-3 border border-green-900 p-2 rounded"><h3 className="warning">{p.name}</h3><p className="text-xs mb-1">{p.description}</p><p className="text-[10px] mb-1">Tech: {p.technologies.join(', ')}</p><a className="clickable text-xs" href={p.url} target="_blank" rel="noopener noreferrer">Ver →</a></div>)}</div> }; }
  static education(): CommandOutput { return { result: <div><h2 className="text-lg success mb-1">Formación</h2>{portfolioData.education.map((e,i)=><div key={i} className="mb-3"><h3 className="warning text-sm">{e.degree}</h3><p className="text-xs">{e.institution} ({e.startYear} - {e.endYear || 'Presente'})</p><p className="text-xs">{e.description}</p></div>)}</div> }; }
  static experience(): CommandOutput { return { result: <div><h2 className="text-lg success mb-1">Experiencia</h2>{portfolioData.experience.map((ex,i)=><div key={i} className="mb-3"><h3 className="warning text-sm">{ex.position}</h3><p className="text-xs">{ex.company} ({ex.startDate} - {ex.endDate || 'Presente'})</p><p className="text-xs">{ex.description}</p></div>)}</div> }; }
  static certifications(): CommandOutput { return { result: <div><h2 className="text-lg success mb-1">Certificaciones</h2>{portfolioData.certifications.map((c,i)=><div key={i} className="mb-2"><h3 className="warning text-sm">{c.name}</h3><p className="text-[10px]">{c.issuer} - {c.date}</p>{c.url && <a className="clickable text-[10px]" href={c.url} target="_blank" rel="noopener noreferrer">Ver →</a>}</div>)}</div> }; }
  static teachingAssistant(): CommandOutput { return { result: <div><h2 className="text-lg success mb-1">Ayudantías</h2>{portfolioData.teachingAssistant.map((ta,i)=><div key={i} className="mb-2"><h3 className="warning text-sm">{ta.course}</h3><p className="text-[10px]">{ta.role} ({ta.period})</p><p className="text-[10px]">{ta.description}</p></div>)}</div> }; }
  static extracurricular(): CommandOutput { return { result: <div><h2 className="text-lg success mb-1">Extracurricular</h2>{portfolioData.extracurricular.map((a,i)=><div key={i} className="mb-2"><h3 className="warning text-sm">{a.role}</h3><p className="text-[10px]">{a.organization} ({a.period})</p><p className="text-[10px]">{a.description}</p></div>)}</div> }; }
  static interests(): CommandOutput { return { result: <div><h2 className="text-lg success mb-1">Intereses</h2><ul className="list-disc pl-4 text-xs">{portfolioData.interests.map((v,i)=><li key={i}>{v}</li>)}</ul></div> }; }
  static achievements(): CommandOutput { return { result: <div><h2 className="text-lg success mb-1">Logros</h2><ul className="list-disc pl-4 text-xs">{portfolioData.achievements.map((v,i)=><li key={i}>{v}</li>)}</ul></div> }; }
  static languages(): CommandOutput { return { result: <div><h2 className="text-lg success mb-1">Idiomas</h2><ul className="list-disc pl-4 text-xs">{portfolioData.languages.map((l,i)=><li key={i}>{l.name} - {l.level}</li>)}</ul></div> }; }
  static competencies(): CommandOutput { const comp = portfolioData.technicalCompetencies || {}; return { result: <div><h2 className="text-lg success mb-1">Competencias Técnicas</h2>{Object.entries(comp).map(([area, items],i)=><div key={i} className="mb-2"><h3 className="warning text-sm">{area}</h3><ul className="list-disc pl-4 text-xs">{(items as string[]).map((it,k)=><li key={k}>{it}</li>)}</ul></div>)}</div> }; }
  static aptitudes(): CommandOutput { const list = portfolioData.aptitudes || []; return { result: <div><h2 className="text-lg success mb-1">Aptitudes</h2><ul className="list-disc pl-4 text-xs">{list.map((v,i)=><li key={i}>{v}</li>)}</ul></div> }; }
  static resume(): CommandOutput { return { result: <div><h2 className="text-lg success mb-1">📄 Currículum - {portfolioData.name}</h2><p className="text-xs">Email: {portfolioData.contact.email} · Tel: {portfolioData.contact.phone}</p><p className="text-xs">Ubicación: {portfolioData.contact.location}</p><p className="text-xs mt-1">{portfolioData.about}</p><p className="dim text-[10px] mt-1">experience education projects skills competencias aptitudes</p></div> }; }

  // ----- Fun / utilidades -----
  static matrix(): CommandOutput { return { result: <pre className="text-[10px] leading-3">{Array.from({length:8}).map((_,i)=><div key={i}>{Array.from({length:56}).map((_,j)=><span key={j}>{String.fromCharCode(0x30A0 + Math.floor(Math.random()*96))}</span>)}</div>)}</pre> }; }
  static sudo(_c: string): CommandOutput { const m=["Nice try!","sudo: permission denied","We trust you have received the usual lecture...","Error: user not in sudoers file."]; return { result:<p className="error">{m[Math.floor(Math.random()*m.length)]}</p> }; }
  static hack(): CommandOutput { return { result:<div><p className="success">Iniciando secuencia de hackeo...</p><p className="warning">▓▓▓▓▓▓▓▓▓▓ 100%</p><p className="success">Acceso concedido (simulado)</p><pre className="text-[10px] mt-1">{`   _______________\n  < I'm in! >\n   ---------------\n          \\   ^__^\n           \\  (oo)\\_______\n              (__)\\       )\\/\\\n                  ||----w |\n                  ||     ||`}</pre></div> }; }
  static neofetch(): CommandOutput { return { result:<div className="font-mono"><pre className="text-[10px]">{`Kernel: Next.js 15.2.4\nReact: 19 | Proyectos: ${portfolioData.projects.length} | Skills: ${Object.values(portfolioData.skills).flat().length}`}</pre></div> }; }
  static cowsay(text:string): CommandOutput { const msg=text||'Moo!'; const len=msg.length+2; return { result:<pre className="text-[10px]">{` ${'_'.repeat(len)}\n< ${msg} >\n ${'-'.repeat(len)}\n        \\   ^__^\n         \\  (oo)\\_______\n            (__)\\       )\\/\\\n                ||----w |\n                ||     ||`}</pre> }; }
  static fortune(): CommandOutput { return { result:<p className="success italic text-xs">{FORTUNES[Math.floor(Math.random()*FORTUNES.length)]}</p> }; }
  static joke(): CommandOutput { return { result:<p className="warning text-xs">{JOKES[Math.floor(Math.random()*JOKES.length)]}</p> }; }
  static quote(): CommandOutput { return { result:<p className="italic text-xs">{QUOTES[Math.floor(Math.random()*QUOTES.length)]}</p> }; }
  static banner(): CommandOutput { return { result:<pre className="text-xs">{`==============================\n PORTFOLIO TERMINAL\n CRISTÓBAL MORAGA GUERRERO\n==============================`}</pre> }; }
  static ascii(text:string): CommandOutput { const input=(text||'CRISTOBAL').toUpperCase().slice(0,12); const map:Record<string,string[]>= {A:[' ██ ','█  █','████','█  █','█  █'],B:['███ ','█  █','███ ','█  █','███ '],C:[' ██ ','█  █','█   ','█  █',' ██ '],D:['███ ','█  █','█  █','█  █','███ '],E:['████','█   ','███ ','█   ','████'],L:['█   ','█   ','█   ','█   ','████'],O:[' ██ ','█  █','█  █','█  █',' ██ '],R:['███ ','█  █','███ ','█ █ ','█  █'],S:[' ███','█   ',' ██ ','   █','███ '],T:['████',' █  ',' █  ',' █  ',' █  '],I:['███',' █ ',' █ ',' █ ','███'],M:['█  █','██ ██','█ █ █','█   █','█   █'],G:[' ██ ','█  █','█ ██','█  █',' ███'],U:['█  █','█  █','█  █','█  █',' ██ '],' ':['  ','  ','  ','  ','  ']}; const rows=[0,1,2,3,4].map(r=>input.split('').map(ch=>(map[ch]||map[' '])[r]).join('  ')); return { result:<pre className="text-[10px] leading-4">{rows.join('\n')}</pre> }; }
  static scan(): CommandOutput { const hosts=['github.com','linkedin.com','localhost','portfolio.local']; return { result:<div className="font-mono text-[10px]"><p>Iniciando escaneo pseudo-nmap...</p><pre>{hosts.map(h=>`${h} -> 22(open) 80(open) 443(open) 1337(filtered)`).join('\n')}</pre><p className="success mt-1">Completado ✔</p></div> }; }
  static easterEgg(): CommandOutput { const eggs=['Konami Code (↑↑↓↓←→←→BA)','matrix','hack','cowsay','sudo echo hola','ascii CRISTOBAL']; return { result:<div><h2 className="text-lg success mb-1">🎮 Easter Eggs</h2><ul className="list-disc pl-4 text-xs">{eggs.map((e,i)=><li key={i}>{e}</li>)}</ul></div> }; }
  static downloadCv(): CommandOutput { return { result:<p className="text-xs">Descargar CV: <a className="clickable" href="/CV Cristóbal Moraga G..pdf" download>CV PDF</a></p> }; }
}

export default CommandProcessor;
