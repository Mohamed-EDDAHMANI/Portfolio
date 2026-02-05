import React from 'react'
import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiMongodb, SiExpress, SiRedux, SiNextdotjs, SiTailwindcss, SiTypescript, SiVite, SiNestjs, SiDocker } from "react-icons/si";

const Projects = () => {
  // Projects data
  const projectsData = [
    {
      id: 1,
      title: "Gestion Scolaire V2",
      description: "Application de gestion scolaire dynamique avec système d'authentification sécurisé par jeton. Permet aux utilisateurs d'effectuer des opérations CRUD complètes (ajout, suppression, mise à jour) sur les données. Développée avec Node.js, Express et MongoDB, utilisant Redux pour une gestion optimisée de l'état.",
      image: "/gestion-vid.mp4",
      isVideo: true,
      technologies: [
        { name: "React", icon: FaReact },
        { name: "Node.js", icon: FaNodeJs },
        { name: "MongoDB", icon: SiMongodb },
        { name: "Express", icon: SiExpress },
        { name: "Redux", icon: SiRedux }
      ],
      githubUrl: "https://github.com/Mohamed-EDDAHMANI/gestion-scolaire-v2",
      liveUrl: "https://gestion-scolaire-demo.com"
    },
    {
      id: 2,
      title: "Gestion d'événements & réservations",
      description: "Application web de réservation d'événements pour organisations (formations, ateliers, conférences). Back-end NestJS (JWT, rôles Admin/Participant), front Next.js (SSR/CSR), catalogue public, cycle de vie des réservations (pending → confirmé/refusé), tickets PDF, Docker, CI/CD GitHub Actions, planification JIRA.",
      image: "https://th.bing.com/th/id/R.c6e89c5a6a581ba30ad1d1fc51f39693?rik=bIcygFSXFrDOhQ&pid=ImgRaw&r=0",
      isVideo: false,
      technologies: [
        { name: "NestJS", icon: SiNestjs },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "TypeScript", icon: SiTypescript },
        { name: "MongoDB", icon: SiMongodb },
        { name: "Docker", icon: SiDocker }
      ],
      githubUrl: "https://github.com/Mohamed-EDDAHMANI/EventUp",
      liveUrl: ""
    },
    {
      id: 3,
      title: "Nexus Tic-Tac-Toe V2",
      description: "Jeu Tic-Tac-Toe moderne avec React, Vite et Tailwind CSS. Modes PvP et PvC, IA avec 3 niveaux (Easy, Medium, Hard avec Minimax), grille 3×3 à 8×8, symboles personnalisables, statistiques persistantes et interface responsive avec thème sombre.",
      image: "/tic_tac_toe.mp4",
      isVideo: true,
      technologies: [
        { name: "React", icon: FaReact },
        { name: "Vite", icon: SiVite },
        { name: "Tailwind", icon: SiTailwindcss }
      ],
      githubUrl: "https://github.com/Mohamed-EDDAHMANI/Tic-Tac-Toe_V2",
      liveUrl: "https://tic-tac-toe-v2-five.vercel.app/"
    }
  ];

  const GITHUB_PROFILE = "https://github.com/Mohamed-EDDAHMANI";

  return (
    <div className='w-full overflow-x-hidden px-4 sm:px-6 lg:px-16 xl:px-24 pb-28'>
      {/* Section Header - minimal */}
      <div className='flex items-center gap-3 sm:gap-4 mb-8 lg:mb-10'>
        <span className='text-xl sm:text-2xl font-semibold text-black dark:text-white'>Projets</span>
        <div className='w-24 sm:w-32 h-1 rounded-full bg-gradient-to-r from-accent to-transparent' />
      </div>

      {/* Projects Grid */}
      <div className='w-full min-w-0'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'>
          {projectsData.map((project) => (
            <article
              key={project.id}
              className='group h-full min-w-0'
            >
              <div className='h-full flex flex-col rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/40 backdrop-blur-sm shadow-lg shadow-gray-200/50 dark:shadow-none hover:border-accent/50 hover:shadow-project hover:shadow-accent/10 transition-all duration-300 hover:-translate-y-1'>
                {/* Media */}
                <div className='relative h-[200px] sm:h-[260px] flex-shrink-0 overflow-hidden'>
                  {project.isVideo ? (
                    <video
                      loop
                      autoPlay
                      muted
                      playsInline
                      className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                    >
                      <source src={project.image} type="video/mp4" />
                    </video>
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                    />
                  )}
                  <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4'>
                    {project.githubUrl && project.githubUrl !== "#" && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='w-11 h-11 bg-white dark:bg-gray-800 text-accent rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200 shadow-lg'
                        aria-label="Code source"
                      >
                        <FaGithub className='w-5 h-5' />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='w-11 h-11 bg-accent text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200 shadow-lg'
                        aria-label="Voir la démo"
                      >
                        <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
                          <path fillRule='evenodd' d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z' clipRule='evenodd' />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className='p-5 sm:p-6 flex-grow flex flex-col min-w-0'>
                  <h3 className='text-lg sm:text-xl font-bold text-black dark:text-white mb-2 break-words'>
                    {project.title}
                  </h3>
                  <p className='text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3 flex-grow mb-4'>
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className='flex flex-wrap gap-2 mb-5'>
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className='inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-medium'
                      >
                        <tech.icon className='text-accent w-3.5 h-3.5 flex-shrink-0' />
                        {tech.name}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className='flex flex-wrap gap-2 mt-auto'>
                    {project.githubUrl && project.githubUrl !== "#" && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border-2 border-accent text-accent text-sm font-medium hover:bg-accent hover:text-white dark:hover:text-black transition-colors duration-200'
                      >
                        <FaGithub className='w-4 h-4' />
                        Code
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-accent text-white dark:text-black text-sm font-medium hover:opacity-90 transition-opacity duration-200'
                      >
                        <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
                          <path fillRule='evenodd' d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z' clipRule='evenodd' />
                        </svg>
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* GitHub link + stats - centered below */}
      <div className='flex flex-col items-center justify-center gap-2 mt-12 sm:mt-14'>
        <span className='text-sm text-gray-500 dark:text-gray-400'>
          <span className='font-medium text-black dark:text-white'>+70</span> projets sur GitHub
          <span className='mx-2'>·</span>
          <span className='font-medium text-black dark:text-white'>+4</span> sur le site
        </span>
        <a
          href={GITHUB_PROFILE}
          target="_blank"
          rel="noopener noreferrer"
          className='inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline'
        >
          <FaGithub className='w-4 h-4' />
          Voir tous les repos sur GitHub
        </a>
      </div>
    </div>
  )
}

export default Projects