import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Python & Backend",
    description: "Разработка REST API, микросервисов, фоновых задач. Flask, SQLAlchemy, PostgreSQL, Redis — продвинутый уровень.",
    icon: "brain",
    badge: "Продвинутый",
  },
  {
    title: "AI & ML интеграции",
    description: "Интеграция GPT-5, Claude, Sora, TTS/STT/NLU моделей. LoRA адаптеры, инференс-пайплайны, OpenRouter API.",
    icon: "zap",
    badge: "AI",
  },
  {
    title: "Web3 & Blockchain",
    description: "EVM-сети, смарт-контракты (DeFi, DEX), Canton Network / DAML, on-chain микротранзакции, Web3.py.",
    icon: "link",
    badge: "Web3",
  },
  {
    title: "Инфраструктура",
    description: "Docker, CI/CD (GitHub Actions), Nginx, Linux-серверы, мониторинг Prometheus + Grafana + ELK + OpenTelemetry.",
    icon: "globe",
    badge: "DevOps",
  },
  {
    title: "Автоматизация",
    description: "UI-автоматизация (Selenium, curl_cffi), API-клиенты для CEX/DEX, onchain-скрипты, браузерная эмуляция.",
    icon: "target",
    badge: "Automation",
  },
  {
    title: "Frontend",
    description: "Next.js с SSR, TypeScript, адаптивная верстка, системы авторизации и биллинга (Coinbase Commerce).",
    icon: "lock",
    badge: "Fullstack",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans" id="skills">Стек и навыки</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Специализируюсь на backend-разработке, AI-интеграциях и Web3-инфраструктуре
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "brain" && "&#129504;"}
                    {feature.icon === "lock" && "&#128274;"}
                    {feature.icon === "globe" && "&#127760;"}
                    {feature.icon === "zap" && "&#9889;"}
                    {feature.icon === "link" && "&#128279;"}
                    {feature.icon === "target" && "&#127919;"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}