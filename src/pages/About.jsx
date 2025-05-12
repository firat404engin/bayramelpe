import { motion } from 'framer-motion'

const About = () => {
  return (
    <>
      <section className="section">
        <div className="container">
          <motion.h1 
            className="section-title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hakkımda
          </motion.h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="rounded-lg overflow-hidden mb-6">
                <img 
                  src="/assets/about-me.jpg" 
                  alt="Bayram ELPE" 
                  className="w-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/600x400?text=Hakkımda'
                  }}
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                  <p className="font-medium">Yaş:</p>
                  <p>30</p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                  <p className="font-medium">Lokasyon:</p>
                  <p>İstanbul, Türkiye</p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                  <p className="font-medium">E-posta:</p>
                  <p className="truncate">bayramelpe@example.com</p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                  <p className="font-medium">Eğitim:</p>
                  <p>Yönetim Bilişim Sistemleri</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold mb-6">Backend Developer</h2>
              
              <p className="mb-4">
                Merhaba, ben Bayram ELPE. Yönetim bilişim sistemleri mezunuyum ve kurumsal yazılım geliştirme alanında çalışıyorum.
              </p>
              <p className="mb-4">
                Bimser Synergy CSP ve IFS gibi kurumsal yazılımlarla projelerde deneyim kazandım. Doküman yönetimi, onay mekanizmaları ve dijital dönüşüm süreçlerinde aktif rol aldım.
              </p>
              <p className="mb-8">
                Sistematik düşünebilen, çözüm odaklı ve sürekli öğrenmeye açık bir geliştirici adayıyım. Kurumsal projelerde elde ettiğim tecrübelerle kendimi özellikle backend ve veri yönetimi alanında geliştirmeye devam ediyorum.
              </p>
              
              <h3 className="text-xl font-bold mb-4">Becerileri</h3>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center gap-2">
                  <i className="fas fa-check-circle text-primary"></i>
                  <span>SQL ve PL/SQL ile veritabanı yönetimi ve sorgu optimizasyonu</span>
                </li>
                <li className="flex items-center gap-2">
                  <i className="fas fa-check-circle text-primary"></i>
                  <span>ERP ve doküman yönetim sistemleri entegrasyonu</span>
                </li>
                <li className="flex items-center gap-2">
                  <i className="fas fa-check-circle text-primary"></i>
                  <span>İş süreçlerini analiz etme ve dijital dönüşüm</span>
                </li>
                <li className="flex items-center gap-2">
                  <i className="fas fa-check-circle text-primary"></i>
                  <span>Kurumsal yazılım geliştirme süreçleri</span>
                </li>
                <li className="flex items-center gap-2">
                  <i className="fas fa-check-circle text-primary"></i>
                  <span>Raporlama ve analiz çalışmaları</span>
                </li>
              </ul>
              
              <a 
                href="/assets/Bayram_ELPE_CV.pdf" 
                download
                className="btn-primary inline-flex items-center gap-2"
              >
                <i className="fas fa-download"></i>
                <span>CV'mi İndir</span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Deneyim Bölümü */}
      <section className="section bg-gray-100 dark:bg-gray-900">
        <div className="container">
          <h2 className="section-title">Deneyim</h2>
          
          <div className="space-y-8">
            <motion.div 
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
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
            </motion.div>
            
            <motion.div 
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
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
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About 