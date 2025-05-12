import { useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import { motion } from 'framer-motion'

const Projects = () => {
  const [filter, setFilter] = useState('all')
  
  const projects = [
    {
      id: 1,
      title: 'ERP Entegrasyon Projesi',
      description: 'Şirket içi ERP sisteminin veritabanı yönetimi ve optimizasyonu ile ilgili bir projedir.',
      image: '/assets/projects/erp-project.jpg',
      categories: ['Veritabanı', 'ERP'],
      technologies: ['SQL', 'Oracle', 'IFS'],
      codeLink: '',
      demoLink: '',
    },
    {
      id: 2,
      title: 'Doküman Yönetim Sistemi',
      description: 'Kurumsal dokümanların dijital ortamda yönetilmesi ve onay mekanizmalarının oluşturulması.',
      image: '/assets/projects/document-system.jpg',
      categories: ['Doküman Yönetimi', 'Web'],
      technologies: ['HTML', 'CSS', 'SQL', 'Bimser CSP'],
      codeLink: '',
      demoLink: '',
    },
    {
      id: 3,
      title: 'Raporlama Otomasyonu',
      description: 'İş süreçlerinin otomatik raporlanması ve analitik dashboard geliştirme projesi.',
      image: '/assets/projects/reporting-automation.jpg',
      categories: ['Raporlama', 'Analiz'],
      technologies: ['SQL', 'Microsoft Office', 'Excel VBA'],
      codeLink: 'https://github.com/bayramelpe/reporting-automation',
      demoLink: '',
    },
    {
      id: 4,
      title: 'Veri Tabanı Performans İyileştirme',
      description: 'Mevcut veritabanı yapısının performans optimizasyonu ve sorgu iyileştirmeleri.',
      image: '/assets/projects/database-performance.jpg',
      categories: ['Veritabanı', 'Performans'],
      technologies: ['SQL', 'PL/SQL', 'Oracle'],
      codeLink: 'https://github.com/bayramelpe/sql-optimization',
      demoLink: '',
    },
    {
      id: 5,
      title: 'Üretim Takip Uygulaması',
      description: 'Üretim hatlarındaki verilerin toplanması ve analizi için geliştirilen uygulama.',
      image: '/assets/projects/production-tracking.jpg',
      categories: ['ERP', 'Web'],
      technologies: ['IFS', 'SQL', 'HTML', 'CSS'],
      codeLink: '',
      demoLink: '',
    },
    {
      id: 6,
      title: 'C Programlama Egzersizleri',
      description: 'C dilinde geliştirdiğim temel algoritmalar ve veri yapıları çalışmaları.',
      image: '/assets/projects/c-programming.jpg',
      categories: ['Programlama'],
      technologies: ['C'],
      codeLink: 'https://github.com/bayramelpe/c-exercises',
      demoLink: '',
    },
  ]
  
  const filterCategories = ['all', 'Veritabanı', 'ERP', 'Doküman Yönetimi', 'Web', 'Raporlama', 'Performans', 'Programlama']
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.categories.includes(filter))

  return (
    <section className="section">
      <div className="container">
        <motion.h1 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Projeler
        </motion.h1>
        
        <p className="text-center max-w-3xl mx-auto mb-16">
          Kurumsal yazılım geliştirme ve veritabanı yönetimi alanlarında çalıştığım bazı projeler.
          Bu projeler, teknik becerilerimi ve çözüm odaklı yaklaşımımı göstermektedir.
        </p>
        
        {/* Filtreleme */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {filterCategories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === category 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category === 'all' ? 'Tümü' : category}
            </button>
          ))}
        </div>
        
        {/* Proje Listesi */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-xl font-bold mb-4">Bu kategoride proje bulunamadı</h3>
            <p>Lütfen başka bir kategori seçin veya tüm projeleri görüntüleyin.</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects 