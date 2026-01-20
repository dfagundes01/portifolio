import { motion } from 'framer-motion'
import { Bot, Zap, Link, Layout } from 'lucide-react'

const services = [
  {
    title: 'Agentes de IA para Atendimento',
    description: 'Desenvolvimento de assistentes inteligentes que automatizam o suporte ao cliente, garantindo respostas rápidas e precisas 24/7.',
    icon: <Bot className="w-10 h-10 text-purple-600" />,
  },
  {
    title: 'Automações',
    description: 'Otimização de processos repetitivos para aumentar a produtividade e reduzir erros operacionais no seu negócio.',
    icon: <Zap className="w-10 h-10 text-purple-600" />,
  },
  {
    title: 'Integrações',
    description: 'Conexão fluida entre diferentes sistemas e APIs para que seus dados e ferramentas trabalhem em perfeita harmonia.',
    icon: <Link className="w-10 h-10 text-purple-600" />,
  },
  {
    title: 'Sites e Landing Pages',
    description: 'Criação de interfaces modernas, responsivas e focadas em conversão para destacar sua marca no mundo digital.',
    icon: <Layout className="w-10 h-10 text-purple-600" />,
  },
]

function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="py-20 px-6 bg-background/50" id="serviços">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Meus <span className="text-purple-700">Serviços</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Soluções tecnológicas personalizadas para transformar sua presença digital e otimizar seus resultados.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="p-8 rounded-2xl bg-card border border-border hover:border-purple-600/50 transition-colors shadow-sm hover:shadow-xl hover:shadow-purple-500/10 flex flex-col items-center text-center"
            >
              <div className="mb-6 p-4 rounded-full bg-purple-100 dark:bg-purple-900/20">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
