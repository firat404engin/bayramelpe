import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black/80 text-white py-6 border-t border-gray-800/30">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center items-center"
        >
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Bayram ELPE. Tüm hakları saklıdır.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer 