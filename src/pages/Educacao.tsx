import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {GraduationCap, BookOpen, Award, Users, Clock, Star, Play, Download, Search, Filter, Calendar, MapPin, Briefcase, TrendingUp} from 'lucide-react'

const Educacao = () => {
  const [activeTab, setActiveTab] = useState('cursos')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('todos')

  const cursosDisponiveis = [
    {
      id: 1,
      titulo: 'Informática Básica',
      categoria: 'tecnologia',
      instituicao: 'CIEE Aracaju',
      duracao: '40 horas',
      modalidade: 'Online',
      nivel: 'Iniciante',
      rating: 4.8,
      vagas: 25,
      inscricoes: 120,
      inicio: '2024-12-25',
      imagem: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg',
      descricao: 'Aprenda os fundamentos da informática e navegação na internet.',
      certificacao: true,
      gratuito: true
    },
    {
      id: 2,
      titulo: 'Inglês Básico',
      categoria: 'idiomas',
      instituicao: 'Centro de Idiomas Municipal',
      duracao: '80 horas',
      modalidade: 'Presencial',
      nivel: 'Iniciante',
      rating: 4.9,
      vagas: 30,
      inscricoes: 89,
      inicio: '2024-12-28',
      imagem: 'https://images.pexels.com/photos/267669/pexels-photo-267669.jpeg',
      descricao: 'Curso básico de inglês focado em conversação e gramática essencial.',
      certificacao: true,
      gratuito: true
    },
    {
      id: 3,
      titulo: 'Administração Empresarial',
      categoria: 'gestao',
      instituicao: 'SEBRAE Sergipe',
      duracao: '60 horas',
      modalidade: 'Híbrido',
      nivel: 'Intermediário',
      rating: 4.7,
      vagas: 20,
      inscricoes: 156,
      inicio: '2025-01-05',
      imagem: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
      descricao: 'Fundamentos de administração e gestão empresarial.',
      certificacao: true,
      gratuito: false,
      preco: 'R$ 150,00'
    },
    {
      id: 4,
      titulo: 'Cuidador de Idosos',
      categoria: 'saude',
      instituicao: 'Escola Técnica de Saúde',
      duracao: '120 horas',
      modalidade: 'Presencial',
      nivel: 'Profissionalizante',
      rating: 4.9,
      vagas: 15,
      inscricoes: 78,
      inicio: '2025-01-10',
      imagem: 'https://images.pexels.com/photos/339620/pexels-photo-339620.jpeg',
      descricao: 'Formação completa para cuidadores de pessoas idosas.',
      certificacao: true,
      gratuito: true
    }
  ]

  const oportunidadesEmprego = [
    {
      empresa: 'Prefeitura de Aracaju',
      vaga: 'Assistente Administrativo',
      tipo: 'Efetivo',
      salario: 'R$ 2.500,00',
      requisitos: 'Ensino médio completo',
      vagas: 10,
      inscricoes: '15/12 - 20/01',
      status: 'Aberto'
    },
    {
      empresa: 'Hospital Municipal',
      vaga: 'Técnico em Enfermagem',
      tipo: 'Contrato',
      salario: 'R$ 2.200,00',
      requisitos: 'Curso técnico em enfermagem',
      vagas: 5,
      inscricoes: '20/12 - 25/01',
      status: 'Aberto'
    },
    {
      empresa: 'Escola Municipal Centro',
      vaga: 'Professor de Matemática',
      tipo: 'Efetivo',
      salario: 'R$ 3.500,00',
      requisitos: 'Licenciatura em Matemática',
      vagas: 2,
      inscricoes: '10/01 - 15/02',
      status: 'Em breve'
    }
  ]

  const certificacoes = [
    {
      curso: 'Informática Básica',
      instituicao: 'CIEE Aracaju',
      conclusao: '2024-11-15',
      cargaHoraria: '40h',
      status: 'Concluído'
    },
    {
      curso: 'Atendimento ao Cliente',
      instituicao: 'SEBRAE',
      conclusao: '2024-10-20',
      cargaHoraria: '20h',
      status: 'Concluído'
    },
    {
      curso: 'Inglês Básico',
      instituicao: 'Centro de Idiomas',
      conclusao: 'Em andamento',
      cargaHoraria: '80h',
      status: 'Cursando'
    }
  ]

  const categorias = [
    { id: 'todos', nome: 'Todos os Cursos', count: cursosDisponiveis.length },
    { id: 'tecnologia', nome: 'Tecnologia', count: 1 },
    { id: 'idiomas', nome: 'Idiomas', count: 1 },
    { id: 'gestao', nome: 'Gestão', count: 1 },
    { id: 'saude', nome: 'Saúde', count: 1 }
  ]

  const tabs = [
    { id: 'cursos', label: 'Cursos Disponíveis', icon: BookOpen },
    { id: 'empregos', label: 'Oportunidades', icon: Briefcase },
    { id: 'certificados', label: 'Meus Certificados', icon: Award }
  ]

  const filteredCursos = cursosDisponiveis.filter(curso => {
    const matchesSearch = curso.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         curso.instituicao.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'todos' || curso.categoria === selectedCategory
    return matchesSearch && matchesCategory
  })

  const renderTabContent = () => {
    switch (activeTab) {
      case 'cursos':
        return (
          <div className="space-y-8">
            {/* Filtros */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Buscar cursos..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Filter className="w-5 h-5 text-gray-400" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {categorias.map(categoria => (
                      <option key={categoria.id} value={categoria.id}>
                        {categoria.nome} ({categoria.count})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Lista de Cursos */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredCursos.map((curso) => (
                <motion.div
                  key={curso.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-48">
                    <img
                      src={curso.imagem}
                      alt={curso.titulo}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      {curso.gratuito ? (
                        <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          Gratuito
                        </span>
                      ) : (
                        <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {curso.preco}
                        </span>
                      )}
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center bg-black bg-opacity-50 text-white px-2 py-1 rounded">
                        <Star className="w-4 h-4 text-yellow-400 mr-1" />
                        <span className="text-sm font-semibold">{curso.rating}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{curso.titulo}</h3>
                      {curso.certificacao && (
                        <Award className="w-5 h-5 text-yellow-500" />
                      )}
                    </div>

                    <p className="text-blue-600 font-semibold mb-3">{curso.instituicao}</p>
                    <p className="text-gray-600 mb-4 leading-relaxed">{curso.descricao}</p>

                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div className="flex items-center text-gray-600">
                        <Clock className="w-4 h-4 mr-2" />
                        {curso.duracao}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-4 h-4 mr-2" />
                        {curso.modalidade}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Users className="w-4 h-4 mr-2" />
                        {curso.vagas} vagas
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Calendar className="w-4 h-4 mr-2" />
                        Início: {new Date(curso.inicio).toLocaleDateString('pt-BR')}
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div className="text-sm text-gray-600">
                        <strong>{curso.inscricoes}</strong> inscrições
                      </div>
                      <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        curso.nivel === 'Iniciante' ? 'bg-green-100 text-green-800' :
                        curso.nivel === 'Intermediário' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {curso.nivel}
                      </div>
                    </div>

                    <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                      Inscrever-se
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )

      case 'empregos':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Oportunidades de Emprego
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Vagas públicas e parcerias com empresas locais para impulsionar sua carreira
              </p>
            </div>

            <div className="space-y-6">
              {oportunidadesEmprego.map((oportunidade, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-1">
                        {oportunidade.vaga}
                      </h4>
                      <p className="text-blue-600 font-semibold">{oportunidade.empresa}</p>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      oportunidade.status === 'Aberto' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {oportunidade.status}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4 text-sm">
                    <div>
                      <span className="text-gray-500">Tipo:</span>
                      <p className="font-semibold">{oportunidade.tipo}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Salário:</span>
                      <p className="font-semibold text-green-600">{oportunidade.salario}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Vagas:</span>
                      <p className="font-semibold">{oportunidade.vagas}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Inscrições:</span>
                      <p className="font-semibold">{oportunidade.inscricoes}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <span className="text-gray-500 text-sm">Requisitos:</span>
                    <p className="text-gray-700">{oportunidade.requisitos}</p>
                  </div>

                  <div className="flex space-x-4">
                    <button className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                      Candidatar-se
                    </button>
                    <button className="px-6 py-3 border border-gray-300 rounded-xl font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
                      Ver Detalhes
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* CIEE Integration */}
            <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-8 text-white">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mr-4">
                  <Briefcase className="w-8 h-8 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Parceria CIEE</h3>
                  <p className="text-orange-100">Centro de Integração Empresa-Escola</p>
                </div>
              </div>
              
              <p className="text-lg mb-6 text-orange-100">
                Acesse milhares de oportunidades de estágio e emprego através da nossa 
                integração direta com o CIEE.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold">500+</div>
                  <div className="text-orange-200">Vagas Ativas</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">50+</div>
                  <div className="text-orange-200">Empresas Parceiras</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">1000+</div>
                  <div className="text-orange-200">Jovens Empregados</div>
                </div>
              </div>
              
              <button className="bg-white text-orange-600 px-8 py-3 rounded-xl font-bold hover:bg-orange-50 transition-colors">
                Acessar Portal CIEE
              </button>
            </div>
          </div>
        )

      case 'certificados':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Meus Certificados
              </h3>
              <p className="text-gray-600">
                Acompanhe seu progresso e baixe seus certificados
              </p>
            </div>

            <div className="space-y-4">
              {certificacoes.map((cert, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">{cert.curso}</h4>
                      <p className="text-blue-600 font-semibold">{cert.instituicao}</p>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      cert.status === 'Concluído' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {cert.status}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 text-sm">
                    <div>
                      <span className="text-gray-500">Conclusão:</span>
                      <p className="font-semibold">
                        {cert.conclusao === 'Em andamento' 
                          ? 'Em andamento' 
                          : new Date(cert.conclusao).toLocaleDateString('pt-BR')
                        }
                      </p>
                    </div>
                    <div>
                      <span className="text-gray-500">Carga Horária:</span>
                      <p className="font-semibold">{cert.cargaHoraria}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Status:</span>
                      <p className="font-semibold">{cert.status}</p>
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    {cert.status === 'Concluído' ? (
                      <>
                        <button className="flex items-center px-6 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors">
                          <Download className="w-4 h-4 mr-2" />
                          Baixar Certificado
                        </button>
                        <button className="px-6 py-2 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
                          Compartilhar
                        </button>
                      </>
                    ) : (
                      <button className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                        <Play className="w-4 h-4 mr-2" />
                        Continuar Curso
                      </button>
                    )}
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
            <GraduationCap className="w-20 h-20 mx-auto mb-6 text-yellow-300" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Educação & Capacitação
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Desenvolva suas habilidades com cursos gratuitos, oportunidades de emprego 
              e certificações reconhecidas. Seu futuro profissional começa aqui.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">150+</div>
              <div className="text-gray-600">Cursos Disponíveis</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">5K+</div>
              <div className="text-gray-600">Alunos Formados</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-yellow-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">3K+</div>
              <div className="text-gray-600">Certificados Emitidos</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">85%</div>
              <div className="text-gray-600">Taxa de Empregabilidade</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tabs Navigation */}
          <div className="bg-white rounded-2xl shadow-lg p-2 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              {tabs.map((tab) => {
                const Icon = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center justify-center space-x-2 px-6 py-4 rounded-xl font-semibold transition-all ${
                      activeTab === tab.id
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    <Icon size={20} />
                    <span>{tab.label}</span>
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

export default Educacao
