import { motion } from 'framer-motion'

const Hero = () => {
  const socialLinks = [
    { icon: "fa-linkedin-in", url: "https://linkedin.com/" },
    { icon: "fa-github", url: "https://github.com/" },
    { icon: "fa-twitter", url: "https://twitter.com/" },
    { icon: "fa-envelope", url: "mailto:bayram.elpe@mail.com" }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#0a0f1c] to-[#141d30]">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-soft-light filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-40 right-10 w-80 h-80 bg-pink-600 rounded-full mix-blend-soft-light filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/2 w-96 h-96 bg-purple-900 rounded-full mix-blend-soft-light filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 text-center md:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block px-4 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 font-medium mb-8"
            >
              <span>Backend Developer</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Merhaba, Ben<br/>
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Bayram ELPE</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-lg text-slate-300 mb-10 max-w-lg mx-auto md:mx-0"
            >
              Yönetim bilişim sistemleri mezunu, kurumsal yazılımlar ve veritabanı yönetimi konusunda deneyimli bir geliştirici.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex flex-wrap gap-4 justify-center md:justify-start"
            >
             
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="flex gap-5 mt-10 justify-center md:justify-start"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-gray-800/50 flex items-center justify-center text-white hover:border-purple-500/50 hover:text-purple-400 transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <i className={`${link.icon.startsWith('fa-envelope') ? 'fas' : 'fab'} ${link.icon}`}></i>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Right Content - Profile Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 flex justify-center md:justify-end"
          >
            <div className="relative">
              {/* Background Rings */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-5 border-2 border-dashed border-purple-500/20 rounded-full"
              ></motion.div>
              
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-16 border-2 border-dashed border-purple-500/10 rounded-full"
              ></motion.div>
              
              {/* Profile Image */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="relative w-72 h-72 md:w-96 md:h-96 rounded-full bg-black/40 backdrop-blur-md border-4 border-gray-800/50 shadow-2xl flex items-center justify-center overflow-hidden"
              >
                <img 
                  src="/assets/.png" 
                  alt="Bayram ELPE" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x400?text=Bayram+ELPE'
                  }}
                />
              </motion.div>

              
              {/* Experience Badge */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -top-4 -right-4 md:top-10 md:-right-10 bg-black/60 backdrop-blur-md border border-purple-500/30 rounded-full p-4 shadow-lg"
              >
                <div className="w-20 h-20 rounded-full flex flex-col items-center justify-center">
                  <span className="text-2xl font-bold text-purple-400">2+</span>
                  <span className="text-xs text-slate-300">Yıl</span>
                </div>
              </motion.div>
              
              {/* ERP Badge */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute -bottom-8 -left-8 md:-bottom-5 md:-left-14 bg-black/60 backdrop-blur-md border border-purple-500/30 px-5 py-3 rounded-lg shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <i className="fas fa-cogs text-purple-400 text-xl"></i>
                  <span className="font-medium text-white whitespace-nowrap">ERP & Kurumsal Sistemler</span>
                </div>
              </motion.div>
              
              {/* SQL Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.5 }}
                className="absolute -bottom-10 right-0 md:-bottom-10 md:right-5 bg-black/60 backdrop-blur-md border border-purple-500/30 px-4 py-2 rounded-lg shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <i className="fas fa-database text-purple-400 text-lg"></i>
                  <span className="font-medium text-white">SQL & Oracle</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.a 
          href="#about"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="flex flex-col items-center text-slate-400 hover:text-purple-400 transition-colors"
        >
          <span className="text-sm mb-2">Aşağı Kaydır</span>
          <motion.div 
            animate={{ y: [0, 5, 0] }} 
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <i className="fas fa-chevron-down text-xl"></i>
          </motion.div>
        </motion.a>
      </div>
    </section>
  )
}

export default Hero 