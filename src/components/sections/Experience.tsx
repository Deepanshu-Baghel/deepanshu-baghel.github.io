'use client'

import { motion } from 'framer-motion'
import Card from '../ui/Card'

const experiences = [
  {
    title: 'Senior Blockchain Developer',
    company: 'TechCorp Inc.',
    period: '2022 - Present',
    description: 'Leading development of DeFi protocols and smart contracts. Implemented cross-chain solutions and improved gas efficiency by 40%.',
  },
  {
    title: 'Full-Stack Developer',
    company: 'WebSolutions Ltd.',
    period: '2020 - 2022',
    description: 'Developed scalable web applications using React and Node.js. Collaborated with design teams to create pixel-perfect UIs.',
  },
  {
    title: 'Junior Developer',
    company: 'StartupXYZ',
    period: '2019 - 2020',
    description: 'Built responsive websites and learned modern development practices. Contributed to open-source projects.',
  },
]

export default function Experience() {
  return (
    <section className="py-20 bg-gradient-to-br from-background to-secondary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            My journey in software development and blockchain technology, building innovative solutions.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <Card>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-semibold text-primary">{exp.title}</h3>
                  <span className="text-secondary font-medium">{exp.period}</span>
                </div>
                <h4 className="text-lg text-accent mb-4">{exp.company}</h4>
                <p className="text-foreground/70">{exp.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
