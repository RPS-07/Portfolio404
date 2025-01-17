import "./Services.scss"
import {motion} from "framer-motion"
const variants = {
  initial:{
    x:-500,
    y:100,
    opacity:0
  },
  animate:{
    x:0,
    opacity:1,
    y:0,
    transition:{
      duration:1,
      staggerChildren:0.1,
    }
  }
}
const Services = () => {
  return (
    <motion.div className="Services" variants={variants} initial="initial" whileInView="animate">
      <motion.div className="textcontainer" variants={variants}>
        <p>I focus on helping your brand grow<br/>
         and move forward</p>
        <hr/>
      </motion.div>
      <motion.div className="titlecontainer" variants={variants}>
        <div className="title">
          <img src=" /people.webp" alt=""/>
          <h1> <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas</h1>
        </div>
        <div className="title">
          <h1> <motion.b whileHover={{color:"orange"}}>for your</motion.b > Business. </h1>
          <button>WHAT I DO?</button>
        </div>
      </motion.div>
      <motion.div className="listcontainer" variants={variants}>
        <motion.div className="box" whileHover={{ background:"lightgray", color:"black"}}>
          <h2>
            Branding
          </h2>
          <p>
            A software developer is a professional who specializes in creating, testing, and maintaining software applications. 
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{ background:"lightgray", color:"black"}}>
          <h2>
            Branding
          </h2>
          <p>
            A software developer is a professional who specializes in creating, testing, and maintaining software applications.  
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div className="box"whileHover={{ background:"lightgray", color:"black"}}>
          <h2>
            Branding
          </h2>
          <p>
            A software developer is a professional who specializes in creating, testing, and maintaining software applications.  
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{ background:"lightgray", color:"black"}}>
          <h2>
            Branding
          </h2>
          <p>
            A software developer is a professional who specializes in creating, testing, and maintaining software applications. 
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
      </motion.div>
  )
}

export default Services