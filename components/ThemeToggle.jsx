'use client'

import React from 'react'
import { HiMoon, HiSun } from 'react-icons/hi'
import { useTheme } from '@/context/ThemeContext'

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme, mounted } = useTheme()

  if (!mounted) {
    return (
      <button className="fixed bottom-6 right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 bg-primary-dark border-2 border-accent rounded-full flex items-center justify-center transition-all duration-300 shadow-lg">
        <HiSun className="w-7 h-7 text-accent" />
      </button>
    )
  }

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 bg-white dark:bg-primary-dark border-2 border-orange-500 dark:border-accent rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
      aria-label={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      {isDarkMode ? (
        <HiMoon className="w-7 h-7 text-orange-500" />
      ) : (
        <HiSun className="w-7 h-7 text-accent" />
      )}
    </button>
  )
}

export default ThemeToggle