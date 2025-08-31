import { motion } from "framer-motion";
import { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";

const fadeInUp = {
  initial: {opacity: 0, y: 20},
  animate: {opacity:1, y:0},
  transition: {duration: 0.6},
};

const staggerContainer = {
  animate:{
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return(
    <motion.nav 
      className="navbar" 
      initial={{ y: -100 }}
      animate={{y: 0 }}
      transition={{duration: 0.6, ease:"easeOut"}}
    >
      <motion.div 
        className="logo" 
        whileHover={{scale: 1.05}}
        whileTap={{scale: .95}}
      >
        Portfolio
      </motion.div>

      <div className="hamburger-wrapper">
        <Hamburger toggled={isOpen} toggle={setIsOpen} color="#e2e8f0" />
      </div>

      <motion.ul 
        className={`nav-links ${isOpen ? "open" : ""}`} 
        variants={staggerContainer}
        initial = "initial"
        animate = "animate"
      >
        <motion.li
          variants={fadeInUp}
          whileHover={{scale: 1.1}}
          whileTap={{scale: 0.9}}
        >
          <a href="#home">Home</a>

        </motion.li>

        <motion.li
          variants={fadeInUp}
          whileHover={{scale: 1.1}}
          whileTap={{scale: 0.9}}
         >
          <a href="#projects">Projects</a>

        </motion.li>

        <motion.li
          variants={fadeInUp}
          whileHover={{scale: 1.1}}
          whileTap={{scale: 0.9}}
         >
          <a href="#about">About</a>

        </motion.li>

        <motion.li
          variants={fadeInUp}
          whileHover={{scale: 1.1}}
          whileTap={{scale: 0.9}}
         >
          <a href="#contact">Contact</a>  

        </motion.li>


      </motion.ul>

    </motion.nav>
  );
};
