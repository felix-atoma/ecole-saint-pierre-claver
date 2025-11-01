import React from 'react'
import CountUp from 'react-countup'
import { motion } from 'framer-motion'

const AnimatedCounter = ({ 
  end, 
  duration = 2.5, 
  prefix = "", 
  suffix = "", 
  className = "",
  delay = 0 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className={className}
    >
      <CountUp
        end={end}
        duration={duration}
        prefix={prefix}
        suffix={suffix}
        enableScrollSpy
        scrollSpyDelay={delay}
        scrollSpyOnce
      />
    </motion.div>
  )
}

export default AnimatedCounter