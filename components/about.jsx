import React from 'react'
import { BsArrowReturnRight } from "react-icons/bs";
import { GrCode } from "react-icons/gr";


const about = () => {
  return (
    <div className='w-full h-auto  pl-[20px] lg:px-[100px] pb-28'>
      <div className='flex items-center'>
        <span className='inline text-xl font-semibold'>About Me</span>
        <div className='w-32 h-1 ml-4 rounded-full bg-gradient-to-r from-accent to-primary'></div>
      </div>
      <div className=" w-full flex flex-col md:flex-row  || lg:pt-[30px]">
        <div className=" w-[100%] md:w-[40%]  h-full  ">
          <div className='h-[65%] flex items-center justify-center overflow-hidden '>
            <div className='absolute  z-10 overflow-hidden'>
              <img
                className=' w-[200px] h-[200px] rounded-full'
                src='/my-pic-removebg-preview.png'  // Replace with the path to your image
                alt='Description of the image'  // Replace with appropriate alt text
              />
            </div>
            <div className=" relative rounded-full border-[3px] border-inset border-accent h-[270px] w-[270px] flex items-center justify-center  animate-spin-slow ">
              <div className='overflow-hidden  absolute w-[300px] h-[200px] bg-primary rounded-full'>
                
              </div>
              <div className=" overflow-hidden  relative rounded-full border-[5px] border-inset border-accent h-[240px] w-[240px] flex items-center justify-center  animate-spin-slow ">
              </div>
            </div>
          </div>
          <div className='h-[35%] flex pl-[40px] ||'>
            <div className='w-[50%] h-full'>
              <span className='inline text-[12px]'><GrCode className='inline text-[20px] text-accent' /> langage C</span><br></br>
              <span className='inline text-[12px]'><GrCode className='inline text-[20px] text-accent' /> HTML / CSS</span><br></br>
              <span className='inline text-[12px]'><GrCode className='inline text-[20px] text-accent' /> Tailwindcss</span><br></br>
              <span className='inline text-[12px]'><GrCode className='inline text-[20px] text-accent' /> JavaScript (ES6+)</span><br></br>
              <span className='inline text-[12px]'><GrCode className='inline text-[20px] text-accent' /> React js</span><br></br>
            </div>
            <div className='w-[50%] h-full'>
              <span className='inline text-[12px]'><GrCode className='inline text-[20px] text-accent' /> Node js</span><br></br>
              <span className='inline text-[12px]'><GrCode className='inline text-[20px] text-accent' /> MongoDb</span><br></br>
              <span className='inline text-[12px]'><GrCode className='inline text-[20px] text-accent' /> Next js</span><br></br>
              <span className='inline text-[12px]'><GrCode className='inline text-[20px] text-accent' /> My SQL</span><br></br>
              <span className='inline text-[12px]'><GrCode className='inline text-[20px] text-accent' /> Rest API</span><br></br>
            </div>
          </div>
        </div>
        <div className=" w-full  h-auto ">
          <p className='text-[13px] first-letter:uppercase px-[30px]'>Une brève description contenant les informations nécessaires afin de me connaitre de point de vue plus proche, ainsi qu&apos;avoir une idée globale sur mon cursus académique et professionnel, avec les competences techniques.</p>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 p-8 bg-secondary/50 rounded-lg">
            <div className='flex items-center gap-3'>
              <BsArrowReturnRight className='text-accent text-2xl' />
              <div>
                <p className='font-bold'>Date of Birth:</p>
                <span className='text-sm text-gray-400'>August 1, 1998</span>
              </div>
            </div>
            <div className='flex items-center gap-3'>
              <BsArrowReturnRight className='text-accent text-2xl' />
              <div>
                <p className='font-bold'>Diploma:</p>
                <span className='text-sm text-gray-400'>Specialized Technician in Commerce, Full Stack Developer</span>
              </div>
            </div>
            <div className='flex items-center gap-3'>
              <BsArrowReturnRight className='text-accent text-2xl' />
              <div>
                <p className='font-bold'>Phone:</p>
                <span className='text-sm text-gray-400'>+212 659 511 779</span>
              </div>
            </div>
            <div className='flex items-center gap-3'>
              <BsArrowReturnRight className='text-accent text-2xl' />
              <div>
                <p className='font-bold'>City:</p>
                <span className='text-sm text-gray-400'>Agadir, MOROCCO</span>
              </div>
            </div>
            <div className='flex items-center gap-3'>
              <BsArrowReturnRight className='text-accent text-2xl' />
              <div>
                <p className='font-bold'>Email:</p>
                <span className='text-sm text-gray-400'>dsimo4323@gmail.com</span>
              </div>
            </div>
            <div className='flex items-center gap-3'>
              <BsArrowReturnRight className='text-accent text-2xl' />
              <div>
                <p className='font-bold'>Freelance:</p>
                <span className='text-sm text-gray-400'>Available</span>
              </div>
            </div>
          </div>
          <div>
            <p className='text-[13px] first-letter:uppercase first-line-padding-[20px] p-[20px] '>Alors, Je suis Mohamed EDDAHMANI, j&apos;ai 25 ans, et je suis actuellement développeur full stack. Au cours du parcours académique, j&apos;ai effectué quelques stages pour mettre en pratique mes compétences techniques. Et j&apos;ai aussi travaillé en freelance, pour avoir plus d&apos;expérience et surtout développer mon savoir être. En termes d&apos;autoformation, j&apos;ai plusieurs certifications dans différents domaines (Backend, Frontend).</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default about
