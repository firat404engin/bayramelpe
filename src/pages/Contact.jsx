import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from 'emailjs-com'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [status, setStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  })
  
  const [loading, setLoading] = useState(false)
  const formRef = useRef()
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    
    // EmailJS entegrasyonu (gerçek değerleri kendi bilgilerinizle değiştirin)
    emailjs.sendForm(
      'YOUR_SERVICE_ID', 
      'YOUR_TEMPLATE_ID',
      formRef.current,
      'YOUR_USER_ID'
    )
      .then((result) => {
        setStatus({
          submitted: true,
          success: true,
          message: 'Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağım.'
        })
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        })
        setLoading(false)
      }, (error) => {
        setStatus({
          submitted: true,
          success: false,
          message: 'Mesajınız gönderilemedi. Lütfen daha sonra tekrar deneyin veya doğrudan e-posta ile iletişime geçin.'
        })
        setLoading(false)
      })
  }

  return (
    <section className="section">
      <div className="container">
        <motion.h1 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          İletişim
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* İletişim Bilgileri */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-6">Benimle İletişime Geçin</h2>
            <p className="mb-8">
              Projeleriniz, iş fırsatları veya sorularınız için aşağıdaki iletişim bilgilerinden bana ulaşabilirsiniz. 
              En kısa sürede dönüş yapmaya çalışacağım.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary text-white p-3 rounded-full">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Konum</h3>
                  <p>İstanbul, Türkiye</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary text-white p-3 rounded-full">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Email</h3>
                  <p>bayramelpe@example.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary text-white p-3 rounded-full">
                  <i className="fas fa-phone"></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Telefon</h3>
                  <p>+90 555 123 4567</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-lg font-bold mb-4">Sosyal Medya</h3>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/bayramelpe" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full hover:bg-primary hover:text-white transition-colors"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a 
                  href="https://linkedin.com/in/bayramelpe" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full hover:bg-primary hover:text-white transition-colors"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a 
                  href="https://twitter.com/bayramelpe" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full hover:bg-primary hover:text-white transition-colors"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </motion.div>
          
          {/* İletişim Formu */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold mb-6">Mesaj Gönderin</h2>
            
            {status.submitted && (
              <div className={`p-4 mb-6 rounded-md ${status.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {status.message}
              </div>
            )}
            
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">İsim</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block mb-2 font-medium">Konu</label>
                <input 
                  type="text" 
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">Mesaj</label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary h-40"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="btn-primary w-full"
                disabled={loading}
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <i className="fas fa-spinner fa-spin"></i>
                    Gönderiliyor...
                  </span>
                ) : 'Mesaj Gönder'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact 