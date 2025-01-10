import "./navbar.scss"
import {motion} from "framer-motion"
import Sidebar from "../Sidebar/Sidebar"

const navbar = () => {
  return (
    <div className="navbar">
        {/*sidebar*/}
        <Sidebar/>
        <div className = "wrapper">
            <motion.span initial={{opacity:0, scale:0.5}} 
            animate={{opacity:1, scale:1}} 
            transition={{duration:1}}>Portfolio404</motion.span>
            <div className="Social">
                <motion.a href="" initial={{opacity:0, scale:0.5}} 
                                  animate={{opacity:1, scale:1}} 
                                  transition={{duration:0.5}}>
                                  <img src="/X.png" alt="" />
                </motion.a>
                <motion.a href="" initial={{opacity:0, scale:0.5}} 
                                  animate={{opacity:1, scale:1}} 
                                  transition={{duration:0.5, delay:0.3}} >
                                  <img src="/instagram.png" alt="" />
                </motion.a>
                <motion.a href="" initial={{opacity:0, scale:0.5}} 
                                  animate={{opacity:1, scale:1}} 
                                  transition={{duration:0.5, delay:0.5}}>
                                  <img src="/Linkedin.png" alt="" />
                </motion.a>
                <motion.a href="" initial={{opacity:0, scale:0.5}} 
                                  animate={{opacity:1, scale:1}} 
                                  transition={{duration:0.5,delay:0.7}}>
                                  <img src="/youtube.png" alt="" />
                </motion.a>
            </div>
        </div>
    </div>
  )
}

export default navbar