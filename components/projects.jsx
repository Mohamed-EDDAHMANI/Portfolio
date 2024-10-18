import React from 'react'
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaGithub } from "react-icons/fa";



const prejects = () => {

  return (
    <div className='w-full h-auto'>
        <div className='flex items-center'>
          <span className='inline pr-4 pl-[20px] text-xsx  || lg:pl-[100px]'>Projects</span><hr className='w-[150px] ml-[20px]  h-[2px] text-accent inline'></hr>
        </div>
      <div className='w-full '>
        <div className='w-full flex flex-col || lg:flex-row '>
          <div className='flex items-center justify-center h-[200px] || lg:h-[350px] lg:w-[50%] '>
            <div className='w-[80%] h-[300px] p-5  rounded-[20px] || sm:w-[70%] || md:w-[50%] lg:w-[90%]'>
              <video  loop autoPlay muted className='w-full h-full rounded-[20px]'>
                <source src="/gestion-vid.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div className='w-full || lg:w-[50%]'>
            <h2 className='text-right pr-[30px] text-blue-400 || sm:pr-[20%] || lg:pr-[10%] '>Featured Project</h2>
            <h1 className='text-right pr-[30px] mb-[5px] font-bold || sm:pr-[20%] || lg:pr-[10%]'>Gestion-scolaire-V2</h1>
            <div className='flex justify-center'>
              <p className=' w-[90%] pr-[5px] p-[20px] rounded-[10px] text-[13px] shadow-blue || sm:w-[60%] || lg:w-[80%]'>Gestion-scolaire-V2 est une application de base de données dynamique avec un
                système de connexion sécurisé par jeton. Les utilisateurs peuvent ajouter,
                supprimer et mettre à jour des données grâce aux opérations CRUD. Le backend
                utilise Node.js, Express, et MongoDB, avec Redux pour une gestion efficace de
                l&apos;état</p>
            </div>
            <div className='w-full relative flex justify-end space-x-4 mb-[20px] mt-[20px] || sm:pr-[20%] || lg:pr-[10%] '>
              <a className='absolute left-10 top-1 text-[25px] || sm:left-40 || lg:left-20' href="">
                <FaGithub />
              </a>
              <span className='mr-[15px] '>Reactjs<FaReact className='inline text-[20px] text-blue-500' /></span>
              <span className='mr-[15px] '>Nodejs<FaNodeJs className='inline text-[20px] text-green-500' /></span>
              <span className='mr-[15px] '>MongoDB<SiMongodb className='inline text-[20px] text-green-500' /></span>
            </div>
          </div>
        </div>
      </div>
      <div>

      </div>
    </div>
  )
}

export default prejects
