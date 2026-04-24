import { Github, Twitter, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black border-t border-red-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-orbitron text-2xl font-bold text-white mb-4">
              dev<span className="text-red-500">.portfolio</span>
            </h2>
            <p className="font-space-mono text-gray-300 mb-6 max-w-md">
              Backend-разработчик. Python · AI · Web3 · Инфраструктура. Открыт к интересным проектам.
            </p>
            <div className="flex space-x-4">
              <a href="https://t.me/cantrustai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="https://github.com/cantrustai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                <Linkedin size={20} />
              </a>
              <a href="mailto:contact@cantrustai.dev" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-orbitron text-white font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#skills"
                  className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200"
                >
                  Навыки
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200"
                >
                  Опыт
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200"
                >
                  Вопросы
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-orbitron text-white font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://t.me/cantrustai" target="_blank" rel="noopener noreferrer" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200">
                  Telegram
                </a>
              </li>
              <li>
                <a href="https://github.com/cantrustai" target="_blank" rel="noopener noreferrer" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-red-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-space-mono text-gray-400 text-sm">2026 · Backend Developer Portfolio</p>
          </div>
        </div>
      </div>
    </footer>
  )
}