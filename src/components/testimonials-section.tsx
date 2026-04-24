import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const stats = [
  {
    value: "2+",
    label: "года коммерческого опыта",
    detail: "Март 2024 — сейчас",
  },
  {
    value: "4",
    label: "компании в портфолио",
    detail: "cantrustai · cosuno · ftptech · finesselabs",
  },
  {
    value: "10+",
    label: "AI-моделей интегрировано",
    detail: "GPT-5, Claude, Sora, Chatterbox и другие",
  },
]

const highlights = [
  {
    name: "Backend",
    role: "Python · Flask · PostgreSQL · Redis · SQLAlchemy",
    initial: "BE",
    content: "Разработка высоконагруженных API, очередей задач и инфраструктурных сервисов.",
  },
  {
    name: "AI & ML",
    role: "OpenRouter · LLM · TTS/STT · LoRA · OpenTelemetry",
    initial: "AI",
    content: "Интеграция языковых моделей, голосовых пайплайнов и систем мониторинга инференса.",
  },
  {
    name: "Web3",
    role: "EVM · DAML · Canton · Web3.py · DeFi",
    initial: "W3",
    content: "On-chain разработка: смарт-контракты, Canton Network, DEX/CEX автоматизации.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">В цифрах</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ключевые показатели и специализации
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="glow-border slide-up text-center" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-8">
                <p className="text-5xl font-bold text-primary font-orbitron mb-2">{stat.value}</p>
                <p className="text-card-foreground font-semibold mb-1">{stat.label}</p>
                <p className="text-sm text-muted-foreground">{stat.detail}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{item.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarFallback className="bg-red-500/20 text-red-400 font-bold">
                      {item.initial}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{item.name}</p>
                    <p className="text-sm text-muted-foreground">{item.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}