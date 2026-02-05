import React from 'react'

const footer = () => {
  return (
    <div className='w-[95%] mx-auto flex justify-center items-center flex flex-col border-l-2 border-r-2 border-accent py-6 || lg:mt-[20px] lg:px-[100px]'>
      <h1 className='text-accent text-[20px] font-bold'>Code is art</h1>
      <h1 className='text-[13px] text-black dark:text-white'>©2024 MohamedEddahmani FM</h1>
      <h1 className='w-[80%] text-[15px] text-center text-gray-600 dark:text-gray-400'>
        Loosely designed in <a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer" className="font-bold text-gray-700 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-200">Figma </a>
        and coded in <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer" className="font-bold text-gray-700 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-200">Visual Studio Code </a>
        by yours truly. Built with <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" className="font-bold text-gray-700 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-200">Next.js </a>
        and <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="font-bold text-gray-700 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-200">Tailwind CSS </a>,
        deployed with <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer" className="font-bold text-gray-700 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-200">Vercel </a>.
        All text is set in the <a href="https://rsms.me/inter/" target="_blank" rel="noopener noreferrer" className="font-bold text-gray-700 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-200">Inter </a> typeface.
      </h1>
      
    </div>

  )
}

export default footer
