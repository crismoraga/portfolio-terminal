'use client';

import React from 'react';
import { portfolioData } from '../data/portfolioData';

type CommandOutput = {
  result: JSX.Element | JSX.Element[];
  newPath?: string;
};

class CommandProcessor {
  static process(command: string, currentPath: string): CommandOutput {
    const args = command.trim().split(' ');
    const cmd = args[0].toLowerCase();
    
    switch (cmd) {
      case 'help':
        return this.help();
      case 'clear':
        return this.clear();
      case 'ls':
        return this.ls(currentPath);
      case 'cd':
        return this.cd(args[1] || '~', currentPath);
      case 'pwd':
        return this.pwd(currentPath);
      case 'cat':
        return this.cat(args[1], currentPath);
      case 'about':
        return this.about();
      case 'skills':
        return this.skills();
      case 'projects':
        return this.projects();
      case 'contact':
        return this.contact();
      case 'education':
        return this.education();
      case 'experience':
        return this.experience();
      case 'whoami':
        return this.whoami();
      case 'date':
        return this.date();
      case 'echo':
        return this.echo(args.slice(1).join(' '));
      case 'matrix':
        return this.matrix();
      default:
        return {
          result: <p className="error">Comando no reconocido: {cmd}. Escribe 'help' para ver comandos disponibles.</p>
        };
    }
  }

  static help(): CommandOutput {
    return {
      result: (
        <div>
          <p className="success">Comandos disponibles:</p>
          <p><span className="success">help</span> - Muestra esta ayuda</p>
          <p><span className="success">clear</span> - Limpia la terminal</p>
          <p><span className="success">ls</span> - Lista el contenido del directorio</p>
          <p><span className="success">cd [dir]</span> - Cambia el directorio actual</p>
          <p><span className="success">pwd</span> - Muestra el directorio actual</p>
          <p><span className="success">cat [file]</span> - Muestra el contenido de un archivo</p>
          <p><span className="success">about</span> - Información sobre mí</p>
          <p><span className="success">skills</span> - Mis habilidades técnicas</p>
          <p><span className="success">projects</span> - Mis proyectos</p>
          <p><span className="success">contact</span> - Información de contacto</p>
          <p><span className="success">education</span> - Mi formación académica</p>
          <p><span className="success">experience</span> - Mi experiencia laboral</p>
          <p><span className="success">whoami</span> - Quién soy</p>
          <p><span className="success">date</span> - Muestra la fecha y hora actual</p>
          <p><span className="success">echo [text]</span> - Muestra un texto</p>
          <p><span className="success">matrix</span> - Activa modo Matrix</p>
        </div>
      )
    };
  }

  static clear(): CommandOutput {
    // The Terminal component will handle this specially
    return { result: <div></div> };
  }

  static ls(path: string): CommandOutput {
    // Simplificado para la demo - expandir con datos reales
    let content: JSX.Element[] = [];
    
    if (path === '~') {
      content = [
        <p key="about">about.md</p>,
        <p key="projects">proyectos/</p>,
        <p key="contacto">contacto/</p>,
        <p key="educacion">educacion/</p>,
        <p key="experiencia">experiencia/</p>,
        <p key="skills">skills.json</p>,
      ];
    } else if (path === '~/proyectos') {
      content = portfolioData.projects.map((project, index) => (
        <p key={index}>{project.name}.md</p>
      ));
    }
    
    return { result: <div className="grid grid-cols-3 gap-4">{content}</div> };
  }

  static cd(dir: string, currentPath: string): CommandOutput {
    if (dir === '~' || dir === '/') {
      return {
        result: <></>,
        newPath: '~'
      };
    }
    
    if (dir === '..') {
      if (currentPath === '~') {
        return {
          result: <p className="error">Ya estás en el directorio raíz</p>,
          newPath: '~'
        };
      }
      
      const parts = currentPath.split('/');
      parts.pop();
      return {
        result: <></>,
        newPath: parts.join('/')
      };
    }
    
    // Simplificado para la demo - expandir con datos reales
    if (dir === 'proyectos' && currentPath === '~') {
      return {
        result: <></>,
        newPath: '~/proyectos'
      };
    }
    
    return {
      result: <p className="error">Directorio no encontrado: {dir}</p>
    };
  }

  static pwd(currentPath: string): CommandOutput {
    return {
      result: <p>{currentPath}</p>
    };
  }

  static cat(filename: string, path: string): CommandOutput {
    if (!filename) {
      return {
        result: <p className="error">Debes especificar un archivo</p>
      };
    }
    
    if (filename === 'about.md' && path === '~') {
      return {
        result: (
          <div>
            <h2 className="text-xl success mb-2">Sobre Mí</h2>
            <p>
              {portfolioData.about}
            </p>
          </div>
        )
      };
    }
    
    if (filename === 'skills.json' && path === '~') {
      return {
        result: (
          <div>
            <h2 className="text-xl success mb-2">Mis Habilidades</h2>
            <pre>{JSON.stringify(portfolioData.skills, null, 2)}</pre>
          </div>
        )
      };
    }
    
    // Proyectos individuales
    if (path === '~/proyectos' && filename.endsWith('.md')) {
      const projectName = filename.replace('.md', '');
      const project = portfolioData.projects.find(p => p.name === projectName);
      
      if (project) {
        return {
          result: (
            <div>
              <h2 className="text-xl success mb-2">{project.name}</h2>
              <p className="mb-2">{project.description}</p>
              <p className="mb-2">Tecnologías: {project.technologies.join(', ')}</p>
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="clickable">
                Ver proyecto →
              </a>
            </div>
          )
        };
      }
    }
    
    return {
      result: <p className="error">Archivo no encontrado: {filename}</p>
    };
  }

  static about(): CommandOutput {
    return {
      result: (
        <div>
          <h2 className="text-xl success mb-2">Sobre Mí</h2>
          <p>
            {portfolioData.about}
          </p>
        </div>
      )
    };
  }

  static skills(): CommandOutput {
    return {
      result: (
        <div>
          <h2 className="text-xl success mb-2">Mis Habilidades</h2>
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(portfolioData.skills).map(([category, skills], index) => (
              <div key={index} className="mb-4">
                <h3 className="text-lg mb-2 warning">{category}</h3>
                <ul className="list-disc pl-5">
                  {skills.map((skill, skillIndex) => (
                    <li key={skillIndex}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )
    };
  }

  static projects(): CommandOutput {
    return {
      result: (
        <div>
          <h2 className="text-xl success mb-2">Mis Proyectos</h2>
          <div className="grid grid-cols-1 gap-4">
            {portfolioData.projects.map((project, index) => (
              <div key={index} className="mb-4 border border-green-900 p-4 rounded">
                <h3 className="text-lg warning mb-1">{project.name}</h3>
                <p className="mb-1">{project.description}</p>
                <p className="mb-2">Tecnologías: {project.technologies.join(', ')}</p>
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="clickable">
                  Ver proyecto →
                </a>
              </div>
            ))}
          </div>
        </div>
      )
    };
  }

  static contact(): CommandOutput {
    return {
      result: (
        <div>
          <h2 className="text-xl success mb-2">Contacto</h2>
          <p>Email: <a href={`mailto:${portfolioData.contact.email}`} className="clickable">{portfolioData.contact.email}</a></p>
          <p>LinkedIn: <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="clickable">LinkedIn</a></p>
          <p>GitHub: <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" className="clickable">GitHub</a></p>
          <p>Twitter: <a href={portfolioData.contact.twitter} target="_blank" rel="noopener noreferrer" className="clickable">Twitter</a></p>
        </div>
      )
    };
  }

  static education(): CommandOutput {
    return {
      result: (
        <div>
          <h2 className="text-xl success mb-2">Formación Académica</h2>
          {portfolioData.education.map((edu, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-lg warning mb-1">{edu.degree}</h3>
              <p>{edu.institution} ({edu.startYear} - {edu.endYear || 'Presente'})</p>
              <p>{edu.description}</p>
            </div>
          ))}
        </div>
      )
    };
  }

  static experience(): CommandOutput {
    return {
      result: (
        <div>
          <h2 className="text-xl success mb-2">Experiencia Laboral</h2>
          {portfolioData.experience.map((exp, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-lg warning mb-1">{exp.position}</h3>
              <p>{exp.company} ({exp.startDate} - {exp.endDate || 'Presente'})</p>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      )
    };
  }

  static whoami(): CommandOutput {
    return {
      result: <p>{portfolioData.name}</p>
    };
  }

  static date(): CommandOutput {
    const date = new Date();
    return {
      result: <p>{date.toLocaleString()}</p>
    };
  }

  static echo(text: string): CommandOutput {
    return {
      result: <p>{text}</p>
    };
  }

  static matrix(): CommandOutput {
    return {
      result: (
        <pre className="text-xs">
          {Array(10).fill(0).map((_, i) => (
            <div key={i}>
              {Array(40).fill(0).map((_, j) => (
                <span key={j}>{String.fromCharCode(Math.floor(Math.random() * 26) + 97)}</span>
              ))}
            </div>
          ))}
        </pre>
      )
    };
  }
}

export default CommandProcessor;
