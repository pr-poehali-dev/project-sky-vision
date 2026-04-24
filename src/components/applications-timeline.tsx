import { Timeline } from "@/components/ui/timeline"

export function ApplicationsTimeline() {
  const data = [
    {
      title: "cantrustai — Backend Dev",
      content: (
        <div>
          <p className="text-gray-400 text-xs mb-3 font-space-mono">Ноябрь 2025 — сейчас · 6 месяцев</p>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Backend-разработчик в команде из 5 человек для AI-инференс провайдера. Разрабатывал on-chain компоненты,
            REST API для обработки запросов к AI-моделям, совместимый с OpenRouter.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
              On-chain компоненты для Canton Network (микротранзакции, оплата за инференс)
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
              Интеграция GPT-5, Claude Sonnet/Opus 4.5, Sora 2 и других моделей
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
              CI/CD с Docker, мониторинг OpenTelemetry + ELK
            </div>
            <div className="flex items-start gap-3 text-gray-500 text-xs mt-4">
              <span className="font-space-mono">Стек: Python · PostgreSQL · Docker · DAML · Canton · Nginx · GitHub Actions</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "cosuno — ML Engineer",
      content: (
        <div>
          <p className="text-gray-400 text-xs mb-3 font-space-mono">Август 2025 — Февраль 2026 · 7 месяцев</p>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            ML-инженер в команде из 3 человек над голосовым AI-ассистентом. Отвечал за TTS-модули и NLU-пайплайны.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
              Имплементация и Docker-образ для Chatterbox Decider (TTS)
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
              Пайплайн для обучения и подключения LoRA адаптеров к NLU-модели
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
              Интеграция микрокомпонентов через REST API с оркестратором
            </div>
            <div className="flex items-start gap-3 text-gray-500 text-xs mt-4">
              <span className="font-space-mono">Стек: Python · Docker · STT/TTS/NLU · REST API · Linux</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "ftptech — Web3 Python Dev",
      content: (
        <div>
          <p className="text-gray-400 text-xs mb-3 font-space-mono">Май 2025 — Август 2025 · 4 месяца</p>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Разработка Web3-автоматизаций на Python трёх типов. Переходный этап от Fullstack к чистому backend на Python.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
              UI-автоматизация: curl_cffi, Selenium, SeleniumBase
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
              API-клиенты для CEX/DEX платформ (торговля, биржевые операции)
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
              Onchain-скрипты: EVM RPC, смарт-контракты, DeFi, DEX
            </div>
            <div className="flex items-start gap-3 text-gray-500 text-xs mt-4">
              <span className="font-space-mono">Стек: Python · Web3.py · Selenium · curl_cffi · EVM/RPC</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "finesselabs — Fullstack Dev",
      content: (
        <div>
          <p className="text-gray-400 text-xs mb-3 font-space-mono">Март 2024 — Июнь 2025 · 1 год 4 месяца</p>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Fullstack-разработчик в команде из 4 человек. Веб-приложение для запуска блокчейн-нод и валидирования сетей.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
              Асинхронная очередь задач для управления нодами (запуск/стоп/статус)
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
              Мониторинг Prometheus + Grafana + Node Exporter
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
              Frontend Next.js SSR, биллинг Coinbase Commerce, авторизация
            </div>
            <div className="flex items-start gap-3 text-gray-500 text-xs mt-4">
              <span className="font-space-mono">Стек: Next.js · Nest.js · MongoDB · Redis · TypeScript · Python · Flask</span>
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="applications" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="text-center mb-16" id="experience">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">Опыт работы</h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Более 2 лет в коммерческой разработке: от Fullstack до специализации на backend, AI-интеграциях и Web3-инфраструктуре.
          </p>
        </div>

        <div className="relative">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  )
}