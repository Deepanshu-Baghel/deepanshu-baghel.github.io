'use client'

import { motion } from 'framer-motion'
import Button from '../ui/Button'
import HeroScene from '../canvas/HeroScene'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10"></div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Deepanshu Baghel
            </h1>
            <h2 className="text-2xl lg:text-3xl text-foreground/80 mb-8">
              Software & Blockchain Developer
            </h2>
            <p className="text-lg text-foreground/70 mb-8 max-w-2xl">
              Crafting innovative solutions at the intersection of web development and blockchain technology.
              Passionate about creating immersive user experiences and decentralized applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="primary" size="lg">
                View My Work
              </Button>
              <Button variant="secondary" size="lg">
                Get In Touch
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-96 lg:h-[500px]"
          >
            <HeroScene />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
