import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const navLinks = [
    { to: 'home', text: 'Ana Sayfa' },
    { to: 'about', text: 'Hakkımda' },
    { to: 'skills', text: 'Yetenekler' },
    { to: 'experience', text: 'Deneyim' },
    { to: 'contact', text: 'İletişim' }
  ]
  
  // Sayfa kaydırıldığında navbar'ın stilini değiştir
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
      
      // Aktif bölümü belirle
      const sections = navLinks.map(link => link.to);
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [navLinks])

  return (
    <header className={`py-4 sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-black/70 backdrop-blur-xl shadow-lg border-b border-gray-800/50' 
        : 'bg-transparent'
    }`}>
      <div className="container flex justify-between items-center">
        <motion.a 
          href="#home" 
          className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Bayram ELPE
        </motion.a>
        
        {/* Mobil Menü Toggle */}
        <motion.button 
          className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-black/60 border border-gray-800 text-gray-200 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onClick={toggleMenu}
          whileHover={{ borderColor: '#a855f7' }}
          whileTap={{ scale: 0.9 }}
        >
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-lg`}></i>
        </motion.button>
        
        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link, index) => (
            <motion.a 
              key={link.to} 
              href={`#${link.to}`} 
              className={`nav-link relative font-medium text-sm uppercase tracking-widest hover:text-purple-400 transition-colors ${
                activeSection === link.to ? 'text-purple-400' : 'text-gray-300'
              }`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              whileHover={{ y: -2 }}
            >
              {link.text}
              {activeSection === link.to && (
                <motion.span 
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                  layoutId="navIndicator"
                ></motion.span>
              )}
            </motion.a>
          ))}
        </nav>
        
        {/* Mobil Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="fixed top-20 right-4 z-40 lg:hidden"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="bg-black/75 backdrop-blur-md border border-gray-800/50 rounded-2xl p-5 shadow-xl w-64"
              >
                <nav className="flex flex-col">
                  {navLinks.map((link, index) => (
                    <motion.a 
                      key={link.to} 
                      href={`#${link.to}`} 
                      className={`py-3 px-4 rounded-lg text-base font-medium ${
                        activeSection === link.to 
                          ? 'text-purple-400 bg-purple-500/10' 
                          : 'text-gray-300 hover:bg-gray-800/50'
                      } transition-colors`}
                      onClick={() => setIsOpen(false)}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      {link.text}
                    </motion.a>
                  ))}
                </nav>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

export default Navbar 