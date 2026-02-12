'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background/50 backdrop-blur-md border-t border-white/10 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Deepanshu Baghel
            </h3>
            <p className="text-foreground/70">
              Software & Blockchain Developer creating innovative solutions at the intersection of web and decentralized technologies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-foreground/70 hover:text-primary transition-colors">About</a></li>
              <li><a href="#skills" className="text-foreground/70 hover:text-primary transition-colors">Skills</a></li>
              <li><a href="#projects" className="text-foreground/70 hover:text-primary transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-foreground/70 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="https://github.com/deepanshu-baghel" className="p-2 bg-white/10 rounded-lg hover:bg-primary/20 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/deepanshu-baghel" className="p-2 bg-white/10 rounded-lg hover:bg-primary/20 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com/deepanshu_baghel" className="p-2 bg-white/10 rounded-lg hover:bg-primary/20 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="mailto:deepanshu@example.com" className="p-2 bg-white/10 rounded-lg hover:bg-primary/20 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-8 text-center"
        >
          <p className="text-foreground/50">
            © {currentYear} Deepanshu Baghel. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
