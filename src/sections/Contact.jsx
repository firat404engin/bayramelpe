import { motion } from 'framer-motion'

const Contact = () => {
  const socialLinks = [
    { 
      name: "LinkedIn", 
      icon: "linkedin-in", 
      url: "https://linkedin.com/", 
      color: "#0a66c2",
      description: "Profesyonel bağlantılar ve CV"
    },
    { 
      name: "GitHub", 
      icon: "github", 
      url: "https://github.com/", 
      color: "#6e40c9",
      description: "Projeler ve kod örnekleri"
    },
    { 
      name: "Twitter", 
      icon: "twitter", 
      url: "https://twitter.com/", 
      color: "#1da1f2",
      description: "Güncel paylaşımlar"
    },
    { 
      name: "E-posta", 
      icon: "envelope", 
      url: "mailto:bayram.elpe@mail.com", 
      color: "#ea4335",
      description: "İş teklifleri ve işbirlikleri"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-[#141d30]">
      <div className="container max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">İletişim</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Aşağıdaki kanallardan benimle iletişime geçebilirsiniz
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-black/40 backdrop-blur-md border border-gray-800/50 rounded-xl p-6 flex justify-center items-center"
          >
            <img 
              src="/assets/logo.png" 
              alt="Bayram ELPE Logo" 
              className="max-w-full h-auto max-h-64 object-contain"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/300x300?text=Bayram+ELPE'
              }}
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-black/40 backdrop-blur-md border border-gray-800/50 rounded-xl p-6"
          >
            <h3 className="text-xl font-bold text-white mb-4">Backend & ERP Projeleriniz İçin</h3>
            <p className="text-slate-300 mb-6">
              Veritabanı yönetimi, ERP sistemleri ya da backend geliştirme konularında destek almak için hemen iletişime geçin.
            </p>
            <a 
              href="mailto:bayram.elpe@mail.com" 
              className="inline-block py-3 px-6 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105"
            >
              E-posta Gönder
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, borderColor: social.color }}
              className="bg-black/40 backdrop-blur-md border border-gray-800/50 p-4 rounded-xl flex flex-col items-center justify-center text-center gap-2 transition-all duration-300 hover:shadow-[0_0_15px_rgba(124,58,237,0.15)]"
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center" 
                style={{ backgroundColor: `${social.color}20`, color: social.color }}>
                <i className={`${social.icon === 'envelope' ? 'fas fa-envelope' : `fab fa-${social.icon}`} text-lg`}></i>
              </div>
              <div>
                <h3 className="text-base font-bold text-white">{social.name}</h3>
                <p className="text-slate-400 text-xs">{social.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact 