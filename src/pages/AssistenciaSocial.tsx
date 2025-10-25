import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {HandHeart, CreditCard, FileText, Users, Phone, Calendar, CheckCircle, AlertCircle, Clock, DollarSign, Home, Baby, Accessibility, Heart, Shield, Search, Filter, Download, Eye} from 'lucide-react'

const AssistenciaSocial = () => {
  const [activeTab, setActiveTab] = useState('beneficios')
  const [searchTerm, setSearchTerm] = useState('')

  const beneficiosDisponiveis = [
    {
      id: 1,
      nome: 'Auxílio Brasil',
      descricao: 'Programa de transferência de renda para famílias em situação de vulnerabilidade social.',
      valor: 'R$ 400,00 - R$ 1.000,00',
      requisitos: ['Renda familiar per capita até R$ 218,00', 'Cadastro no CadÚnico atualizado', 'Filhos entre 0 e 21 anos'],
      documentos: ['CPF', 'RG', 'Comprovante de residência', 'Certidão de nascimento dos filhos'],
      prazo: '30 dias',
      status: 'Disponível',
      icon: DollarSign,
      color: 'from-green-500 to-green-600',
      categoria: 'transferencia'
    },
    {
      id: 2,
      nome: 'BPC - Benefício de Prestação Continuada',
      descricao: 'Benefício assistencial para idosos acima de 65 anos e pessoas com deficiência.',
      valor: 'R$ 1.412,00',
      requisitos: ['Idade mínima de 65 anos OU pessoa com deficiência', 'Renda familiar per capita até 1/4 do salário mínimo', 'Não possuir outro benefício'],
      documentos: ['CPF', 'RG', 'Comprovante de residência', 'Laudos médicos (se deficiente)', 'Comprovante de renda familiar'],
      prazo: '45 dias',
      status: 'Disponível',
      icon: Accessibility,
      color: 'from-blue-500 to-blue-600',
      categoria: 'assistencial'
    },
    {
      id: 3,
      nome: 'Auxílio Gás',
      descricao: 'Auxílio para compra de gás de cozinha para famílias de baixa renda.',
      valor: 'R$ 110,00 (bimestral)',
      requisitos: ['Cadastro no CadÚnico', 'Renda familiar per capita até meio salário mínimo', 'Receber Auxílio Brasil'],
      documentos: ['CPF', 'Comprovante de residência', 'Comprovante de renda'],
      prazo: '15 dias',
      status: 'Disponível',
      icon: Home,
      color: 'from-orange-500 to-orange-600',
      categoria: 'transferencia'
    },
    {
      id: 4,
      nome: 'Auxílio Maternidade',
      descricao: 'Benefício para mulheres que deram à luz ou adotaram uma criança.',
      valor: 'R$ 1.412,00 (120 dias)',
      requisitos: ['Contribuição mínima de 10 meses', 'Carência de 10 contribuições mensais', 'Qualidade de segurada'],
      documentos: ['CPF', 'RG', 'Carteira de trabalho', 'Certidão de nascimento da criança', 'Atestado médico'],
      prazo: '28 dias',
      status: 'Disponível',
      icon: Baby,
      color: 'from-pink-500 to-pink-600',
      categoria: 'previdenciario'
    }
  ]

  const meusBeneficiosAtivos = [
    {
      beneficio: 'Auxílio Brasil',
      valor: 'R$ 600,00',
      proximoPagamento: '2025-12-18',
      status: 'Ativo',
      numeroCartao: '**** **** **** 1234'
    },
    {
      beneficio: 'Auxílio Gás',
      valor: 'R$ 110,00',
      proximoPagamento: '2025-12-20',
      status: 'Ativo',
      numeroCartao: '**** **** **** 1234'
    }
  ]

  const solicitacoesAndamento = [
    {
      protocolo: '2025123456789',
      beneficio: 'BPC - Benefício de Prestação Continuada',
      datasolicitacao: '2025-11-15',
      status: 'Em análise',
      prazoResposta: '2025-12-30',
      etapa: 'Análise documental'
    },
    {
      protocolo: '2025123456790',
      beneficio: 'Auxílio Maternidade',
      datasolicitacao: '2025-12-01',
      status: 'Documentação pendente',
      prazoResposta: '2025-12-29',
      etapa: 'Aguardando documentos'
    }
  ]

  const programasSociais = [
    {
      nome: 'Criança Feliz',
      descricao: 'Programa de visitação domiciliar para o desenvolvimento infantil.',
      publico: 'Famílias com crianças de 0 a 6 anos',
      inscricoes: 'Abertas',
      contato: '(79) 3179-1700'
    },
    {
      nome: 'Pronatec',
      descricao: 'Programa Nacional de Acesso ao Ensino Técnico e Emprego.',
      publico: 'Jovens e adultos em busca de qualificação',
      inscricoes: 'Janeiro 2025',
      contato: '(79) 3179-1800'
    },
    {
      nome: 'Habitação Social',
      descricao: 'Programa de moradia popular para famílias de baixa renda.',
      publico: 'Famílias com renda até 3 salários mínimos',
      inscricoes: 'Permanentes',
      contato: '(79) 3179-1900'
    }
  ]

  const tabs = [
    { id: 'beneficios', label: 'Benefícios Disponíveis', icon: CreditCard },
    { id: 'meus-beneficios', label: 'Meus Benefícios', icon: CheckCircle },
    { id: 'solicitacoes', label: 'Minhas Solicitações', icon: FileText },
    { id: 'programas', label: 'Programas Sociais', icon: Users }
  ]

  const categorias = [
    { id: 'todos', nome: 'Todos os Benefícios' },
    { id: 'transferencia', nome: 'Transferência de Renda' },
    { id: 'assistencial', nome: 'Assistencial' },
    { id: 'previdenciario', nome: 'Previdenciário' }
  ]

  const [selectedCategory, setSelectedCategory] = useState('todos')

  const filteredBeneficios = beneficiosDisponiveis.filter(beneficio => {
    const matchesSearch = beneficio.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         beneficio.descricao.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'todos' || beneficio.categoria === selectedCategory
    return matchesSearch && matchesCategory
  })

  const renderTabContent = () => {
    switch (activeTab) {
      case 'beneficios':
        return (
          <div className="space-y-8">
            {/* INSS Simplificado */}
            <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mr-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">INSS Simplificado</h3>
                  <p className="text-blue-100">Acesso fácil e acessível aos serviços previdenciários</p>
                </div>
              </div>
              
              <p className="text-lg mb-6 text-blue-100">
                Nossa plataforma integrada com o INSS torna o acesso aos benefícios mais simples, 
                rápido e totalmente acessível para todos os cidadãos.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-blue-200">Acessível</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-blue-200">Disponível</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold">50%</div>
                  <div className="text-blue-200">Mais Rápido</div>
                </div>
              </div>
              
              <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">
                Acessar Serviços INSS
              </button>
            </div>

            {/* Filtros */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Buscar benefícios..."
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
                        {categoria.nome}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Lista de Benefícios */}
            <div className="space-y-6">
              {filteredBeneficios.map((beneficio) => {
                const Icon = beneficio.icon
                return (
                  <motion.div
                    key={beneficio.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <div className={`w-16 h-16 bg-gradient-to-r ${beneficio.color} rounded-2xl flex items-center justify-center mr-4`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{beneficio.nome}</h3>
                          <p className="text-green-600 font-semibold text-lg">{beneficio.valor}</p>
                        </div>
                      </div>
                      <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {beneficio.status}
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 leading-relaxed">{beneficio.descricao}</p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Requisitos:</h4>
                        <ul className="space-y-1">
                          {beneficio.requisitos.map((req, index) => (
                            <li key={index} className="flex items-start text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Documentos Necessários:</h4>
                        <ul className="space-y-1">
                          {beneficio.documentos.map((doc, index) => (
                            <li key={index} className="flex items-start text-sm text-gray-600">
                              <FileText className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                              {doc}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        Prazo de análise: {beneficio.prazo}
                      </div>
                    </div>

                    <div className="flex space-x-4">
                      <button className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                        Solicitar Benefício
                      </button>
                      <button className="px-6 py-3 border border-gray-300 rounded-xl font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
                        Mais Informações
                      </button>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        )

      case 'meus-beneficios':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Meus Benefícios Ativos
              </h3>
              <p className="text-gray-600">
                Acompanhe seus benefícios e datas de pagamento
              </p>
            </div>

            <div className="space-y-6">
              {meusBeneficiosAtivos.map((beneficio, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">{beneficio.beneficio}</h4>
                      <p className="text-green-600 font-semibold text-lg">{beneficio.valor}</p>
                    </div>
                    <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {beneficio.status}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-blue-50 rounded-xl p-4">
                      <div className="flex items-center mb-2">
                        <Calendar className="w-5 h-5 text-blue-600 mr-2" />
                        <span className="font-semibold text-gray-900">Próximo Pagamento</span>
                      </div>
                      <p className="text-blue-600 font-bold text-lg">
                        {new Date(beneficio.proximoPagamento).toLocaleDateString('pt-BR')}
                      </p>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-4">
                      <div className="flex items-center mb-2">
                        <CreditCard className="w-5 h-5 text-gray-600 mr-2" />
                        <span className="font-semibold text-gray-900">Cartão</span>
                      </div>
                      <p className="text-gray-600 font-mono">{beneficio.numeroCartao}</p>
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <button className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                      <Eye className="w-4 h-4 mr-2" />
                      Ver Extrato
                    </button>
                    <button className="flex items-center px-6 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors">
                      <Download className="w-4 h-4 mr-2" />
                      Comprovante
                    </button>
                    <button className="px-6 py-2 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
                      Bloquear Cartão
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )

      case 'solicitacoes':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Minhas Solicitações
              </h3>
              <p className="text-gray-600">
                Acompanhe o status das suas solicitações de benefícios
              </p>
            </div>

            <div className="space-y-6">
              {solicitacoesAndamento.map((solicitacao, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">{solicitacao.beneficio}</h4>
                      <p className="text-gray-600">Protocolo: {solicitacao.protocolo}</p>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      solicitacao.status === 'Em análise' 
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {solicitacao.status}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 text-sm">
                    <div>
                      <span className="text-gray-500">Data da Solicitação:</span>
                      <p className="font-semibold">
                        {new Date(solicitacao.datasolicitacao).toLocaleDateString('pt-BR')}
                      </p>
                    </div>
                    <div>
                      <span className="text-gray-500">Prazo de Resposta:</span>
                      <p className="font-semibold">
                        {new Date(solicitacao.prazoResposta).toLocaleDateString('pt-BR')}
                      </p>
                    </div>
                    <div>
                      <span className="text-gray-500">Etapa Atual:</span>
                      <p className="font-semibold">{solicitacao.etapa}</p>
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <button className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                      <Eye className="w-4 h-4 mr-2" />
                      Ver Detalhes
                    </button>
                    {solicitacao.status === 'Documentação pendente' && (
                      <button className="flex items-center px-6 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors">
                        <FileText className="w-4 h-4 mr-2" />
                        Enviar Documentos
                      </button>
                    )}
                    <button className="px-6 py-2 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
                      Cancelar Solicitação
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )

      case 'programas':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Programas Sociais
              </h3>
              <p className="text-gray-600">
                Conheça os programas sociais disponíveis em Aracaju
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {programasSociais.map((programa, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mr-4">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900">{programa.nome}</h4>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed">{programa.descricao}</p>

                  <div className="space-y-3 mb-6">
                    <div>
                      <span className="text-gray-500 text-sm">Público-alvo:</span>
                      <p className="font-semibold text-gray-900">{programa.publico}</p>
                    </div>
                    <div>
                      <span className="text-gray-500 text-sm">Inscrições:</span>
                      <p className={`font-semibold ${
                        programa.inscricoes === 'Abertas' ? 'text-green-600' : 'text-blue-600'
                      }`}>
                        {programa.inscricoes}
                      </p>
                    </div>
                    <div>
                      <span className="text-gray-500 text-sm">Contato:</span>
                      <p className="font-semibold text-gray-900 flex items-center">
                        <Phone className="w-4 h-4 mr-2" />
                        {programa.contato}
                      </p>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <button className="flex-1 bg-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                      Inscrever-se
                    </button>
                    <button className="px-4 py-2 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
                      Saiba Mais
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
            <HandHeart className="w-20 h-20 mx-auto mb-6 text-yellow-300" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Assistência Social
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Acesso simplificado e totalmente acessível aos benefícios sociais e programas governamentais. 
              Sua dignidade e bem-estar são nossa prioridade.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">25K+</div>
              <div className="text-gray-600">Famílias Atendidas</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">15+</div>
              <div className="text-gray-600">Benefícios Disponíveis</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
              <div className="text-gray-600">Acessível</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-yellow-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">24/7</div>
              <div className="text-gray-600">Suporte Online</div>
            </div>
          </div>
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

export default AssistenciaSocial
