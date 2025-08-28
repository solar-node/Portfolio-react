import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const Hero = () => {
  return (
    <motion.section
      id="home"
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={{ staggerContainer }}
          initial="initial"
          animate="animate"
        >
          <motion.div className="hero-badge">
            <span>👋🏻 Hello, I'm</span>
          </motion.div>

          <motion.h1
            className="glitch"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
          >
            Aditya
          </motion.h1>
          <motion.h2 className="hero-subtitle" variants={fadeInUp}>
            Exploring AI, ML, and Real-World Applications
          </motion.h2>

          <motion.p className="hero-description" variants={fadeInUp}>
            I work on building and deploying machine learning models, focusing
            on data preprocessing, feature engineering, and model optimization.
            My goal is to create scalable and interpretable AI solutions.
          </motion.p>

          <motion.div className="cta-buttons" variants={staggerContainer}>
            <motion.a
              href="#projects"
              className="cta-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View my work
            </motion.a>

            <motion.a
              href="#contacts"
              className="cta-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>

          <motion.div
             className="social-links" 
             variants={staggerContainer}
            >
                <motion.a href="https://github.com/solar-node" target="_blank">
                    <i className="fab fa-github"></i>
                </motion.a>

                <motion.a href="https://www.linkedin.com/in/aditya-singh-solar-node/" target="_blank">
                    <i className="fab fa-linkedin"></i>
                </motion.a>

                <motion.a href="2023nitsgr094@nitsri.ac.in" target="_blank">
                   <i class="fa-solid fa-envelope"></i>
                </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};
