import { motion } from 'framer-motion'
import { useState } from 'react'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Kurumsal Doküman Yönetim Sistemi",
      description: "Şirket içi belge onay süreçlerini dijitalleştiren ve optimize eden bir doküman yönetim sistemi uygulaması.",
      image: "https://via.placeholder.com/600x400?text=Doküman+Yönetim+Sistemi",
      tags: ["ERP", "Veritabanı", "Doküman Yönetimi"],
      category: "ERP"
    },
    {
      id: 2,
      title: "SQL Veri Analiz Aracı",
      description: "Karmaşık SQL sorgularını otomatikleştiren ve iş süreçlerine yönelik veri analizlerini kolaylaştıran bir araç.",
      image: "https://via.placeholder.com/600x400?text=SQL+Veri+Analiz+Aracı",
      tags: ["SQL", "Veritabanı", "Analiz"],
      category: "Veritabanı"
    },
    {
      id: 3,
      title: "IFS Entegrasyon Modülü",
      description: "IFS ERP sistemi ile diğer kurumsal uygulamalar arasında veri akışını sağlayan entegrasyon modülü.",
      image: "https://via.placeholder.com/600x400?text=IFS+Entegrasyon",
      tags: ["ERP", "IFS", "Entegrasyon"],
      category: "ERP"
    },
    {
      id: 4,
      title: "Otomatik Raporlama Sistemi",
      description: "Veritabanındaki verileri analiz ederek otomatik raporlar oluşturan ve e-posta ile dağıtan bir sistem.",
      image: "https://via.placeholder.com/600x400?text=Raporlama+Sistemi",
      tags: ["SQL", "Raporlama", "Otomasyon"],
      category: "Veritabanı"
    }
  ];
  
  const categories = ["Tümü", "ERP", "Veritabanı", "Web"];
  const [activeCategory, setActiveCategory] = useState("Tümü");
  
  const filteredProjects = activeCategory === "Tümü" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Projelerim</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300">
            Geliştirdiğim ve katkıda bulunduğum bazı önemli projeler
          </p>
        </motion.div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={index}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 
                ${activeCategory === category 
                  ? "bg-primary text-white shadow-md" 
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
            >
              {category}
            </motion.button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-52 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {project.description}
                </p>
                
                <div className="flex justify-between items-center">
                  <a 
                    href="#" 
                    className="text-primary font-medium hover:underline flex items-center gap-1"
                    onClick={(e) => e.preventDefault()}
                  >
                    Detayları Gör
                    <i className="fas fa-arrow-right text-sm"></i>
                  </a>
                  
                  <div className="flex gap-3">
                    <a 
                      href="#" 
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                    <a 
                      href="#" 
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-primary text-white p-10 rounded-2xl text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Projelerde Birlikte Çalışalım</h3>
          <p className="text-primary-light mb-8 max-w-2xl mx-auto">
            Backend geliştirme, veritabanı yönetimi veya ERP entegrasyonu projelerinizde profesyonel çözümler sunabilirim.
          </p>
          <a 
            href="#contact" 
            className="inline-block px-8 py-4 bg-white text-primary font-bold rounded-lg transition-all duration-300 hover:bg-gray-100 hover:shadow-lg"
          >
            İletişime Geç <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 