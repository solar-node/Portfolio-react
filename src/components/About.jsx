import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: { staggerChildren: 0.15 },
  },
};

export const About = () => {
  const skills = {
    Languages: ["Python", "JavaScript", "C++", "HTML5", "CSS3"],
    "Libraries & Frameworks": [
      "Scikit-Learn",
      "OpenCV",
      "NumPy",
      "Pandas",
      "XGBoost",
    ],
    Tools: ["Git", "Figma"],
  };

  return (
    <motion.section
      id="about"
      className="about"
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <motion.h2 variants={fadeInUp}>About Me</motion.h2>

      <div className="about-top">
        <motion.div 
            className="about-image-container" 
            variants={fadeInUp}
             whileHover={{ scale: 1.05, transition: { duration: 0.3, ease: "easeOut" } }}
        >
          <img src="Assets/about-me.jpeg" alt="Aditya" className="about-image" />
        </motion.div>

        <motion.div className="about-content" variants={fadeInUp}>
          <p>
            I am a B.Tech student at NIT Srinagar with experience in machine
            learning, computer vision, and web development. Proficient in
            Python, Scikit-Learn, OpenCV, and JavaScript, I have applied these
            skills to projects in predictive modeling, pose estimation, and
            front-end development.
          </p>
          <p>
            My goal is to leverage my technical expertise to deliver impactful
            and innovative solutions in AI and software engineering. I am always
            eager to take on new challenges and contribute to meaningful
            projects.
          </p>
        </motion.div>
      </div>

      <motion.div className="skills-box" variants={fadeInUp}>
        <h3>Skills</h3>
        <div className="skills-categories">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div key={index} className="skill-category" variants={fadeInUp}>
              <h4>{category}</h4>
              <div className="skills-grid">
                {items.map((skill, idx) => (
                  <motion.div key={idx} className="skill-item" variants={fadeInUp}>
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};