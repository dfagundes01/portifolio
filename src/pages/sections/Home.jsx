import { motion } from 'framer-motion'
import Background from '../../imgs/others/background.jpg'

function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: 'easeOut',
      },
    },
    floating: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <section
      className="flex h-screen items-center justify-center overflow-hidden px-6"
      id="início"
    >
      <motion.div
        className="flex flex-col items-center gap-12 md:flex-row md:gap-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <motion.h1
            className="text-4xl font-extrabold tracking-tight md:text-7xl"
            variants={itemVariants}
          >
            Desenvolvedor <span className="text-purple-700">Web</span>
          </motion.h1>

          <motion.div
            className="mt-6 max-w-lg border-l-4 border-purple-600 pl-4"
            variants={itemVariants}
          >
            <p className="text-lg leading-relaxed text-muted-foreground md:text-2xl">
              Explorando o desconhecido, entregando o excepcional. Tecendo
              linhas de código para formar obras-primas digitais.
            </p>
          </motion.div>

          <motion.div className="mt-10 flex gap-4" variants={itemVariants}>
            <a
              href="#projetos"
              className="rounded-full bg-purple-700 px-8 py-3 font-medium text-white transition-transform hover:scale-105 active:scale-95"
            >
              Ver Projetos
            </a>
            <a
              href="#contato"
              className="rounded-full border-2 border-purple-700 px-8 py-3 font-medium text-purple-700 transition-colors hover:bg-purple-700 hover:text-white"
            >
              Contato
            </a>
          </motion.div>
        </div>

        <motion.div
          className="relative"
          variants={imageVariants}
          animate="floating"
        >
          <div className="absolute -inset-4 rounded-full bg-purple-500/20 blur-3xl" />
          <img
            className="relative h-48 w-48 rounded-2xl object-cover shadow-2xl md:h-80 md:w-80"
            src={Background}
            alt="img-background"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Home
