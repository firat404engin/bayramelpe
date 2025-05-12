import { motion } from 'framer-motion'

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="relative overflow-hidden h-48">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
          onError={(e) => {
            e.target.src = `https://via.placeholder.com/600x400?text=${project.title.replace(/\s+/g, '+')}`
          }}
        />
        {project.categories && (
          <div className="absolute top-4 right-4 flex flex-wrap gap-2">
            {project.categories.map((category) => (
              <span 
                key={category} 
                className="bg-primary text-white px-2 py-1 text-xs rounded-full"
              >
                {category}
              </span>
            ))}
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
        
        {project.technologies && (
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <span 
                key={tech} 
                className="bg-gray-100 dark:bg-gray-700 px-2 py-1 text-sm rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
        
        <div className="flex gap-3">
          {project.codeLink && (
            <a 
              href={project.codeLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-outline text-sm py-2 px-4"
            >
              <i className="fab fa-github mr-2"></i>
              Kodu Görüntüle
            </a>
          )}
          {project.demoLink && (
            <a 
              href={project.demoLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary text-sm py-2 px-4"
            >
              <i className="fas fa-external-link-alt mr-2"></i>
              Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard 