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

    "Generative AI & LLM": [
      "LangChain",
      "RAG Systems",
      "LLM Agents",
      "FAISS",
      "ChromaDB",
      "Docling",
      "Gemini",
      "Groq",
      "HuggingFace"
    ],

   "ML & Data Science": [
      "Supervised Learning",
      "Predictive Modeling",
      "Hyperparameter Tuning",
      "PCA",
      "t‑SNE",
      "Feature Engineering"
    ],

"Libraries & Frameworks": [
      "Scikit-Learn",
      "OpenCV",
      "NumPy",
      "Pandas",
      "XGBoost",
      "Matplotlib",
      "Seaborn",
      "React",
      "Streamlit",
      "Bootstrap",
      "Tailwind CSS",
      "Framer Motion"
    ],


   Languages: ["Python", "JavaScript", "C++", "HTML5", "CSS3"],



 
    Tools: ["Git", "GitHub", "Jupyter Notebook", "Google Colab", "VS Code", "LaTeX", "Figma"]
  };


// Use this when adding icons
// export const About = () => {
//   const skills = {
//     "Generative AI & LLM": [
//       { name: "LangChain", icon: "public/Assets/skills/langchain.png" },
//       { name: "RAG Systems", icon: "public/Assets/skills/rag.png" },
//       { name: "LLM Agents", icon: "public/Assets/skills/agent.png" },
//       { name: "FAISS", icon: "public/Assets/skills/.png" },
//       { name: "ChromaDB", icon: "public/Assets/skills/chromadb.png" },
//       { name: "Docling", icon: "public/Assets/skills/docling.png" },
//       { name: "Gemini", icon: "public/Assets/skills/gemini.png" },
//       { name: "Groq", icon: "public/Assets/skills/groq.png" },
//       { name: "HuggingFace", icon: "public/Assets/skills/huggingface.png" },
//     ],
//     "ML & Data Science": [
//       { name: "Supervised Learning", icon: "public/Assets/skills//supervised.png" },
//       { name: "Predictive Modeling", icon: "public/Assets/skills/predictive.png" },
//       { name: "Hyperparameter Tuning", icon: "public/Assets/skills/hyperparam.png" },
//       { name: "PCA", icon: "public/Assets/skills/pca.png" },
//       { name: "t-SNE", icon: "public/Assets/skills/tsne.png" },
//       { name: "Feature Engineering", icon: "public/Assets/skills/feature.png" },
//     ],
//     "Libraries & Frameworks": [
//       { name: "Scikit-Learn", icon: "public/Assets/skills/scikit.png" },
//       { name: "OpenCV", icon: "public/Assets/skills/opencv.png" },
//       { name: "NumPy", icon: "public/Assets/skills/numpy.png" },
//       { name: "Pandas", icon: "public/Assets/skills/pandas.png" },
//       { name: "XGBoost", icon: "public/Assets/skills/xgboost.png" },
//       { name: "Matplotlib", icon: "public/Assets/skills/matplotlib.png" },
//       { name: "Seaborn", icon: "public/Assets/skills/seaborn.png" },
//       { name: "React", icon: "public/Assets/skills/react.png" },
//       { name: "Streamlit", icon: "public/Assets/skills/streamlit.png" },
//       { name: "Bootstrap", icon: "public/Assets/skills/bootstrap.png" },
//       { name: "Tailwind CSS", icon: "public/Assets/skills/tailwind.png" },
//       { name: "Framer Motion", icon: "public/Assets/skills/framer.png" },
//     ],
//     Languages: [
//       { name: "Python", icon: "public/Assets/skills/python.png" },
//       { name: "JavaScript", icon: "public/Assets/skills/javascript.png" },
//       { name: "C++", icon: "public/Assets/skills/cpp.png" },
//       { name: "HTML5", icon: "public/Assets/skills/html.png" },
//       { name: "CSS3", icon: "public/Assets/skills/css.png" },
//     ],
//     Tools: [
//       { name: "Git", icon: "public/Assets/skills/git.png" },
//       { name: "GitHub", icon: "public/Assets/skills/github.png" },
//       { name: "Jupyter Notebook", icon: "public/Assets/skills/jupyter.png" },
//       { name: "Google Colab", icon: "public/Assets/skills/colab.png" },
//       { name: "VS Code", icon: "public/Assets/skills/vscode.png" },
//       { name: "LaTeX", icon: "public/Assets/skills/latex.png" },
//       { name: "Figma", icon: "public/Assets/skills/figma.png" },
//     ],
//   };

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
            AI Research Intern at IISc Bangalore with hands-on experience building end-to-end RAG pipelines, 
            conversational agents, and document intelligence systems. 
            I have developed impactful projects including a personalized AI tutor and a semantic web search engine,
             applying LLMs and generative AI to design scalable, context-aware solutions for real-world challenges.


          </p>
          <p>
            I specialize in creating AI solutions that integrate PDF parsing, vector search, 
            and multi-turn conversational agents for interactive applications. Driven by a passion for generative AI and LLMs, 
            I aim to build innovative, high-impact systems while continuously exploring emerging technologies and pushing the boundaries of AI applications.
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


{/* Use it when adding icons.. */}
      {/* <motion.div className="skills-box" variants={fadeInUp}>
        <h3>Skills</h3>
        <div className="skills-categories">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div key={index} className="skill-category" variants={fadeInUp}>
              <h4>{category}</h4>
              <div className="skills-grid">
                {items.map((skill, idx) => (
                  <motion.div key={idx} className="skill-item" variants={fadeInUp}>
                    <
                      img src={skill.icon} alt={skill.name}
                     title={skill.name} className="skill-icon" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div> */}
    </motion.section>
  );
};