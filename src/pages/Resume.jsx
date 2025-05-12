import { motion } from 'framer-motion'

const Resume = () => {
  return (
    <section className="section">
      <div className="container">
        <motion.h1 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Özgeçmiş
        </motion.h1>
        
        <div className="text-center mb-12">
          <p className="max-w-3xl mx-auto mb-8">
            Aşağıda profesyonel deneyimim ve eğitim geçmişim hakkında detaylı bilgileri bulabilirsiniz. 
            Tam özgeçmişimi indirmek için aşağıdaki butonu kullanabilirsiniz.
          </p>
          
          <a 
            href="/assets/Bayram_ELPE_CV.pdf" 
            download
            className="btn-primary inline-flex items-center gap-2"
          >
            <i className="fas fa-download"></i>
            <span>CV'mi İndir</span>
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Deneyim */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <i className="fas fa-briefcase text-primary"></i>
              <span>Profesyonel Deneyim</span>
            </h2>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:h-full before:w-0.5 before:bg-gray-200 dark:before:bg-gray-700 before:left-4 ml-4 pl-8">
              <div className="relative">
                <div className="absolute -left-12 top-1 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center">
                  <i className="fas fa-briefcase"></i>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <div className="flex justify-between flex-wrap gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold">Software Specialist</h3>
                      <p className="text-primary font-medium">Seranit</p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-700 px-4 py-1 rounded-full text-sm">
                      Temmuz 2024 - Halen
                    </div>
                  </div>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Şirketin yazılım geliştirme süreçlerine aktif katılım sağladım ve kurumsal yazılım projelerinde yer aldım.</li>
                    <li>Yazılım geliştirme süreçlerini hızlandırmak ve optimize etmek için yenilikçi çözümler sundum.</li>
                    <li>İç ve dış kullanıcılar için yazılım desteği sağlayarak, sorun çözme ve müşteri memnuniyetini artırdım.</li>
                    <li>Veritabanı yönetimi ve performans iyileştirme konularında destek verdim.</li>
                  </ul>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -left-12 top-1 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center">
                  <i className="fas fa-briefcase"></i>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <div className="flex justify-between flex-wrap gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold">Assistant Software Specialist</h3>
                      <p className="text-primary font-medium">Seranit</p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-700 px-4 py-1 rounded-full text-sm">
                      Kasım 2022 - Temmuz 2024
                    </div>
                  </div>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Yazılım projelerinin başından sonuna kadar destek vererek, geliştirme sürecini hızlandırdım.</li>
                    <li>Kod inceleme, hata ayıklama ve yazılım testlerini gerçekleştirdim.</li>
                    <li>İçerik ve veri yönetimi süreçlerinde iyileştirmeler yaparak, veritabanı performansını arttırdım.</li>
                    <li>Kullanıcı geri bildirimlerini analiz ederek, yazılım iyileştirmeleri ve özellik güncellemeleri önerdim.</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Eğitim ve Sertifikalar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <i className="fas fa-graduation-cap text-primary"></i>
              <span>Eğitim & Sertifikalar</span>
            </h2>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:h-full before:w-0.5 before:bg-gray-200 dark:before:bg-gray-700 before:left-4 ml-4 pl-8">
              <div className="relative">
                <div className="absolute -left-12 top-1 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center">
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <div className="flex justify-between flex-wrap gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold">Yönetim Bilişim Sistemleri</h3>
                      <p className="text-primary font-medium">Lisans Derecesi</p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-700 px-4 py-1 rounded-full text-sm">
                      2018 - 2022
                    </div>
                  </div>
                  <p>
                    Kurumsal bilgi sistemleri, veritabanı yönetimi, veri analizi ve yazılım geliştirme süreçleri konularında eğitim aldım. 
                    Bitirme projemde bir şirket için doküman yönetim sistemi geliştirdim.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -left-12 top-1 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center">
                  <i className="fas fa-certificate"></i>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <div className="flex justify-between flex-wrap gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold">Oracle Database Administration</h3>
                      <p className="text-primary font-medium">Sertifika</p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-700 px-4 py-1 rounded-full text-sm">
                      2023
                    </div>
                  </div>
                  <p>
                    Oracle veritabanı yönetimi, performans optimizasyonu ve güvenlik konularında temel ve ileri seviye eğitim.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -left-12 top-1 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center">
                  <i className="fas fa-certificate"></i>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <div className="flex justify-between flex-wrap gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold">IFS ERP Specialist</h3>
                      <p className="text-primary font-medium">Sertifika</p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-700 px-4 py-1 rounded-full text-sm">
                      2024
                    </div>
                  </div>
                  <p>
                    IFS ERP sisteminin kurulumu, yönetimi ve özelleştirilmesi konularında uzmanlaşma eğitimi.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Beceriler */}
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 justify-center">
            <i className="fas fa-code text-primary"></i>
            <span>Teknik Beceriler</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-primary">Web Teknolojileri</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span>HTML5</span>
                    <span>70%</span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>CSS</span>
                    <span>65%</span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-primary">Veritabanı</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span>SQL</span>
                    <span>85%</span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>PL/SQL</span>
                    <span>80%</span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Oracle DB</span>
                    <span>75%</span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-primary">ERP & CRM Sistemleri</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span>IFS</span>
                    <span>80%</span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Bimser Synergy CSP</span>
                    <span>85%</span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Resume 