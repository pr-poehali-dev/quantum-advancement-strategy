import { motion } from "framer-motion"

export function AboutSection() {
  const facts = [
    { emoji: "🚀", text: "Предприниматель и стартапер" },
    { emoji: "🎮", text: "Бывший киберспортсмен по CS2" },
    { emoji: "📡", text: "Стримит CS2 в свободное время" },
    { emoji: "💡", text: "Строит сообщество, которое сама искала" },
  ]

  return (
    <section className="bg-background px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.p
          className="text-muted-foreground text-sm uppercase tracking-widest mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Об Алесе
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-foreground leading-tight mb-6">
              Обычная школьница,
              <br />
              <em className="italic bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
                необычный путь.
              </em>
            </h2>

            <div className="space-y-4 text-muted-foreground text-base leading-relaxed">
              <p>
                Меня зовут Алеся. Я школьница, которая занимается предпринимательством, запускает стартапы и каждый день работает над тем, чтобы масштабироваться.
              </p>
              <p>
                Я долго искала своих — людей, которые думают про бизнес, спорт и рост так же, как я. Но не нашла нужного места. Поэтому решила не ждать — и создала его сама.
              </p>
              <p>
                Раньше мечтала стать киберспортсменом по CS2. Сейчас иногда стримлю для души — но фокус на другом: строить, расти и окружать себя правильными людьми.
              </p>
            </div>
          </motion.div>

          {/* Facts side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {facts.map((fact, i) => (
              <motion.div
                key={i}
                className="bg-secondary rounded-xl p-6 flex items-start gap-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ scale: 0.97 }}
              >
                <span className="text-3xl">{fact.emoji}</span>
                <p className="text-foreground font-medium leading-snug">{fact.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
