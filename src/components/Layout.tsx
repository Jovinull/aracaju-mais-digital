import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import {Menu, X, Home, Heart, GraduationCap, HandHeart, User, LogIn, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube, Search} from 'lucide-react'
import AccessibilityMenu from './AccessibilityMenu'
import SkipLinks from './SkipLinks'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  // Fechar menu ao navegar
  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])

  // Atalhos do teclado
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.altKey) {
        switch (e.key) {
          case '1':
            e.preventDefault()
            document.getElementById('main-content')?.focus()
            break
          case '2':
            e.preventDefault()
            document.getElementById('main-navigation')?.focus()
            break
          case '3':
            e.preventDefault()
            document.getElementById('search')?.focus()
            break
          case 'a':
          case 'A':
            e.preventDefault()
            // Trigger accessibility menu
            break
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const navigationItems = [
    { path: '/', label: 'Início', icon: Home, description: 'Página inicial do portal' },
    { path: '/saude', label: 'Saúde', icon: Heart, description: 'Serviços de saúde municipal' },
    { path: '/educacao', label: 'Educação', icon: GraduationCap, description: 'Serviços educacionais' },
    { path: '/assistencia-social', label: 'Assistência Social', icon: HandHeart, description: 'Benefícios e programas sociais' },
  ]

  const authItems = [
    { path: '/cadastro', label: 'Cadastre-se', icon: User, description: 'Criar nova conta' },
    { path: '/login', label: 'Entrar', icon: LogIn, description: 'Acessar sua conta' },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      {/* Links de Pulo */}
      <SkipLinks />

      {/* Header */}
      <header 
        className="bg-white shadow-lg border-b-4 border-blue-600 sticky top-0 z-40"
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center space-x-3 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-2"
              aria-label="Prefeitura de Aracaju - Ir para página inicial"
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Bras%C3%A3o_de_Aracaju.svg/200px-Bras%C3%A3o_de_Aracaju.svg.png" 
                alt="Brasão da Prefeitura de Aracaju" 
                className="h-12 w-12"
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  Prefeitura de Aracaju
                </h1>
                <p className="text-sm text-gray-600">
                  Serviços Digitais
                </p>
              </div>
            </Link>

            

            {/* Navigation - Desktop */}
            <nav 
              id="main-navigation"
              className="hidden lg:flex items-center space-x-1"
              role="navigation"
              aria-label="Navegação principal"
            >
              {navigationItems.map((item) => {
                const Icon = item.icon
                const isActive = location.pathname === item.path
                
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      isActive
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                    aria-label={item.description}
                  >
                    <Icon size={18} aria-hidden="true" />
                    <span>{item.label}</span>
                  </Link>
                )
              })}
            </nav>

            {/* Auth Links - Desktop */}
            <div className="hidden lg:flex items-center space-x-4 ml-8">
              {authItems.map((item) => {
                const Icon = item.icon
                
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300"
                    aria-label={item.description}
                  >
                    <Icon size={18} aria-hidden="true" />
                    <span>{item.label}</span>
                  </Link>
                )
              })}
            </div>

            {/* Menu Button - Mobile */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-gray-200 py-4"
              role="navigation"
              aria-label="Menu de navegação móvel"
            >
              {/* Busca - Mobile */}
              <div className="mb-4">
                <label htmlFor="mobile-search" className="sr-only">
                  Buscar serviços
                </label>
                <div className="relative">
                  <input
                    id="mobile-search"
                    type="search"
                    placeholder="Buscar serviços..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" aria-hidden="true" />
                </div>
              </div>

              {/* Navigation Links */}
              <div className="space-y-2 mb-4">
                {navigationItems.map((item) => {
                  const Icon = item.icon
                  const isActive = location.pathname === item.path
                  
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        isActive
                          ? 'bg-blue-100 text-blue-700'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                      aria-current={isActive ? 'page' : undefined}
                      aria-label={item.description}
                    >
                      <Icon size={20} aria-hidden="true" />
                      <span>{item.label}</span>
                    </Link>
                  )
                })}
              </div>

              {/* Auth Links */}
              <div className="space-y-2 pt-4 border-t border-gray-200">
                {authItems.map((item) => {
                  const Icon = item.icon
                  
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="flex items-center space-x-3 px-4 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300"
                      aria-label={item.description}
                    >
                      <Icon size={20} aria-hidden="true" />
                      <span>{item.label}</span>
                    </Link>
                  )
                })}
              </div>
            </motion.div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main 
        id="main-content"
        className="flex-1"
        role="main"
        tabIndex={-1}
      >
        {children}
      </main>

      {/* Footer */}
      <footer 
        className="bg-gray-900 text-white"
        role="contentinfo"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Informações da Prefeitura */}
            <div>
              <h3 className="text-lg font-semibold mb-4">
                Prefeitura de Aracaju
              </h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 mt-1 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <p>R. Frei Luiz Canolo de Noronha,</p>
                    <p>42 - Ponto Novo, Aracaju - SE</p>
                    <p>CEP: 49097-270</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                  <a 
                    href="tel:+55793179-1000" 
                    className="hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
                    aria-label="Telefone da prefeitura"
                  >
                    (79) 4009-7800
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                  <a 
                    href="mailto:contato@aracaju.se.gov.br" 
                    className="hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
                    aria-label="Email da prefeitura"
                  >
                    contato@aracaju.se.gov.br
                  </a>
                </div>
              </div>
            </div>

            {/* Links Úteis */}
            <div>
              <h3 className="text-lg font-semibold mb-4">
                Links Úteis
              </h3>
              <ul className="space-y-2 text-gray-300" role="list">
                <li>
                  <a 
                    href="/transparencia" 
                    className="hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
                  >
                    Portal da Transparência
                  </a>
                </li>
                <li>
                  <a 
                    href="/ouvidoria" 
                    className="hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
                  >
                    Ouvidoria
                  </a>
                </li>
                <li>
                  <a 
                    href="/licitacoes" 
                    className="hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
                  >
                    Licitações
                  </a>
                </li>
                <li>
                  <a 
                    href="/concursos" 
                    className="hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
                  >
                    Concursos Públicos
                  </a>
                </li>
              </ul>
            </div>

            {/* Serviços */}
            <div>
              <h3 className="text-lg font-semibold mb-4">
                Serviços
              </h3>
              <ul className="space-y-2 text-gray-300" role="list">
                {navigationItems.map((item) => (
                  <li key={item.path}>
                    <Link 
                      to={item.path}
                      className="hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Redes Sociais */}
            <div>
              <h3 className="text-lg font-semibold mb-4">
                Redes Sociais
              </h3>
              <div className="flex space-x-4">
                <a 
                  href="https://facebook.com/prefeituradearacaju" 
                  className="text-gray-300 hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
                  aria-label="Facebook da Prefeitura de Aracaju"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a 
                  href="https://twitter.com/prefeituradearacaju" 
                  className="text-gray-300 hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
                  aria-label="Twitter da Prefeitura de Aracaju"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="w-6 h-6" />
                </a>
                <a 
                  href="https://instagram.com/prefeituradearacaju" 
                  className="text-gray-300 hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
                  aria-label="Instagram da Prefeitura de Aracaju"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a 
                  href="https://youtube.com/prefeituradearacaju" 
                  className="text-gray-300 hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
                  aria-label="YouTube da Prefeitura de Aracaju"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>
              © 2025 Prefeitura Municipal de Aracaju. Todos os direitos reservados.
            </p>
            <p className="mt-2">
              <a 
                href="/politica-privacidade" 
                className="hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
              >
                Política de Privacidade
              </a>
              {' | '}
              <a 
                href="/termos-uso" 
                className="hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
              >
                Termos de Uso
              </a>
              {' | '}
              <a 
                href="/acessibilidade" 
                className="hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
              >
                Declaração de Acessibilidade
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* Menu de Acessibilidade */}
      <AccessibilityMenu />
    </div>
  )
}

export default Layout
