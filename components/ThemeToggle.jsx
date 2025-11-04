'use client'

import React from 'react'
import { HiMoon, HiSun } from 'react-icons/hi'
import { useTheme } from '@/context/ThemeContext'

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 bg-white dark:bg-black border-2 border-orange-500 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl hover:border-orange-600"
      aria-label={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      {isDarkMode ? (
        <HiSun className="w-7 h-7 text-orange-500" />
      ) : (
        <HiMoon className="w-7 h-7 text-orange-500" />
      )}
    </button>
  )
}

export default ThemeToggle