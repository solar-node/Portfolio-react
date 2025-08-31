import { motion } from "framer-motion";

// Variants for fade-in animation
const fadeIn = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" },
};

// Variants for staggering children animations
const staggerContainer = {
  whileInView: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const About = () => {
  const skills = [
    "Python", "JavaScript", "C++", "HTML5", "CSS3", "Scikit-Learn", 
    "OpenCV", "NumPy", "Pandas", "XGBoost", "Git", 
    "Figma", "Predictive Modeling", "Data Visualization"
  ];

  return (
    <motion.section 
      id="about" 
      className="about"
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
    >
      <motion.h2 variants={fadeIn}>About Me</motion.h2>
      <div className="about-container">
        <motion.div className="about-image-container" variants={fadeIn}>
          {/* Replace with a real image of yourself in the public folder */}
          <img src="public/Assets/ai-saas.png" alt="Aditya" className="about-image" />
        </motion.div>
        <motion.div className="about-content" variants={fadeIn}>
          <p>
            I am a B.Tech student at NIT Srinagar with experience in machine learning, computer vision, and web development. Proficient in Python, Scikit-Learn, OpenCV, and JavaScript, I have applied these skills to projects in predictive modeling, pose estimation, and front-end development.
        </p>
          <p>
           My goal is to leverage my technical expertise to deliver impactful and innovative solutions in AI and software engineering.  I am always eager to take on new challenges and contribute to meaningful projects.
          </p>
          <h3>Skills</h3>
          <motion.div 
            className="skills-grid"
            variants={staggerContainer}
          >
            {skills.map((skill, index) => (
              <motion.div key={index} className="skill-item" variants={fadeIn}>
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};