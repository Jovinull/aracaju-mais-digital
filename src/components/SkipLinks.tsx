import React from 'react'

const SkipLinks = () => {
  return (
    <div className="skip-links">
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        Pular para o conteúdo principal
      </a>
      <a 
        href="#main-navigation" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-40 focus:z-50 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        Pular para navegação
      </a>
      <a 
        href="#search" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:right-4 focus:z-50 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        Ir para busca
      </a>
    </div>
  )
}

export default SkipLinks
