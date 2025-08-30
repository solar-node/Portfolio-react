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

export const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        My Projects

      </motion.h2>
        <motion.div
          className="project-grid"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >


          <motion.div
            className="project-card"
            variants={fadeInUp}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
          >
            <motion.div
              className="project-image"
              style={{
                backgroundImage:
                  "url('public/Assets/Banner.png')",
              }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            />
              <h3>Human Activity Predictor</h3>
              <p>
                It predicts the acitvity of a person from the built in phone
                sensors. The model is 94.16% accurate in its predictions.
              </p>
              <div className="project-tech">
                <span>XGBoost</span>
                <span>Fast API</span>
                <span>PCA</span>
              </div>
            </motion.div>



            <motion.div
            className="project-card"
            variants={fadeInUp}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
          >
            <motion.div
              className="project-image"
              style={{
                backgroundImage:
                  "url('public/Assets/Banner.png')",
              }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            />
              <h3>Human Activity Predictor</h3>
              <p>
                It predicts the acitvity of a person from the built in phone
                sensors. The model is 94.16% accurate in its predictions.
              </p>
              <div className="project-tech">
                <span>XGBoost</span>
                <span>Fast API</span>
                <span>PCA</span>
              </div>
          </motion.div>




          <motion.div
            className="project-card"
            variants={fadeInUp}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
          >
            <motion.div
              className="project-image"
              style={{
                backgroundImage:
                  "url('public/Assets/Banner.png')",
              }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            />
              <h3>Human Activity Predictor</h3>
              <p>
                It predicts the acitvity of a person from the built in phone
                sensors. The model is 94.16% accurate in its predictions.
              </p>
              <div className="project-tech">
                <span>XGBoost</span>
                <span>Fast API</span>
                <span>PCA</span>
              </div>
            </motion.div>




        </motion.div>
    </motion.section>
  );
};
