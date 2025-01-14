import "./hero.scss"
import {motion} from "framer-motion"
const textVariants = {
    initial:{
        x: -500,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildern: 0.1,
        },
    },
    scrollButton:{
        opacity:0,
        y:10,
        transition:{
            duration:2,
            repeat: Infinity,
           
        }
    }
}

const SliderVariants = {
    initial:{
        x:1920,
    },
    animate:{
        x : "-800%",
        transition:{
            repeatType: "Mirror",
            repeat: Infinity,
            duration:20,
        },
    },
}

const Hero = () => {
  return (
    <div className="Hero">
        <div className="wrapper">
        <motion.div className="textcontainer" variants={textVariants} initial="initial" animate= "animate">
            <motion.h2 variants={textVariants}>RAMAN PREET SINGH</motion.h2>
            <motion.h1 variants={textVariants}>Quantitative Trader and Web Developer</motion.h1>
            <motion.div variants={textVariants} className="buttons">
                <motion.button variants={textVariants}>Resume</motion.button>
                <motion.button variants={textVariants}>Conatct Me</motion.button>
            </motion.div>
            <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
        </motion.div>
        </div>
        <motion.div className="slidingTextContainer" variants={SliderVariants} initial="initial" animate="animate">
            Finance Trading Developer AI/ML 
        </motion.div>
        <div className="imagecontainer">
         <img src="/file.png" alt="" />
        </div>
    </div>
  )
}

export default Hero