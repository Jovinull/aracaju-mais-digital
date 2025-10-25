import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {Heart, GraduationCap, HandHeart, Phone, Users, MapPin, Clock, Star} from 'lucide-react'

const Home = () => {
  const services = [
    {
      icon: Heart,
      title: 'Saúde Digital',
      description: 'Teleatendimentos com médicos, psicólogos e especialistas. Acesso ao seu histórico médico completo.',
      link: '/saude',
      color: 'from-red-500 to-pink-600',
      features: ['Teleatendimento', 'Histórico Médico', 'Agendamento Online']
    },
    {
      icon: GraduationCap,
      title: 'Educação',
      description: 'Integração com CIEE, cursos profissionalizantes e oportunidades educacionais acessíveis.',
      link: '/educacao',
      color: 'from-blue-500 to-indigo-600',
      features: ['Cursos Online', 'CIEE Integrado', 'Certificações']
    },
    {
      icon: HandHeart,
      title: 'Assistência Social',
      description: 'Acesso simplificado aos benefícios sociais e programas governamentais com total acessibilidade.',
      link: '/assistencia-social',
      color: 'from-green-500 to-emerald-600',
      features: ['INSS Simplificado', 'Benefícios', 'Suporte Social']
    }
  ]

  const stats = [
    { number: '50K+', label: 'Cidadãos Atendidos', icon: Users },
    { number: '24/7', label: 'Atendimento Online', icon: Clock },
    { number: '15+', label: 'Serviços Digitais', icon: MapPin },
    { number: '4.8★', label: 'Avaliação dos Usuários', icon: Star }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Aracaju
                <span className="block text-yellow-300">Mais Digital</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Serviços públicos modernos, acessíveis e eficientes. 
                Sua saúde, educação e assistência social na palma da mão.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/cadastro"
                  className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-yellow-300 transition-all transform hover:scale-105 text-center"
                >
                  Criar Conta Gratuita
                </Link>
                <Link
                  to="/login"
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-700 transition-all text-center"
                >
                  Já tenho conta
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => {
                    const Icon = stat.icon
                    return (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        className="text-center p-4"
                      >
                        <Icon className="w-8 h-8 mx-auto mb-2 text-yellow-300" />
                        <div className="text-2xl font-bold">{stat.number}</div>
                        <div className="text-sm text-blue-100">{stat.label}</div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/20 rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-400/20 rounded-full translate-y-32 -translate-x-32"></div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nossos Serviços
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Acesse todos os serviços municipais de forma integrada, 
              com tecnologia de ponta e foco na acessibilidade.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="group"
                >
                  <Link to={service.link} className="block">
                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group-hover:transform group-hover:scale-105">
                      <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                      <div className="p-8">
                        <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                        
                        <div className="space-y-2 mb-6">
                          {service.features.map((feature) => (
                            <div key={feature} className="flex items-center text-sm text-gray-500">
                              <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3`}></div>
                              {feature}
                            </div>
                          ))}
                        </div>
                        
                        <div className={`inline-flex items-center text-transparent bg-gradient-to-r ${service.color} bg-clip-text font-semibold`}>
                          Acessar Serviço
                          <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Phone className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Pronto para começar?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Junte-se a milhares de cidadãos que já utilizam nossos serviços digitais.
              Cadastre-se gratuitamente e tenha acesso a todos os benefícios.
            </p>
            <Link
              to="/cadastro"
              className="inline-block bg-yellow-400 text-blue-900 px-12 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transition-all transform hover:scale-105"
            >
              Criar Minha Conta
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
