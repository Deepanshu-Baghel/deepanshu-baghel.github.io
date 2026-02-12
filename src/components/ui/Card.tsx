import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  const baseClasses = 'bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-lg'

  return (
    <motion.div
      className={`${baseClasses} ${className}`}
      whileHover={hover ? { scale: 1.05, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' } : {}}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  )
}
