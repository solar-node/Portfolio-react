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





 <a
          href="https://ai-tutor-solarnode.streamlit.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          <motion.div
            className="project-card"
            variants={fadeInUp}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
          >
            <motion.div
              className="project-image"
              style={{
                backgroundImage: "url('Assets/AI-tutor.webp')",
              }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            />
            <h3>Personalized AI Tutor </h3>
            <p>
              A conversational RAG-based tutor delivering textbook-grounded answers with multi-turn learning experience.
            </p>
            <div className="project-tech">
              <span>Langchain</span>
              <span>Gemini</span>
              <span>ChromaDB</span>
            </div>
          </motion.div>
        </a>



 <a
          href="https://web-rag-chat.streamlit.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          <motion.div
            className="project-card"
            variants={fadeInUp}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
          >
            <motion.div
              className="project-image"
              style={{
                backgroundImage: "url('Assets/web-rag.png')",
              }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            />
            <h3>Semantic Web Search AI</h3>
            <p>
             A RAG-based system that answers questions using web content with 
            embeddings and FAISS vector search.
            </p>
            <div className="project-tech">
              <span>FAISS </span>
              <span>Groq LLM</span>
              <span>Streamlit</span>
            </div>
          </motion.div>
        </a>


 
        <a
          href="https://github.com/solar-node/Human-Activity-Recognition"
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          <motion.div
            className="project-card"
            variants={fadeInUp}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
          >
            <motion.div
              className="project-image"
              style={{
                backgroundImage: "url('Assets/Banner.png')",
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
        </a>



        <a
          href="https://github.com/solar-node/Heart-Disease-Prediction"
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          <motion.div
            className="project-card"
            variants={fadeInUp}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
          >
            <motion.div
              className="project-image"
              style={{
                backgroundImage: "url('Assets/heart-disease-predictor.webp')",
              }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            />
            <h3>Heart disease Predictor</h3>
            <p>
              A machine learning model to predict the likelihood of heart disease in patients, achieving an accuracy of 88.52%.
            </p>
            <div className="project-tech">
              <span>Random Forest</span>
              <span>Scikit-learn</span>
              <span>Pandas</span>
            </div>
          </motion.div>
        </a>




        <a
          href="https://github.com/solar-node/ML/blob/main/ColorDetection.py"
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          <motion.div
            className="project-card"
            variants={fadeInUp}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
          >
            <motion.div
              className="project-image"
              style={{
                backgroundImage: "url('Assets/color-detection.png')",
              }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            />
            <h3>Real-Time Color Detection</h3>
            <p>
               Uses OpenCV to detect and track specific colors from a live webcam feed, drawing a bounding box around in real-time.
            </p>
            <div className="project-tech">
              <span>OpenCV</span>
              <span>Pillow</span>
              <span>Numpy</span>
            </div>
          </motion.div>
        </a>

      </motion.div>
    </motion.section>
  );
};
