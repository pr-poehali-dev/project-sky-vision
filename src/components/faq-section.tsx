import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Какой стек используешь в работе?",
      answer:
        "Основной стек — Python (Flask, SQLAlchemy), PostgreSQL, Redis, Docker, GitHub Actions. Для AI-задач: OpenRouter API, LLM-интеграции, TTS/STT модели. Для Web3: Web3.py, EVM/RPC, DAML/Canton. На фронте — Next.js, TypeScript.",
    },
    {
      question: "Есть ли опыт работы в команде?",
      answer:
        "Да, весь коммерческий опыт — командная работа. Команды от 3 до 5 человек. Работал в agile-процессах с code review, pull-request-флоу и CI/CD.",
    },
    {
      question: "На каком уровне английский?",
      answer:
        "Технический английский — уверенный. Читаю документацию, пишу код и комментарии на английском, работал с иностранными коллегами и платформами без проблем.",
    },
    {
      question: "Рассматриваешь удалённую работу?",
      answer:
        "Да, предпочитаю удалённый формат. Весь опыт работы — remote-first. Имею комфортное рабочее место, дисциплину и налаженный процесс самоорганизации.",
    },
    {
      question: "Есть ли опыт с мониторингом и DevOps?",
      answer:
        "Да. Настраивал Prometheus + Grafana + Node Exporter, ELK-стек, OpenTelemetry. Имею опыт с Docker, Nginx, GitHub Actions CI/CD и Linux-серверами.",
    },
    {
      question: "Как можно связаться?",
      answer:
        "Написать в Telegram — самый быстрый способ. Также доступен по email. Ссылки в футере страницы.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron" id="faq">Вопросы и ответы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Часто задаваемые вопросы о стеке, опыте и условиях сотрудничества.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}