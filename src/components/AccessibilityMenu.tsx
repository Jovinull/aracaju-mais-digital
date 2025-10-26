import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Accessibility, Eye, EyeOff, Type, Volume2, VolumeX, Contrast, ZoomIn, ZoomOut, MousePointer, Keyboard, X } from "lucide-react"

interface AccessibilityState {
	highContrast: boolean
	fontSize: "small" | "normal" | "large" | "extra-large"
	screenReader: boolean
	soundEffects: boolean
	focusVisible: boolean
	reducedMotion: boolean
}

const AccessibilityMenu = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [settings, setSettings] = useState<AccessibilityState>({
		highContrast: false,
		fontSize: "normal",
		screenReader: false,
		soundEffects: true,
		focusVisible: true,
		reducedMotion: false,
	})

	// Aplicar configurações de acessibilidade
	useEffect(() => {
		const root = document.documentElement

		// Alto contraste
		if (settings.highContrast) {
			root.classList.add("high-contrast")
		} else {
			root.classList.remove("high-contrast")
		}

		// Tamanho da fonte
		root.classList.remove("font-small", "font-normal", "font-large", "font-extra-large")
		root.classList.add(`font-${settings.fontSize}`)

		// Movimento reduzido
		if (settings.reducedMotion) {
			root.classList.add("reduced-motion")
		} else {
			root.classList.remove("reduced-motion")
		}

		// Foco visível
		if (settings.focusVisible) {
			root.classList.add("focus-visible")
		} else {
			root.classList.remove("focus-visible")
		}

		// Salvar preferências
		localStorage.setItem("accessibility-settings", JSON.stringify(settings))
	}, [settings])

	// Carregar preferências salvas
	useEffect(() => {
		const saved = localStorage.getItem("accessibility-settings")
		if (saved) {
			setSettings(JSON.parse(saved))
		}
	}, [])

	const updateSetting = (key: keyof AccessibilityState, value: any) => {
		setSettings((prev) => ({ ...prev, [key]: value }))
	}

	const resetSettings = () => {
		setSettings({
			highContrast: false,
			fontSize: "normal",
			screenReader: false,
			soundEffects: true,
			focusVisible: true,
			reducedMotion: false,
		})
	}

	const fontSizes = [
		{ key: "small", label: "Pequeno", size: "14px" },
		{ key: "normal", label: "Normal", size: "16px" },
		{ key: "large", label: "Grande", size: "18px" },
		{ key: "extra-large", label: "Muito Grande", size: "22px" },
	]

	return (
		<>
			{/* Botão de Acessibilidade */}
			<button
				onClick={() => setIsOpen(true)}
				className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-yellow-300 hover:bg-yellow-400 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
				aria-label="Abrir menu de acessibilidade"
				title="Menu de Acessibilidade"
			>
				<img src="/src/assets/acessibilidade.png" alt="abc" style={{ padding: ".4rem" }} />
				<Accessibility className="w-8 h-8" />
			</button>

			{/* Menu de Acessibilidade */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4"
						onClick={() => setIsOpen(false)}
					>
						<motion.div
							initial={{ scale: 0.9, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0.9, opacity: 0 }}
							onClick={(e) => e.stopPropagation()}
							className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
							role="dialog"
							aria-labelledby="accessibility-title"
							aria-describedby="accessibility-description"
						>
							{/* Header */}
							<div className="p-6 border-b border-gray-200">
								<div className="flex items-center justify-between">
									<div>
										<h2 id="accessibility-title" className="text-2xl font-bold text-gray-900 flex items-center">
											<Accessibility className="w-6 h-6 mr-3 text-blue-600" />
											Central de Acessibilidade
										</h2>
										<p id="accessibility-description" className="text-gray-600 mt-1">
											Personalize sua experiência de navegação
										</p>
									</div>
									<button
										onClick={() => setIsOpen(false)}
										className="p-2 hover:bg-gray-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
										aria-label="Fechar menu de acessibilidade"
									>
										<X className="w-6 h-6" />
									</button>
								</div>
							</div>

							{/* Conteúdo */}
							<div className="p-6 space-y-8">
								{/* Contraste */}
								<div className="space-y-4">
									<h3 className="text-lg font-semibold text-gray-900 flex items-center">
										<Contrast className="w-5 h-5 mr-2" />
										Contraste e Cores
									</h3>
									<div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
										<div>
											<div className="font-medium text-gray-900">Alto Contraste</div>
											<div className="text-sm text-gray-600">Melhora a visibilidade do texto</div>
										</div>
										<button
											onClick={() => updateSetting("highContrast", !settings.highContrast)}
											className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
												settings.highContrast ? "bg-blue-600" : "bg-gray-300"
											}`}
											role="switch"
											aria-checked={settings.highContrast}
											aria-label="Alternar alto contraste"
										>
											<span
												className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
													settings.highContrast ? "translate-x-6" : "translate-x-1"
												}`}
											/>
										</button>
									</div>
								</div>

								{/* Tamanho da Fonte */}
								<div className="space-y-4">
									<h3 className="text-lg font-semibold text-gray-900 flex items-center">
										<Type className="w-5 h-5 mr-2" />
										Tamanho do Texto
									</h3>
									<div className="grid grid-cols-2 gap-3">
										{fontSizes.map((size) => (
											<button
												key={size.key}
												onClick={() => updateSetting("fontSize", size.key)}
												className={`p-4 rounded-xl border-2 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 ${
													settings.fontSize === size.key
														? "border-blue-600 bg-blue-50 text-blue-900"
														: "border-gray-200 hover:border-gray-300"
												}`}
												aria-pressed={settings.fontSize === size.key}
											>
												<div className="font-medium">{size.label}</div>
												<div className="text-sm text-gray-600" style={{ fontSize: size.size }}>
													Texto de exemplo
												</div>
											</button>
										))}
									</div>
								</div>

								{/* Navegação */}
								<div className="space-y-4">
									<h3 className="text-lg font-semibold text-gray-900 flex items-center">
										<Keyboard className="w-5 h-5 mr-2" />
										Navegação e Interação
									</h3>

									<div className="space-y-3">
										<div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
											<div>
												<div className="font-medium text-gray-900">Foco Visível</div>
												<div className="text-sm text-gray-600">Destaca elementos focados pelo teclado</div>
											</div>
											<button
												onClick={() => updateSetting("focusVisible", !settings.focusVisible)}
												className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
													settings.focusVisible ? "bg-blue-600" : "bg-gray-300"
												}`}
												role="switch"
												aria-checked={settings.focusVisible}
												aria-label="Alternar foco visível"
											>
												<span
													className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
														settings.focusVisible ? "translate-x-6" : "translate-x-1"
													}`}
												/>
											</button>
										</div>

										<div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
											<div>
												<div className="font-medium text-gray-900">Movimento Reduzido</div>
												<div className="text-sm text-gray-600">Reduz animações e transições</div>
											</div>
											<button
												onClick={() => updateSetting("reducedMotion", !settings.reducedMotion)}
												className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
													settings.reducedMotion ? "bg-blue-600" : "bg-gray-300"
												}`}
												role="switch"
												aria-checked={settings.reducedMotion}
												aria-label="Alternar movimento reduzido"
											>
												<span
													className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
														settings.reducedMotion ? "translate-x-6" : "translate-x-1"
													}`}
												/>
											</button>
										</div>

										<div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
											<div>
												<div className="font-medium text-gray-900">Efeitos Sonoros</div>
												<div className="text-sm text-gray-600">Sons de feedback para interações</div>
											</div>
											<button
												onClick={() => updateSetting("soundEffects", !settings.soundEffects)}
												className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
													settings.soundEffects ? "bg-blue-600" : "bg-gray-300"
												}`}
												role="switch"
												aria-checked={settings.soundEffects}
												aria-label="Alternar efeitos sonoros"
											>
												<span
													className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
														settings.soundEffects ? "translate-x-6" : "translate-x-1"
													}`}
												/>
											</button>
										</div>
									</div>
								</div>

								{/* Atalhos do Teclado */}
								<div className="space-y-4">
									<h3 className="text-lg font-semibold text-gray-900">Atalhos do Teclado</h3>
									<div className="bg-blue-50 rounded-xl p-4">
										<div className="space-y-2 text-sm">
											<div className="flex justify-between">
												<span>Pular para conteúdo principal:</span>
												<kbd className="bg-white px-2 py-1 rounded border">Alt + 1</kbd>
											</div>
											<div className="flex justify-between">
												<span>Abrir menu de navegação:</span>
												<kbd className="bg-white px-2 py-1 rounded border">Alt + 2</kbd>
											</div>
											<div className="flex justify-between">
												<span>Ir para busca:</span>
												<kbd className="bg-white px-2 py-1 rounded border">Alt + 3</kbd>
											</div>
											<div className="flex justify-between">
												<span>Abrir acessibilidade:</span>
												<kbd className="bg-white px-2 py-1 rounded border">Alt + A</kbd>
											</div>
										</div>
									</div>
								</div>
							</div>

							{/* Footer */}
							<div className="p-6 border-t border-gray-200 bg-gray-50 rounded-b-2xl">
								<div className="flex flex-col sm:flex-row gap-4 justify-between">
									<button
										onClick={resetSettings}
										className="px-6 py-3 border border-gray-300 rounded-xl font-semibold text-gray-700 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500"
									>
										Restaurar Padrões
									</button>
									<button
										onClick={() => setIsOpen(false)}
										className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
									>
										Aplicar e Fechar
									</button>
								</div>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	)
}

export default AccessibilityMenu
