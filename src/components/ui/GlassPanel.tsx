import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface GlassPanelProps {
  children: ReactNode
  className?: string
}

export default function GlassPanel({ children, className = '' }: GlassPanelProps) {
  return (
    <motion.div
      className={`bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-2xl ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  )
}
