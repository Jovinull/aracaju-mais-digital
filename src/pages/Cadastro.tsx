import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useForm } from 'react-hook-form'
import {User, Mail, Phone, MapPin, Heart, GraduationCap, FileText, ArrowLeft, ArrowRight, Check, Calendar, Shield, Users} from 'lucide-react'
import toast from 'react-hot-toast'

interface FormData {
  // Dados Pessoais
  nomeCompleto: string
  cpf: string
  rg: string
  dataNascimento: string
  telefone: string
  email: string
  
  // Endereço
  cep: string
  endereco: string
  numero: string
  complemento: string
  bairro: string
  cidade: string
  
  // Dados de Saúde
  tipoSanguineo: string
  alergias: string
  medicamentosUso: string
  contatoEmergencia: string
  telefoneEmergencia: string
  
  // Dados Educacionais
  escolaridade: string
  profissao: string
  interesseCursos: string[]
  
  // Dados Sociais
  rendaFamiliar: string
  composicaoFamiliar: string
  beneficiosSociais: string[]
  
  // Credenciais
  senha: string
  confirmarSenha: string
}

const Cadastro = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const { register, handleSubmit, formState: { errors }, watch, trigger } = useForm<FormData>()
  
  const totalSteps = 5
  const senha = watch('senha')

  const steps = [
    { 
      id: 1, 
      title: 'Dados Pessoais', 
      icon: User,
      description: 'Informações básicas de identificação'
    },
    { 
      id: 2, 
      title: 'Endereço', 
      icon: MapPin,
      description: 'Localização e contato'
    },
    { 
      id: 3, 
      title: 'Saúde', 
      icon: Heart,
      description: 'Informações médicas importantes'
    },
    { 
      id: 4, 
      title: 'Educação & Social', 
      icon: GraduationCap,
      description: 'Perfil educacional e social'
    },
    { 
      id: 5, 
      title: 'Segurança', 
      icon: Shield,
      description: 'Credenciais de acesso'
    }
  ]

  const tiposSanguineos = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-', 'Não sei']
  const escolaridades = ['Fundamental Incompleto', 'Fundamental Completo', 'Médio Incompleto', 'Médio Completo', 'Superior Incompleto', 'Superior Completo', 'Pós-graduação']
  const rendas = ['Até 1 salário mínimo', '1 a 2 salários mínimos', '2 a 3 salários mínimos', '3 a 5 salários mínimos', 'Acima de 5 salários mínimos']
  const cursos = ['Informática', 'Inglês', 'Administração', 'Saúde', 'Educação', 'Artesanato', 'Culinária', 'Mecânica']
  const beneficios = ['Bolsa Família', 'Auxílio Brasil', 'BPC', 'Seguro Desemprego', 'Vale Gás', 'Auxílio Emergencial']

  const nextStep = async () => {
    const fieldsToValidate = getFieldsForStep(currentStep)
    const isValid = await trigger(fieldsToValidate)
    
    if (isValid && currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const getFieldsForStep = (step: number): (keyof FormData)[] => {
    switch (step) {
      case 1:
        return ['nomeCompleto', 'cpf', 'rg', 'dataNascimento', 'telefone', 'email']
      case 2:
        return ['cep', 'endereco', 'numero', 'bairro', 'cidade']
      case 3:
        return ['tipoSanguineo', 'contatoEmergencia', 'telefoneEmergencia']
      case 4:
        return ['escolaridade', 'profissao', 'rendaFamiliar', 'composicaoFamiliar']
      case 5:
        return ['senha', 'confirmarSenha']
      default:
        return []
    }
  }

  const onSubmit = async (data: FormData) => {
    if (data.senha !== data.confirmarSenha) {
      toast.error('As senhas não coincidem')
      return
    }

    setIsLoading(true)
    
    try {
      // Simular cadastro
      await new Promise(resolve => setTimeout(resolve, 2000))
      toast.success('Cadastro realizado com sucesso!')
      // Redirecionar para login ou dashboard
    } catch (error) {
      toast.error('Erro ao realizar cadastro. Tente novamente.')
    } finally {
      setIsLoading(false)
    }
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  {...register('nomeCompleto', { required: 'Nome completo é obrigatório' })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Seu nome completo"
                />
                {errors.nomeCompleto && (
                  <p className="text-red-500 text-sm mt-1">{errors.nomeCompleto.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  CPF *
                </label>
                <input
                  type="text"
                  {...register('cpf', { required: 'CPF é obrigatório' })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="000.000.000-00"
                />
                {errors.cpf && (
                  <p className="text-red-500 text-sm mt-1">{errors.cpf.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  RG *
                </label>
                <input
                  type="text"
                  {...register('rg', { required: 'RG é obrigatório' })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="00.000.000-0"
                />
                {errors.rg && (
                  <p className="text-red-500 text-sm mt-1">{errors.rg.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Data de Nascimento *
                </label>
                <input
                  type="date"
                  {...register('dataNascimento', { required: 'Data de nascimento é obrigatória' })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                {errors.dataNascimento && (
                  <p className="text-red-500 text-sm mt-1">{errors.dataNascimento.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Telefone *
                </label>
                <input
                  type="tel"
                  {...register('telefone', { required: 'Telefone é obrigatório' })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="(79) 99999-9999"
                />
                {errors.telefone && (
                  <p className="text-red-500 text-sm mt-1">{errors.telefone.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  E-mail *
                </label>
                <input
                  type="email"
                  {...register('email', { 
                    required: 'E-mail é obrigatório',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'E-mail inválido'
                    }
                  })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="seu@email.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  CEP *
                </label>
                <input
                  type="text"
                  {...register('cep', { required: 'CEP é obrigatório' })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="49000-000"
                />
                {errors.cep && (
                  <p className="text-red-500 text-sm mt-1">{errors.cep.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Cidade *
                </label>
                <input
                  type="text"
                  {...register('cidade', { required: 'Cidade é obrigatória' })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Aracaju"
                  defaultValue="Aracaju"
                />
                {errors.cidade && (
                  <p className="text-red-500 text-sm mt-1">{errors.cidade.message}</p>
                )}
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Endereço *
                </label>
                <input
                  type="text"
                  {...register('endereco', { required: 'Endereço é obrigatório' })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Rua, Avenida, etc."
                />
                {errors.endereco && (
                  <p className="text-red-500 text-sm mt-1">{errors.endereco.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Número *
                </label>
                <input
                  type="text"
                  {...register('numero', { required: 'Número é obrigatório' })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="123"
                />
                {errors.numero && (
                  <p className="text-red-500 text-sm mt-1">{errors.numero.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Complemento
                </label>
                <input
                  type="text"
                  {...register('complemento')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Apt, Bloco, etc."
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Bairro *
                </label>
                <input
                  type="text"
                  {...register('bairro', { required: 'Bairro é obrigatório' })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Nome do bairro"
                />
                {errors.bairro && (
                  <p className="text-red-500 text-sm mt-1">{errors.bairro.message}</p>
                )}
              </div>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
              <div className="flex items-center">
                <Heart className="w-5 h-5 text-red-500 mr-2" />
                <p className="text-sm text-red-700">
                  <strong>Importante:</strong> Estas informações são essenciais para seu atendimento médico de emergência.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Tipo Sanguíneo *
                </label>
                <select
                  {...register('tipoSanguineo', { required: 'Tipo sanguíneo é obrigatório' })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Selecione</option>
                  {tiposSanguineos.map(tipo => (
                    <option key={tipo} value={tipo}>{tipo}</option>
                  ))}
                </select>
                {errors.tipoSanguineo && (
                  <p className="text-red-500 text-sm mt-1">{errors.tipoSanguineo.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Contato de Emergência *
                </label>
                <input
                  type="text"
                  {...register('contatoEmergencia', { required: 'Contato de emergência é obrigatório' })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Nome do contato"
                />
                {errors.contatoEmergencia && (
                  <p className="text-red-500 text-sm mt-1">{errors.contatoEmergencia.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Telefone de Emergência *
                </label>
                <input
                  type="tel"
                  {...register('telefoneEmergencia', { required: 'Telefone de emergência é obrigatório' })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="(79) 99999-9999"
                />
                {errors.telefoneEmergencia && (
                  <p className="text-red-500 text-sm mt-1">{errors.telefoneEmergencia.message}</p>
                )}
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Alergias
                </label>
                <textarea
                  {...register('alergias')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Descreva suas alergias (medicamentos, alimentos, etc.)"
                  rows={3}
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Medicamentos em Uso
                </label>
                <textarea
                  {...register('medicamentosUso')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Liste os medicamentos que você usa regularmente"
                  rows={3}
                />
              </div>
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Escolaridade *
                </label>
                <select
                  {...register('escolaridade', { required: 'Escolaridade é obrigatória' })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Selecione</option>
                  {escolaridades.map(escolaridade => (
                    <option key={escolaridade} value={escolaridade}>{escolaridade}</option>
                  ))}
                </select>
                {errors.escolaridade && (
                  <p className="text-red-500 text-sm mt-1">{errors.escolaridade.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Profissão *
                </label>
                <input
                  type="text"
                  {...register('profissao', { required: 'Profissão é obrigatória' })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Sua profissão atual"
                />
                {errors.profissao && (
                  <p className="text-red-500 text-sm mt-1">{errors.profissao.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Renda Familiar *
                </label>
                <select
                  {...register('rendaFamiliar', { required: 'Renda familiar é obrigatória' })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Selecione</option>
                  {rendas.map(renda => (
                    <option key={renda} value={renda}>{renda}</option>
                  ))}
                </select>
                {errors.rendaFamiliar && (
                  <p className="text-red-500 text-sm mt-1">{errors.rendaFamiliar.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Composição Familiar *
                </label>
                <input
                  type="text"
                  {...register('composicaoFamiliar', { required: 'Composição familiar é obrigatória' })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Ex: 2 adultos, 1 criança"
                />
                {errors.composicaoFamiliar && (
                  <p className="text-red-500 text-sm mt-1">{errors.composicaoFamiliar.message}</p>
                )}
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Interesse em Cursos
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {cursos.map(curso => (
                    <label key={curso} className="flex items-center">
                      <input
                        type="checkbox"
                        value={curso}
                        {...register('interesseCursos')}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">{curso}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Benefícios Sociais Recebidos
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {beneficios.map(beneficio => (
                    <label key={beneficio} className="flex items-center">
                      <input
                        type="checkbox"
                        value={beneficio}
                        {...register('beneficiosSociais')}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">{beneficio}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )

      case 5:
        return (
          <div className="space-y-6">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
              <div className="flex items-center">
                <Shield className="w-5 h-5 text-blue-500 mr-2" />
                <p className="text-sm text-blue-700">
                  <strong>Segurança:</strong> Crie uma senha forte para proteger seus dados.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Senha *
                </label>
                <input
                  type="password"
                  {...register('senha', { 
                    required: 'Senha é obrigatória',
                    minLength: {
                      value: 8,
                      message: 'Senha deve ter pelo menos 8 caracteres'
                    }
                  })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Mínimo 8 caracteres"
                />
                {errors.senha && (
                  <p className="text-red-500 text-sm mt-1">{errors.senha.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Confirmar Senha *
                </label>
                <input
                  type="password"
                  {...register('confirmarSenha', { 
                    required: 'Confirmação de senha é obrigatória',
                    validate: value => value === senha || 'As senhas não coincidem'
                  })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Repita sua senha"
                />
                {errors.confirmarSenha && (
                  <p className="text-red-500 text-sm mt-1">{errors.confirmarSenha.message}</p>
                )}
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Termos de Uso e Privacidade</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    required
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 mt-0.5"
                  />
                  <span className="ml-3">
                    Aceito os <Link to="/termos" className="text-blue-600 hover:underline">termos de uso</Link> e 
                    a <Link to="/privacidade" className="text-blue-600 hover:underline">política de privacidade</Link>
                  </span>
                </label>
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 mt-0.5"
                  />
                  <span className="ml-3">
                    Desejo receber notificações sobre novos serviços e atualizações
                  </span>
                </label>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Criar Conta Cidadã
          </h1>
          <p className="text-xl text-gray-600">
            Acesse todos os serviços da Prefeitura de Aracaju
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isActive = currentStep === step.id
              const isCompleted = currentStep > step.id
              
              return (
                <div key={step.id} className="flex items-center">
                  <div className={`
                    w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all
                    ${isActive ? 'bg-blue-600 border-blue-600 text-white' : 
                      isCompleted ? 'bg-green-600 border-green-600 text-white' : 
                      'bg-white border-gray-300 text-gray-400'}
                  `}>
                    {isCompleted ? <Check size={20} /> : <Icon size={20} />}
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`
                      w-12 md:w-24 h-1 mx-2 transition-all
                      ${isCompleted ? 'bg-green-600' : 'bg-gray-300'}
                    `} />
                  )}
                </div>
              )
            })}
          </div>
          
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900">
              {steps[currentStep - 1].title}
            </h2>
            <p className="text-gray-600 mt-1">
              {steps[currentStep - 1].description}
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit(onSubmit)}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {renderStepContent()}
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
              <button
                type="button"
                onClick={prevStep}
                disabled={currentStep === 1}
                className={`
                  flex items-center px-6 py-3 rounded-xl font-semibold transition-all
                  ${currentStep === 1 
                    ? 'text-gray-400 cursor-not-allowed' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}
                `}
              >
                <ArrowLeft size={20} className="mr-2" />
                Voltar
              </button>

              {currentStep < totalSteps ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="flex items-center px-8 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all"
                >
                  Próximo
                  <ArrowRight size={20} className="ml-2" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex items-center px-8 py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-all disabled:opacity-50"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Criando conta...
                    </>
                  ) : (
                    <>
                      <Check size={20} className="mr-2" />
                      Finalizar Cadastro
                    </>
                  )}
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Login Link */}
        <div className="text-center mt-8">
          <p className="text-gray-600">
            Já possui uma conta?{' '}
            <Link to="/login" className="text-blue-600 hover:text-blue-700 font-semibold">
              Fazer login
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Cadastro
