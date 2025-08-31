import { motion } from "framer-motion";

const timelineData = [
  {
    role: "ML Research Intern",
    company: "Indian Institute of Science (IISc), Bangalore ",
    date: "Dec 2024 - Feb 2025",
    description: " Contributed to 'Kreeda', an AI-based Yoga platform, by training YOLO models for pose estimation and curating a specialized dataset. Also co-authored a review paper on Self-Supervised Learning.",
  },
  {
    role: "Machine Learning Specialization",
    company: " Coursera (DeepLearning.AI & Stanford)",
    date: " Oct 2024 - Feb 2025",
    description: "Completed a hands-on specialization covering supervised, unsupervised, and reinforcement learning. Built and evaluated models using NumPy and Scikit-learn.",
  },
  {
    role: "B.Tech ",
    company: "National Institute of Technology, Srinagar ",
    date: "2023 - 2027",
    description: "Pursuing a comprehensive engineering curriculum, currently maintaining a 7.7 CGPA while developing a strong foundation in Machine Learning and problem-solving. ",
  },
];

export const Experience = () => {
  return (
    <motion.section 
      id="experience" 
      className="experience"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2>Experience & Education</h2>
      <div className="timeline">
        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>{item.role}</h3>
              <p className="timeline-company">{item.company}</p>
              <p className="timeline-date">{item.date}</p>
              <p>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};