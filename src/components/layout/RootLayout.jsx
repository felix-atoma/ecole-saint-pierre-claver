import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Header from '../Header'
import Footer from '../Footer'
import AnimatedBackground from '../AnimatedBackground'
import SEO from '../SEO'
import Home from '../../pages/Home'
import About from '../../pages/About'
import Academics from '../../pages/Academics'
import Admissions from '../../pages/Admissions'
import Campus from '../../pages/Campus'
import Leadership from '../../pages/Leadership'
import Alumni from '../../pages/Alumni'
import Contact from '../../pages/Contact'
import News from '../../pages/News'
import Events from '../../pages/Events'
import Gallery from '../../pages/Gallery'
import Faith from '../../pages/Faith'
import Faculty from '../../pages/Faculty'
import Apply from '../../pages/Apply'
import LanguageCourses from '../../pages/LanguageCourses'
import Portal from '../../pages/Portal'
import ParentsPortal from '../../pages/ParentsPortal' // Add this import

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 }
}

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5
}

const RootLayout = () => {
  const location = useLocation()

  return (
    <div className="min-h-screen flex flex-col relative">
      <SEO />
      <AnimatedBackground />
      <Header />
      <main className="flex-grow relative z-10">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Home />
              </motion.div>
            } />
            <Route path="/about" element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <About />
              </motion.div>
            } />
            <Route path="/academics" element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Academics />
              </motion.div>
            } />
            <Route path="/admissions" element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Admissions />
              </motion.div>
            } />
            <Route path="/campus" element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Campus />
              </motion.div>
            } />
            <Route path="/leadership" element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Leadership />
              </motion.div>
            } />
            <Route path="/alumni" element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Alumni />
              </motion.div>
            } />
            <Route path="/contact" element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Contact />
              </motion.div>
            } />
            <Route path="/news" element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <News />
              </motion.div>
            } />
            <Route path="/events" element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Events />
              </motion.div>
            } />
            <Route path="/gallery" element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Gallery />
              </motion.div>
            } />
            <Route path="/faith" element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Faith />
              </motion.div>
            } />
            <Route path="/faculty" element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Faculty />
              </motion.div>
            } />
            <Route path="/apply" element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Apply />
              </motion.div>
            } />
            <Route path="/language-courses" element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <LanguageCourses />
              </motion.div>
            } />
            {/* Portal Route */}
            <Route path="/portal" element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Portal />
              </motion.div>
            } />
            {/* Parents Portal Route - ADD THIS */}
            <Route path="/parents-portal" element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <ParentsPortal />
              </motion.div>
            } />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}

export default RootLayout