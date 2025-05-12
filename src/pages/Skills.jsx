import { motion } from 'framer-motion'

const Skills = () => {
  const skills = [
    { 
      category: 'Web Teknolojileri', 
      items: [
        { name: 'HTML5', level: 70 },
        { name: 'CSS', level: 65 }
      ] 
    },
    { 
      category: 'Veritabanı', 
      items: [
        { name: 'SQL', level: 85 },
        { name: 'PL/SQL', level: 80 },
        { name: 'Oracle DB', level: 75 }
      ] 
    },
    { 
      category: 'ERP & CRM Sistemleri', 
      items: [
        { name: 'IFS', level: 80 },
        { name: 'Bimser Synergy CSP', level: 85 }
      ] 
    },
    { 
      category: 'Programlama', 
      items: [
        { name: 'C', level: 60 }
      ] 
    },
    { 
      category: 'Ofis Uygulamaları', 
      items: [
        { name: 'Microsoft Office', level: 90 }
      ] 
    },
    { 
      category: 'Yazılım Süreçleri', 
      items: [
        { name: 'Raporlama ve Analiz', level: 85 },
        { name: 'Yazılım Testi', level: 75 }
      ] 
    }
  ]

  return (
    <section className="section">
      <div className="container">
        <motion.h1 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Yetenekler
        </motion.h1>
        
        <p className="text-center max-w-3xl mx-auto mb-16">
          Kurumsal yazılım geliştirme süreçlerinde edindiğim teknik becerileri sürekli geliştirmeye çalışıyorum. 
          Özellikle veritabanı yönetimi ve ERP sistemleri konusunda uzmanlaşmaya devam ediyorum.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold mb-6 text-primary">{skillGroup.category}</h3>
              
              <div className="space-y-6">
                {skillGroup.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full bg-primary rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Eğitim ve Sertifikalar */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold mb-10 text-center">Eğitim & Sertifikalar</h2>
          
          <div className="max-w-3xl mx-auto space-y-8">
            <motion.div 
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold">Yönetim Bilişim Sistemleri</h3>
                  <p className="text-gray-600 dark:text-gray-400">Lisans Derecesi</p>
                </div>
                <div className="bg-primary text-white px-4 py-1 rounded-full text-sm">
                  2018-2022
                </div>
              </div>
              <p className="mt-4">
                Kurumsal bilgi sistemleri, veritabanı yönetimi, veri analizi ve yazılım geliştirme süreçleri konularında eğitim aldım.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold">Oracle Database Administration</h3>
                  <p className="text-gray-600 dark:text-gray-400">Sertifika</p>
                </div>
                <div className="bg-primary text-white px-4 py-1 rounded-full text-sm">
                  2023
                </div>
              </div>
              <p className="mt-4">
                Oracle veritabanı yönetimi, performans optimizasyonu ve güvenlik konularında temel ve ileri seviye bilgiler.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold">IFS ERP Specialist</h3>
                  <p className="text-gray-600 dark:text-gray-400">Sertifika</p>
                </div>
                <div className="bg-primary text-white px-4 py-1 rounded-full text-sm">
                  2024
                </div>
              </div>
              <p className="mt-4">
                IFS ERP sisteminin kurulumu, yönetimi ve özelleştirilmesi konularında uzmanlaşma eğitimi.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills 