import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Teknolojileri",
      skills: ["SQL", "Oracle DB", "PostgreSQL", "PL/SQL", "API Entegrasyonları"],
      icon: "server"
    },
    {
      title: "ERP & Kurumsal Sistemler",
      skills: ["IFS", "Bimser Synergy CSP", "Doküman Yönetimi", "İş Süreçleri", "Veri Migrasyonu"],
      icon: "cogs"
    },
    {
      title: "Web Geliştirme",
      skills: ["HTML5", "CSS", "C", "ASP.NET", "JavaScript"],
      icon: "code"
    },
    {
      title: "Araçlar & Yöntemler",
      skills: ["Veri Analizi", "Raporlama", "Microsoft Office", "Proje Yönetimi", "Sorun Giderme"],
      icon: "tools"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-[#141d30]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Becerilerim</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-slate-300">
            Uzmanlaştığım teknolojiler ve profesyonel yetkinliklerim
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-black/40 backdrop-blur-md border border-gray-800/50 rounded-xl p-6 hover:border-purple-500/30 transition-all duration-300"
              whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(124, 58, 237, 0.1)' }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center border border-purple-500/30">
                  <i className={`fas fa-${category.icon} text-purple-400 text-xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.li
                    key={skillIndex}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 + (skillIndex * 0.1) }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2"
                  >
                    <span className="text-purple-400 text-lg">•</span>
                    <span className="text-slate-300">{skill}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Profesyonel Nitelikler */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-8 text-white">Profesyonel Nitelikler</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { text: "Sistematik düşünme", icon: "brain" },
              { text: "Çözüm odaklı yaklaşım", icon: "lightbulb" },
              { text: "Sürekli öğrenmeye açık", icon: "book-open" },
              { text: "Kurumsal yazılım deneyimi", icon: "building" },
              { text: "Veritabanı uzmanlığı", icon: "database" },
              { text: "Dijital dönüşüm", icon: "sync-alt" }
            ].map((quality, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -3, scale: 1.03 }}
                className="px-4 py-2.5 bg-black/30 backdrop-blur-sm rounded-full flex items-center gap-2 border border-purple-500/20"
              >
                <i className={`fas fa-${quality.icon} text-purple-400`}></i>
                <span className="text-slate-300">{quality.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills 