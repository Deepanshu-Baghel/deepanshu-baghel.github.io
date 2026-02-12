'use client'

import { motion } from 'framer-motion'
import Card from '../ui/Card'
import Button from '../ui/Button'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'Decentralized Exchange',
    description: 'A fully functional DEX built on Ethereum with automated market making and liquidity pools.',
    tech: ['Solidity', 'React', 'Web3.js', 'Hardhat'],
    github: 'https://github.com/deepanshu-baghel/dex',
    demo: 'https://dex-demo.vercel.app',
  },
  {
    title: 'NFT Marketplace',
    description: 'A marketplace for trading NFTs with auction functionality and royalty management.',
    tech: ['Next.js', 'IPFS', 'OpenSea API', 'Tailwind CSS'],
    github: 'https://github.com/deepanshu-baghel/nft-marketplace',
    demo: 'https://nft-marketplace-demo.vercel.app',
  },
  {
    title: '3D Portfolio Website',
    description: 'An interactive 3D portfolio showcasing projects with immersive animations.',
    tech: ['Three.js', 'React', 'Framer Motion', 'TypeScript'],
    github: 'https://github.com/deepanshu-baghel/3d-portfolio',
    demo: 'https://3d-portfolio-demo.vercel.app',
  },
]

export default function Projects() {
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
            Featured Projects
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            A showcase of my recent work, combining cutting-edge technologies to solve real-world problems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <h3 className="text-xl font-semibold mb-4 text-primary">{project.title}</h3>
                <p className="text-foreground/70 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button variant="secondary" size="sm" className="flex items-center gap-2">
                    <Github size={16} />
                    Code
                  </Button>
                  <Button variant="accent" size="sm" className="flex items-center gap-2">
                    <ExternalLink size={16} />
                    Demo
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
