import { motion } from 'framer-motion'

const Experience = () => {
  const experiences = [
    {
      title: "Software Specialist",
      company: "Seranit",
      period: "Temmuz 2024 - Halen",
      location: "İstanbul",
      description: "Backend geliştirme, veritabanı yönetimi ve kurumsal yazılım desteği sağlayan bir uzman olarak çalışıyorum.",
      skills: ["Veritabanı", "API", "ERP Yönetimi"]
    },
    {
      title: "Assistant Software Specialist",
      company: "Seranit",
      period: "Kasım 2022 - Temmuz 2024",
      location: "İstanbul",
      description: "Yazılım testleri ve hata ayıklama, veri analizi ve kullanıcı eğitimlerinden sorumlu olarak görev aldım.",
      skills: ["Test", "Veri Analizi", "Eğitim"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-[#0e1525]">
      <div className="container max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Deneyim</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6 rounded-full"></div>
        </motion.div>

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hidden md:block"></div>
              
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-2 top-4 w-[1px] h-[calc(100%+2.5rem)] bg-gradient-to-b from-purple-500 to-transparent hidden md:block"></div>
              )}
              
              {/* Content */}
              <div className="md:pl-10">
                <div className="bg-black/40 backdrop-blur-md border border-gray-800/50 rounded-xl p-6 hover:border-purple-500/30 transition-all duration-300">
                  <div className="flex flex-wrap gap-4 mb-3">
                    <span className="inline-block px-3 py-1 text-xs tracking-wide font-medium bg-purple-500/10 border border-purple-500/20 text-purple-400 rounded-full">
                      {exp.period}
                    </span>
                    <span className="inline-block px-3 py-1 text-xs tracking-wide font-medium bg-black/60 text-gray-400 rounded-full">
                      {exp.location}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                  <p className="text-purple-400 font-medium mb-3">{exp.company}</p>
                  
                  <p className="text-slate-300 mb-4">{exp.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 * i }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-1 px-3 py-1 bg-black/60 border border-gray-800 rounded-full text-sm text-gray-400"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience 