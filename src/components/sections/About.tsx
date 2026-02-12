'use client'

import { motion } from 'framer-motion'
import Card from '../ui/Card'

export default function About() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Passionate about technology and innovation, I specialize in creating cutting-edge web applications
            and blockchain solutions that push the boundaries of what's possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card>
              <h3 className="text-xl font-semibold mb-4 text-primary">Full-Stack Development</h3>
              <p className="text-foreground/70">
                Building robust web applications using modern frameworks like React, Next.js, and Node.js.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card>
              <h3 className="text-xl font-semibold mb-4 text-secondary">Blockchain Expertise</h3>
              <p className="text-foreground/70">
                Developing decentralized applications and smart contracts on Ethereum and other blockchains.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card>
              <h3 className="text-xl font-semibold mb-4 text-accent">3D & Interactive Design</h3>
              <p className="text-foreground/70">
                Creating immersive user experiences with Three.js, WebGL, and advanced animations.
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
