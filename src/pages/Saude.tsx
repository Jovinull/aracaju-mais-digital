import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {Heart, Video, Calendar, FileText, Phone, Clock, User, Stethoscope, Brain, Scale, AlertCircle, Plus, MapPin, Star} from 'lucide-react'
import { Link } from 'react-router-dom'

const Saude = () => {
  const [activeTab, setActiveTab] = useState('teleatendimento')

  const especialidades = [
    {
      nome: 'Clínico Geral',
      icon: Stethoscope,
      disponivel: 12,
      tempo: '15 min',
      rating: 4.8,
      color: 'from-blue-500 to-blue-600'
    },
    {
      nome: 'Psicologia',
      icon: Brain,
      disponivel: 8,
      tempo: '20 min',
      rating: 4.9,
      color: 'from-purple-500 to-purple-600'
    },
    {
      nome: 'Nutrição',
      icon: Scale,
      disponivel: 5,
      tempo: '25 min',
      rating: 4.7,
      color: 'from-green-500 to-green-600'
    },
    {
      nome: 'Cardiologia',
      icon: Heart,
      disponivel: 3,
      tempo: '30 min',
      rating: 4.9,
      color: 'from-red-500 to-red-600'
    }
  ]

  const proximasConsultas = [
    {
      especialista: 'Dr. João Silva',
      especialidade: 'Clínico Geral',
      data: '2024-12-20',
      hora: '14:30',
      tipo: 'Teleatendimento',
      status: 'confirmada'
    },
    {
      especialista: 'Dra. Maria Santos',
      especialidade: 'Psicologia',
      data: '2024-12-22',
      hora: '10:00',
      tipo: 'Presencial',
      status: 'pendente'
    }
  ]

  const historicoMedico = [
    {
      data: '2024-12-15',
      especialista: 'Dr. Carlos Oliveira',
      especialidade: 'Cardiologia',
      diagnostico: 'Consulta de rotina - Pressão arterial normal',
      receita: 'Manter exercícios regulares'
    },
    {
      data: '2024-12-10',
      especialista: 'Dra. Ana Costa',
      especialidade: 'Clínico Geral',
      diagnostico: 'Exames de rotina - Resultados normais',
      receita: 'Vitamina D - 1 comprimido ao dia'
    }
  ]

  const unidadesSaude = [
    {
      nome: 'UBS Centro',
      endereco: 'Rua da Saúde, 123 - Centro',
      distancia: '2.5 km',
      telefone: '(79) 3179-1500',
      horario: '07:00 - 17:00',
      especialidades: ['Clínico Geral', 'Pediatria', 'Ginecologia']
    },
    {
      nome: 'UBS Jardins',
      endereco: 'Av. Beira Mar, 456 - Jardins',
      distancia: '3.2 km',
      telefone: '(79) 3179-1600',
      horario: '07:00 - 17:00',
      especialidades: ['Clínico Geral', 'Cardiologia', 'Dermatologia']
    }
  ]

  const tabs = [
    { id: 'teleatendimento', label: 'Teleatendimento', icon: Video },
    { id: 'consultas', label: 'Minhas Consultas', icon: Calendar },
    { id: 'historico', label: 'Histórico Médico', icon: FileText },
    { id: 'unidades', label: 'Unidades de Saúde', icon: MapPin }
  ]

  const renderTabContent = () => {
    switch (activeTab) {
      case 'teleatendimento':
        return (
          <div className="space-y-8">
            {/* Emergência */}
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
              <div className="flex items-center">
                <AlertCircle className="w-6 h-6 text-red-500 mr-3" />
                <div>
                  <h3 className="text-lg font-semibold text-red-800">Emergência Médica?</h3>
                  <p className="text-red-700">
                    Em caso de emergência, ligue imediatamente para o <strong>SAMU 192</strong> ou 
                    dirija-se ao hospital mais próximo.
                  </p>
                </div>
              </div>
            </div>

            {/* Especialidades Disponíveis */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Especialidades Disponíveis
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {especialidades.map((especialidade) => {
                  const Icon = especialidade.icon
                  return (
                    <motion.div
                      key={especialidade.nome}
                      whileHover={{ scale: 1.05 }}
                      className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
                    >
                      <div className={`w-16 h-16 bg-gradient-to-r ${especialidade.color} rounded-2xl flex items-center justify-center mb-4`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <h4 className="text-lg font-bold text-gray-900 mb-2">
                        {especialidade.nome}
                      </h4>
                      
                      <div className="space-y-2 text-sm text-gray-600 mb-4">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-2" />
                          {especialidade.disponivel} disponíveis
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          Tempo médio: {especialidade.tempo}
                        </div>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 mr-2 text-yellow-500" />
                          {especialidade.rating}
                        </div>
                      </div>
                      
                      <Link
                        to="/teleatendimento"
                        className={`w-full bg-gradient-to-r ${especialidade.color} text-white py-3 px-4 rounded-xl font-semibold text-center block hover:opacity-90 transition-opacity`}
                      >
                        Iniciar Consulta
                      </Link>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            {/* Como Funciona */}
            <div className="bg-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Como funciona o Teleatendimento
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">1</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Escolha a Especialidade
                  </h4>
                  <p className="text-gray-600">
                    Selecione o profissional adequado para sua necessidade
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">2</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Aguarde na Fila
                  </h4>
                  <p className="text-gray-600">
                    Você será conectado com o próximo profissional disponível
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Consulta Online
                  </h4>
                  <p className="text-gray-600">
                    Realize sua consulta por vídeo de forma segura
                  </p>
                </div>
              </div>
            </div>
          </div>
        )

      case 'consultas':
        return (
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-gray-900">
                Próximas Consultas
              </h3>
              <Link
                to="/agendamentos"
                className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors flex items-center"
              >
                <Plus className="w-5 h-5 mr-2" />
                Nova Consulta
              </Link>
            </div>

            <div className="space-y-4">
              {proximasConsultas.map((consulta, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">
                        {consulta.especialista}
                      </h4>
                      <p className="text-blue-600 font-semibold">
                        {consulta.especialidade}
                      </p>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      consulta.status === 'confirmada' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {consulta.status === 'confirmada' ? 'Confirmada' : 'Pendente'}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(consulta.data).toLocaleDateString('pt-BR')}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {consulta.hora}
                    </div>
                    <div className="flex items-center">
                      <Video className="w-4 h-4 mr-2" />
                      {consulta.tipo}
                    </div>
                  </div>
                  
                  <div className="flex space-x-4 mt-4">
                    <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                      Entrar na Consulta
                    </button>
                    <button className="px-4 py-2 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
                      Reagendar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )

      case 'historico':
        return (
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900">
              Histórico Médico
            </h3>

            <div className="space-y-4">
              {historicoMedico.map((consulta, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">
                        {consulta.especialista}
                      </h4>
                      <p className="text-blue-600 font-semibold">
                        {consulta.especialidade}
                      </p>
                    </div>
                    <div className="text-sm text-gray-500">
                      {new Date(consulta.data).toLocaleDateString('pt-BR')}
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-semibold text-gray-700 mb-1">Diagnóstico:</h5>
                      <p className="text-gray-600">{consulta.diagnostico}</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-700 mb-1">Prescrição:</h5>
                      <p className="text-gray-600">{consulta.receita}</p>
                    </div>
                  </div>
                  
                  <div className="flex space-x-4 mt-4">
                    <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                      Ver Detalhes
                    </button>
                    <button className="text-green-600 font-semibold hover:text-green-700 transition-colors">
                      Baixar Receita
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )

      case 'unidades':
        return (
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900">
              Unidades de Saúde Próximas
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {unidadesSaude.map((unidade, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-1">
                        {unidade.nome}
                      </h4>
                      <p className="text-gray-600 flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {unidade.endereco}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-blue-600 font-semibold">{unidade.distancia}</div>
                      <div className="text-sm text-gray-500">de distância</div>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Phone className="w-4 h-4 mr-2" />
                      {unidade.telefone}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      {unidade.horario}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-700 mb-2">Especialidades:</h5>
                    <div className="flex flex-wrap gap-2">
                      {unidade.especialidades.map((esp, idx) => (
                        <span key={idx} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-lg text-xs font-semibold">
                          {esp}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-4">
                    <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                      Ver Rota
                    </button>
                    <button className="px-4 py-2 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
                      Agendar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Heart className="w-20 h-20 mx-auto mb-6 text-yellow-300" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Saúde Digital
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Cuidamos da sua saúde com tecnologia de ponta. 
              Teleatendimentos, consultas agendadas e seu histórico médico sempre acessível.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tabs Navigation */}
          <div className="bg-white rounded-2xl shadow-lg p-2 mb-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {tabs.map((tab) => {
                const Icon = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center justify-center space-x-2 px-4 py-3 rounded-xl font-semibold transition-all ${
                      activeTab === tab.id
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    <Icon size={20} />
                    <span className="hidden md:block">{tab.label}</span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {renderTabContent()}
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Saude
