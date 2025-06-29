"use client"

import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSwitcher } from "@/components/language-switcher"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  return (
    <main ref={containerRef} className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <ThemeToggle />
      <LanguageSwitcher />
      
      {/* Hero Section - Page 01 */}
      <motion.section 
        style={{
          opacity: useTransform(scrollYProgress, [0, 0.25], [1, 0]),
          y: useTransform(scrollYProgress, [0, 0.25], [0, -100])
        }}
        className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-800 via-blue-900 to-purple-900"
      >
        {/* Background geometric elements */}
        <div className="absolute inset-0">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-10 left-10 w-96 h-96 border-2 border-orange-500/30 rounded-full"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 left-20 w-80 h-80 border border-white/20 rounded-full"
          />
          
          {/* Diagonal lines */}
          <div className="absolute top-0 left-0 w-full h-full">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute top-1/4 left-1/4 h-0.5 bg-orange-500/50 rotate-45"
            />
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
              className="absolute top-1/2 right-1/4 h-0.5 bg-white/30 -rotate-12"
            />
          </div>
        </div>
        
        {/* Large section number */}
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 0.8, x: 0 }}
          transition={{ duration: 1 }}
          className="absolute top-16 left-16 text-[12rem] font-bold text-white/80 leading-none"
        >
          01
        </motion.div>
        
        {/* Main content area */}
        <div className="relative z-10 max-w-6xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-6xl font-bold text-white mb-6">MEPHISTO</h1>
            <p className="text-lg text-white/90 leading-relaxed">
              Welcome to my portfolio! I'm NA ARTA, a professional in web, art and
              programming. Here you can find my best work, latest projects and useful
              tutorials.
            </p>
            
            {/* Action buttons */}
            <div className="flex gap-4 mt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded transition-colors"
              >
                WEB DEV
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded transition-colors"
              >
                ILLUSTRATOR
              </motion.button>
            </div>
          </motion.div>
          
          {/* Right side - Visual elements */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="w-full h-96 bg-gradient-to-br from-red-500/20 to-purple-500/20 rounded-lg border border-white/10 flex items-center justify-center">
              <span className="text-white/50 text-lg">Character Image</span>
            </div>
          </motion.div>
        </div>
        
        {/* Year indicator */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute bottom-20 left-16 text-white"
        >
          <div className="text-2xl font-bold">2023</div>
          <div className="w-16 h-1 bg-orange-500 mt-2"></div>
          <div className="mt-4 flex space-x-1">
            {Array.from({length: 8}).map((_, i) => (
              <motion.div 
                key={i}
                initial={{ height: 0 }}
                animate={{ height: "2rem" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="w-2 bg-white/30 transform rotate-45"
              />
            ))}
          </div>
        </motion.div>
        
        {/* Page indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute bottom-20 right-20 text-white"
        >
          <div className="text-sm">1-1</div>
          <div className="w-8 h-0.5 bg-orange-500 mt-2"></div>
        </motion.div>
        
        {/* Footer */}
        <div className="absolute bottom-4 right-4 text-white/70 text-sm">
          NA ARTA - 2024
        </div>
        
        {/* Orange accent square */}
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute top-8 right-8 w-4 h-4 bg-orange-500"
        />
      </motion.section>

      {/* About Section */}
      <motion.section 
        style={{
          opacity: useTransform(scrollYProgress, [0.25, 0.5], [0, 1]),
          y: useTransform(scrollYProgress, [0.25, 0.5], [100, 0])
        }}
        className="min-h-screen py-20 relative"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <motion.h1 
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 0.2 }}
                transition={{ duration: 0.8 }}
                className="text-9xl font-bold"
              >
                02
              </motion.h1>
              <div className="mt-8 space-y-4">
                <p className="text-lg">
                  Throughout my career, I've engaged in numerous projects that span various
                  domains, from web development to application programming. I've developed
                  intricate website projects that leverage the latest in CSS and JavaScript
                  animations, creating visually stunning and interactive user experiences.
                </p>
              </div>
            </div>
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-orange-500/20 to-purple-500/20 rounded-lg" />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Gallery Section */}
      <motion.section 
        style={{
          opacity: useTransform(scrollYProgress, [0.5, 0.75], [0, 1]),
          y: useTransform(scrollYProgress, [0.5, 0.75], [100, 0])
        }}
        className="min-h-screen py-20 relative"
      >
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 0.2 }}
            transition={{ duration: 0.8 }}
            className="text-9xl font-bold"
          >
            03
          </motion.h1>
          <h2 className="text-4xl font-bold mt-8 mb-12">GALLERY</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {['MINI GAME', 'LOGIC GATE', 'ILLUST', 'CODES', 'PENTEST'].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group relative aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden hover:bg-orange-500/10 transition-colors"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-xl font-bold group-hover:text-orange-500 transition-colors">{item}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        style={{
          opacity: useTransform(scrollYProgress, [0.75, 1], [0, 1]),
          y: useTransform(scrollYProgress, [0.75, 1], [100, 0])
        }}
        className="min-h-screen py-20 relative"
      >
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 0.2 }}
            transition={{ duration: 0.8 }}
            className="text-9xl font-bold"
          >
            04
          </motion.h1>
          <div className="mt-12 space-y-8">
            {[
              {
                title: "Web Development and Animations",
                desc: "HTML | CSS | JavaScript | TypeScript | React | Next.js | Angular | Vue.js | Tailwind | Framer Motion | UI/UX"
              },
              {
                title: "Application Development",
                desc: "Full-stack development with modern frameworks and technologies"
              },
              {
                title: "UI/UX Design",
                desc: "Creating intuitive and visually appealing user interfaces"
              }
            ].map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg hover:from-gray-700 hover:to-gray-800 transition-colors"
              >
                <h3 className="text-xl font-bold mb-4">{skill.title}</h3>
                <p className="text-sm opacity-80">{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </main>
  )
}
