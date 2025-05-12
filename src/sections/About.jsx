import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20 bg-[#0e1525]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Hakkımda</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-slate-300 mb-6">
            Yönetim bilişim sistemleri mezunu, sistematik düşünebilen, çözüm odaklı ve sürekli öğrenmeye açık bir geliştirici adayıyım.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-black/40 backdrop-blur-md border border-gray-800/50 rounded-lg shadow-lg overflow-hidden p-6 flex justify-center items-center">
              <img 
                src="/assets/logo.png" 
                alt="Bayram ELPE Logo"
                className="max-w-full h-auto max-h-64 object-contain"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/300x300?text=Bayram+ELPE'
                }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 text-white">Backend Developer & ERP Uzmanı</h3>
            <p className="text-slate-300 mb-6">
              Kurumsal projelerde elde ettiğim tecrübelerle kendimi özellikle backend ve veri yönetimi alanında geliştirmeye devam ediyorum. Bimser Synergy CSP ve IFS gibi kurumsal yazılımlarla projelerde deneyim kazandım.
            </p>
            <p className="text-slate-300 mb-8">
              Doküman yönetimi, onay mekanizmaları ve dijital dönüşüm süreçlerinde aktif rol aldım. Veritabanı yönetimi ve SQL konularında uzmanlaşmaya devam etmekteyim.
            </p>
            <div className="flex flex-wrap gap-2">
              {["ERP Sistemleri", "Veritabanı", "SQL", "Doküman Yönetimi", "Backend"].map((tag, index) => (
                <motion.span 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="px-4 py-2 bg-black/30 backdrop-blur-sm rounded-full text-sm text-slate-300 border border-purple-500/20"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 