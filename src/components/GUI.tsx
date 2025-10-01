'use client';

import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { FaHome, FaArrowLeft, FaDownload, FaUser, FaCode, FaFolder, FaGraduationCap, 
         FaBriefcase, FaEnvelope, FaCertificate, FaLanguage, FaStar, FaHeart } from 'react-icons/fa';

interface GUIProps {
  currentPath: string;
  setCurrentPath: (path: string) => void;
}

type ContentType = 'about' | 'projects' | 'contact' | 'education' | 'experience' | 
                 'skills' | 'certifications' | 'languages' | 'achievements' | 'interests' | 'project-details' | null;

interface BreadcrumbsProps {
  activeContent: ContentType;
  previousContent: ContentType | null;
  goBack: () => void;
  goHome: () => void;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ activeContent, previousContent, goBack, goHome }) => (
  <div className="breadcrumbs">
    <button 
      className="breadcrumb-button"
      onClick={goHome}
      title="Inicio"
    >
      <FaHome /> Inicio
    </button>
    
    {activeContent && (
      <>
        <span className="breadcrumb-separator">/</span>
        
        {previousContent && (
          <button 
            className="breadcrumb-button"
            onClick={goBack}
            title="Volver"
          >
            <FaArrowLeft /> Volver
          </button>
        )}
        
        <span className={previousContent ? "breadcrumb-current" : ""}>
          {activeContent === 'project-details' ? 'Detalles del proyecto' : 
            activeContent.charAt(0).toUpperCase() + activeContent.slice(1)}
        </span>
      </>
    )}
  </div>
);

const GUI: React.FC<GUIProps> = ({ currentPath: _currentPath, setCurrentPath: _setCurrentPath }) => {
  const [activeContent, setActiveContent] = useState<ContentType>(null);
  const [previousContent, setPreviousContent] = useState<ContentType | null>(null);
  const [selectedProject, setSelectedProject] = useState<typeof portfolioData.projects[0] | null>(null);
  
  const navigateTo = (content: ContentType) => {
    setPreviousContent(activeContent);
    setActiveContent(content);
  };
  
  const goBack = () => {
    setActiveContent(previousContent);
    setPreviousContent(null);
    if (selectedProject) {
      setSelectedProject(null);
    }
  };
  
  const goHome = () => {
    setActiveContent(null);
    setPreviousContent(null);
    setSelectedProject(null);
  };
  
  const openProjectDetails = (project: typeof portfolioData.projects[0]) => {
    setSelectedProject(project);
    setPreviousContent(activeContent);
    setActiveContent('project-details');
  };
  
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/CV Cristóbal Moraga G..pdf';
    link.download = 'CV Cristóbal Moraga G..pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const renderFolderContents = () => {
    if (activeContent === 'about') {
      return (
        <div className="section">
          <div className="about-header">
            <div className="profile-image-container">
              <div className="profile-image-placeholder">
                {/* Replace with actual image in production */}
                {/* <Image src="/profile.jpg" alt={portfolioData.name} width={200} height={200} /> */}
                <div className="profile-placeholder-text">
                  {portfolioData.name.split(' ').map(name => name[0]).join('')}
                </div>
              </div>
            </div>
            <div className="profile-info">
              <h1 className="profile-name">{portfolioData.name}</h1>
              <h2 className="profile-title">{portfolioData.title}</h2>
              <p className="profile-location">
                <span className="icon">📍</span> {portfolioData.contact.location}
              </p>
              <button className="download-resume-button" onClick={downloadResume}>
                <FaDownload className="mr-2" /> Descargar CV
              </button>
            </div>
          </div>
          
          <h2 className="section-title">Sobre Mí</h2>
          <p className="mb-4">{portfolioData.about}</p>
          
          <div className="quick-stats">
            <div className="stat-box">
              <span className="stat-number">{portfolioData.experience.length}+</span>
              <span className="stat-label">Años de experiencia</span>
            </div>
            <div className="stat-box">
              <span className="stat-number">{portfolioData.projects.length}+</span>
              <span className="stat-label">Proyectos completados</span>
            </div>
            <div className="stat-box">
              <span className="stat-number">{Object.values(portfolioData.skills).flat().length}+</span>
              <span className="stat-label">Tecnologías</span>
            </div>
            <div className="stat-box">
              <span className="stat-number">{portfolioData.certifications.length}</span>
              <span className="stat-label">Certificaciones</span>
            </div>
          </div>
          
          <div className="social-links">
            <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" className="social-link github">
              GitHub
            </a>
            <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="social-link linkedin">
              LinkedIn
            </a>
            <a href={`mailto:${portfolioData.contact.email}`} className="social-link email">
              Email
            </a>
          </div>
        </div>
      );
    }

    if (activeContent === 'skills') {
      return (
        <div className="section">
          <h2 className="section-title">Mis Habilidades</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(portfolioData.skills).map(([category, skills], index) => (
              <div key={index} className="skill-card">
                <h3 className="skill-category">{category}</h3>
                <div className="skill-tags">
                  {skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="skill-progress-section">
            <h3 className="text-lg success mb-4">Nivel de habilidades destacadas</h3>
            <div className="skill-bars">
              <div className="skill-bar-item">
                <div className="skill-bar-info">
                  <span>React.js</span>
                  <span>95%</span>
                </div>
                <div className="skill-bar-bg">
                  <div className="skill-bar-progress" style={{ width: '95%' }}></div>
                </div>
              </div>
              <div className="skill-bar-item">
                <div className="skill-bar-info">
                  <span>Node.js</span>
                  <span>90%</span>
                </div>
                <div className="skill-bar-bg">
                  <div className="skill-bar-progress" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div className="skill-bar-item">
                <div className="skill-bar-info">
                  <span>TypeScript</span>
                  <span>88%</span>
                </div>
                <div className="skill-bar-bg">
                  <div className="skill-bar-progress" style={{ width: '88%' }}></div>
                </div>
              </div>
              <div className="skill-bar-item">
                <div className="skill-bar-info">
                  <span>AWS</span>
                  <span>80%</span>
                </div>
                <div className="skill-bar-bg">
                  <div className="skill-bar-progress" style={{ width: '80%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (activeContent === 'projects') {
      return (
        <div className="section">
          <h2 className="section-title">Mis Proyectos</h2>
          <div className="projects-grid">
            {portfolioData.projects.map((project, index) => (
              <div key={index} className="project-card" onClick={() => openProjectDetails(project)}>
                <div className="project-image">
                  {/* In production, use real images */}
                  {/* <Image src={project.image} alt={project.name} width={300} height={180} /> */}
                  <div className="project-image-placeholder">
                    <span>{project.name[0]}</span>
                  </div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.name}</h3>
                  <p className="project-description">{project.description.substring(0, 100)}...</p>
                  <div className="project-tech-tags">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span key={techIndex} className="project-tech-tag">{tech}</span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="project-tech-tag">+{project.technologies.length - 3}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (activeContent === 'project-details' && selectedProject) {
      return (
        <div className="section project-details">
          <div className="project-details-header">
            <div className="project-details-image">
              {/* In production, use real images */}
              {/* <Image src={selectedProject.image} alt={selectedProject.name} width={600} height={360} /> */}
              <div className="project-details-image-placeholder">
                <span>{selectedProject.name[0]}</span>
              </div>
            </div>
            <h2 className="project-details-title">{selectedProject.name}</h2>
            <p className="project-details-description">{selectedProject.description}</p>
          </div>
          
          <div className="project-details-content">
            <div className="project-details-section">
              <h3 className="section-subtitle">Tecnologías utilizadas</h3>
              <div className="project-details-tech-tags">
                {selectedProject.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="project-details-tech-tag">{tech}</span>
                ))}
              </div>
            </div>
            
            <div className="project-details-section">
              <h3 className="section-subtitle">Aspectos destacados</h3>
              <ul className="project-highlights">
                {selectedProject.highlights?.map((highlight, index) => (
                  <li key={index} className="project-highlight-item">
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="project-details-section">
              <h3 className="section-subtitle">Enlaces</h3>
              <div className="project-links">
                <a 
                  href={selectedProject.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-link"
                >
                  Ver código fuente
                </a>
                <a 
                  href={selectedProject.url.replace('github.com', 'demo.com')} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-link demo"
                >
                  Ver demo en vivo
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (activeContent === 'contact') {
      return (
        <div className="section">
          <h2 className="section-title">Contacto</h2>
          
          <div className="contact-cards">
            <div className="contact-card">
              <div className="contact-icon">📧</div>
              <h3 className="contact-type">Email</h3>
              <a href={`mailto:${portfolioData.contact.email}`} className="contact-value">
                {portfolioData.contact.email}
              </a>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon">📱</div>
              <h3 className="contact-type">Teléfono</h3>
              <a href={`tel:${portfolioData.contact.phone}`} className="contact-value">
                {portfolioData.contact.phone}
              </a>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon">📍</div>
              <h3 className="contact-type">Ubicación</h3>
              <p className="contact-value">
                {portfolioData.contact.location}
              </p>
            </div>
          </div>
          
          <div className="contact-social-section">
            <h3 className="contact-social-title">Redes Sociales</h3>
            <div className="contact-social-links">
              <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="contact-social-link linkedin">
                LinkedIn
              </a>
              <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" className="contact-social-link github">
                GitHub
              </a>
            </div>
          </div>
          
          <div className="contact-form-section">
            <h3 className="contact-form-title">Envíame un mensaje</h3>
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Nombre</label>
                <input type="text" id="name" name="name" placeholder="Tu nombre" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Tu email" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Mensaje</label>
                <textarea id="message" name="message" rows={4} placeholder="Tu mensaje"></textarea>
              </div>
              <button type="submit" className="contact-submit-button">
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      );
    }

    if (activeContent === 'education') {
      return (
        <div className="section">
          <h2 className="section-title">Formación Académica</h2>
          
          <div className="education-timeline">
            {portfolioData.education.map((edu, index) => (
              <div key={index} className={`education-item ${index === 0 ? 'active' : ''}`}>
                <div className="education-marker"></div>
                <div className="education-content">
                  <div className="education-period">
                    {edu.startYear} - {edu.endYear || 'Presente'}
                  </div>
                  <h3 className="education-degree">{edu.degree}</h3>
                  <div className="education-institution">
                    {edu.institution}, {edu.location}
                  </div>
                  <p className="education-description">{edu.description}</p>
                  
                  {edu.courses && (
                    <div className="education-courses">
                      <h4 className="education-courses-title">Cursos destacados:</h4>
                      <ul className="education-course-list">
                        {edu.courses.map((course, courseIndex) => (
                          <li key={courseIndex} className="education-course-item">
                            {course}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (activeContent === 'experience') {
      return (
        <div className="section">
          <h2 className="section-title">Experiencia Laboral</h2>
          
          <div className="experience-timeline">
            {portfolioData.experience.map((exp, index) => (
              <div key={index} className={`experience-item ${index === 0 ? 'active' : ''}`}>
                <div className="experience-marker"></div>
                <div className="experience-content">
                  <div className="experience-period">
                    {exp.startDate} - {exp.endDate || 'Presente'}
                  </div>
                  <h3 className="experience-position">{exp.position}</h3>
                  <div className="experience-company">
                    {exp.company}, {exp.location}
                  </div>
                  <p className="experience-description">{exp.description}</p>
                  
                  {exp.achievements && (
                    <div className="experience-achievements">
                      <h4 className="experience-achievements-title">Logros destacados:</h4>
                      <ul className="experience-achievement-list">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="experience-achievement-item">
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (activeContent === 'certifications') {
      return (
        <div className="section">
          <h2 className="section-title">Certificaciones</h2>
          
          <div className="certifications-grid">
            {portfolioData.certifications.map((cert, index) => (
              <div key={index} className="certification-card">
                <div className="certification-badge">
                  <div className="certification-badge-icon">🏆</div>
                </div>
                <div className="certification-content">
                  <h3 className="certification-name">{cert.name}</h3>
                  <div className="certification-info">
                    <p className="certification-issuer">{cert.issuer}</p>
                    <p className="certification-date">{cert.date}</p>
                  </div>
                  <a 
                    href={cert.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="certification-link"
                  >
                    Ver credencial
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (activeContent === 'languages') {
      return (
        <div className="section">
          <h2 className="section-title">Idiomas</h2>
          
          <div className="languages-container">
            {portfolioData.languages.map((lang, index) => (
              <div key={index} className="language-card">
                <div className="language-info">
                  <h3 className="language-name">{lang.name}</h3>
                  <p className="language-level">{lang.level}</p>
                </div>
                <div className="language-progress">
                  <div 
                    className="language-progress-bar"
                    style={{ 
                      width: lang.level.includes('Nativo') ? '100%' : 
                             lang.level.includes('C2') ? '95%' : 
                             lang.level.includes('C1') ? '85%' : 
                             lang.level.includes('B2') ? '75%' : 
                             lang.level.includes('B1') ? '60%' : 
                             lang.level.includes('A2') ? '40%' : '20%' 
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (activeContent === "achievements") {
      return (
        <div className="section">
          <h2 className="section-title">Logros</h2>
          {portfolioData.achievements.map((ach, index) => (
            <p key={index} className="mb-2">
              • {ach}
            </p>
          ))}
          <button onClick={goBack} className="breadcrumb-button mt-4">
            Volver
          </button>
        </div>
      );
    }

    if (activeContent === "interests") {
      return (
        <div className="section">
          <h2 className="section-title">Intereses</h2>
          {portfolioData.interests.map((interest, index) => (
            <p key={index} className="mb-2">
              • {interest}
            </p>
          ))}
          <button onClick={goBack} className="breadcrumb-button mt-4">
            Volver
          </button>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="gui-container p-4">
      <Breadcrumbs
        activeContent={activeContent}
        previousContent={previousContent}
        goBack={goBack}
        goHome={goHome}
      />
      
      {activeContent ? (
        renderFolderContents()
      ) : (
        <>
          <div className="welcome-section">
            <h1 className="welcome-title">Bienvenido a mi Portfolio</h1>
            <p className="welcome-subtitle">
              Soy <span className="highlight">{portfolioData.name}</span>, {portfolioData.title}
            </p>
            <p className="welcome-text">
              Explora las secciones para conocer más sobre mí, mis proyectos y habilidades.
            </p>
            
            <div className="welcome-buttons">
              <button className="welcome-button primary" onClick={() => navigateTo('about')}>
                Sobre Mí
              </button>
              <button className="welcome-button" onClick={downloadResume}>
                Descargar CV
              </button>
            </div>
          </div>
        
          <div className="menu-grid">
            <div className="menu-card" onClick={() => navigateTo('about')}>
              <FaUser className="menu-icon" />
              <span className="menu-label">Sobre Mí</span>
            </div>
            <div className="menu-card" onClick={() => navigateTo('projects')}>
              <FaFolder className="menu-icon" />
              <span className="menu-label">Proyectos</span>
            </div>
            <div className="menu-card" onClick={() => navigateTo('skills')}>
              <FaCode className="menu-icon" />
              <span className="menu-label">Habilidades</span>
            </div>
            <div className="menu-card" onClick={() => navigateTo('experience')}>
              <FaBriefcase className="menu-icon" />
              <span className="menu-label">Experiencia</span>
            </div>
            <div className="menu-card" onClick={() => navigateTo('education')}>
              <FaGraduationCap className="menu-icon" />
              <span className="menu-label">Educación</span>
            </div>
            <div className="menu-card" onClick={() => navigateTo('certifications')}>
              <FaCertificate className="menu-icon" />
              <span className="menu-label">Certificaciones</span>
            </div>
            <div className="menu-card" onClick={() => navigateTo('languages')}>
              <FaLanguage className="menu-icon" />
              <span className="menu-label">Idiomas</span>
            </div>
            <div className="menu-card" onClick={() => navigateTo('contact')}>
              <FaEnvelope className="menu-icon" />
              <span className="menu-label">Contacto</span>
            </div>
            <div className="menu-card" onClick={() => navigateTo("achievements")}>
              <FaStar className="menu-icon" />
              <span className="menu-label">Logros</span>
            </div>
            <div className="menu-card" onClick={() => navigateTo("interests")}>
              <FaHeart className="menu-icon" />
              <span className="menu-label">Intereses</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default GUI;
