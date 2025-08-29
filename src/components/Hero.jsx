import { motion } from "framer-motion";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter" ;
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

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

        <motion.div 
          className="hero-image-container"
          initial={{opacity: 0, x: 50}}
          animate={{opacity: 1, x: 0}}
          transition={{duration: 0.8, delay: 0.4}}
        >

          <div className="code-display">
            <SyntaxHighlighter 
              language="python" 
              style={vscDarkPlus}
              customStyle={{margin:0,
                padding:"1.5rem", 
                height:"100%", 
                borderRadius:"20px",
                background: "rgba(30, 41, 59, 0.8)",
                backdropFilter: "blur(10px)",
                backdropFilter: "blur(10px)",
                marginBottom: 50,
              }}
            >
              {`from fastapi import FastAPI
from pydantic import BaseModel
import joblib
import pandas as pd 
from typing import List

# Initialize the FastAPI app
app = FastAPI(title = "Human Activity Recognition API" )

# 2. Define the input data model using Pydantic
class Features(BaseModel):
    features: List[float] 

# Loading the saved components
model = joblib.load("Models/HAR-model.pkl")
pca = joblib.load("Models/pca.pkl")
scaler = joblib.load("Models/scaler.pkl")
label_encoder = joblib.load("Models/label_encoder.pkl")`}
            </SyntaxHighlighter>
          </div>

          <motion.div 
            className="floating-card" 
            animate={{y: [0, -10, 0], rotate: [0, 2, 0]
            }}
             transition={{duration:4, repeat: Infinity, ease: "easeInOut"}}
          >
            <div className="card-content">
              <span className="card-icon">💻</span>
              <span className="card-text">Currently working on something awesome!</span>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </motion.section>
  );
};
