import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" },
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
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
    >
      <motion.h2 variants={fadeIn}>About Me</motion.h2>

      <div className="about-top">
        <motion.div className="about-image-container" variants={fadeIn}>
          <img src="/Assets/ai-saas.png" alt="Aditya" className="about-image" />
        </motion.div>

        <motion.div className="about-content" variants={fadeIn}>
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

      <motion.div className="skills-box" variants={fadeIn}>
        <h3>Skills</h3>
        <div className="skills-categories">
          {Object.entries(skills).map(([category, items], index) => (
            <div key={index} className="skill-category">
              <h4>{category}</h4>
              <div className="skills-grid">
                {items.map((skill, idx) => (
                  <div key={idx} className="skill-item">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};