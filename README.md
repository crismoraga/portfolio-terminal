# Portfolio Terminal - Cristóbal Moraga Guerrero

Portfolio interactivo con estética de terminal Linux y tema Matrix, desarrollado con Next.js 15 y TypeScript.

## 🚀 Características

- **Interfaz Dual**: Terminal de comandos + Interfaz gráfica
- **Tema Matrix**: Animaciones y efectos visuales inspirados en The Matrix
- **Easter Eggs**: Comandos ocultos y sorpresas por descubrir
- **Responsive**: Diseño adaptable a todos los dispositivos
- **Sonidos**: Efectos de sonido opcionales para una experiencia inmersiva
- **TypeScript**: Código type-safe y mantenible

## 🛠️ Tecnologías

- **Next.js 15.2.4** - Framework de React
- **React 19** - Biblioteca de UI
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Estilos utility-first
- **React Icons** - Iconografía

## 📦 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/crismoraga/portfolio-terminal.git

# Navegar al directorio
cd portfolio-terminal

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) para ver el resultado.

## 🎮 Comandos Disponibles

### Sistema de Archivos
- `ls` - Lista el contenido del directorio
- `cd [dir]` - Cambia de directorio
- `pwd` - Muestra el directorio actual
- `cat [file]` - Muestra el contenido de un archivo

### Información Personal
- `about` - Sobre mí
- `whoami` - Quién soy
- `contact` - Información de contacto
- `cv` / `resume` - Ver currículum completo

### Experiencia y Educación
- `experience` - Experiencia laboral
- `education` - Formación académica
- `ayudantias` / `ta` - Ayudantías
- `certifications` / `certs` - Certificaciones

### Proyectos y Habilidades
- `projects` - Mis proyectos
- `skills` - Habilidades técnicas

### Extras
- `achievements` - Logros destacados
- `interests` - Intereses personales
- `extracurricular` - Actividades extracurriculares

### Easter Eggs 🥚
- `matrix` - Modo Matrix
- `neofetch` - Información del sistema
- `cowsay [text]` - Vaca parlante
- `fortune` - Frase del día
- `joke` - Chiste geek
- `sudo [cmd]` - Ejecutar con privilegios (¿o no?)
- `hack` - Modo hacker
- `easter` - Lista de easter eggs

## 🚀 Despliegue en Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/crismoraga/portfolio-terminal)

El proyecto está optimizado para deployment en Vercel:

1. Push tu código a GitHub
2. Importa el proyecto en Vercel
3. Configura las variables de entorno (si las hay)
4. Deploy automático

## 📝 Scripts

```bash
npm run dev      # Ejecutar en modo desarrollo con Turbopack
npm run build    # Compilar para producción
npm run start    # Ejecutar servidor de producción
npm run lint     # Ejecutar linter
```

## 🎨 Personalización

Los datos del portfolio se encuentran en `src/data/portfolioData.ts`. Actualiza este archivo con tu información personal.

Los temas y estilos se configuran en `src/app/globals.css` usando variables CSS.

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 👤 Autor

**Cristóbal Moraga Guerrero**
- GitHub: [@crismoraga](https://github.com/crismoraga)
- LinkedIn: [cristobalmoraga](https://linkedin.com/in/cristobalmoraga)
- Email: Cristobal.moragag@gmail.com

## 🙏 Agradecimientos

- Inspirado en terminales Unix/Linux
- Estética Matrix
- Comunidad de Next.js y React

---

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!
