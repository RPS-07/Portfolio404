import "./Sidebar.scss"
import Togglebutton from "./Togglebutton/Togglebutton"
import Links from "./Links/Links"
import { useState } from "react"
import { motion } from "framer-motion"
import { clipPath } from "framer-motion/client"

const Sidebar = () => {
    const [open,setOpen]= useState(false)
    const variants = {
        open:{
            clipPath:"circle(1200px at 50px 50px)",
            transition:{
                type:"spring",
                stiffness:20,
            }
        },
        closed:{
            clipPath: "circle(30px at 50px 50px)",
            transition:{
                delay:0.1,
                type:"spring",
                stiffness:400,
                damping: 40,
            }
        }
    }
  return (
    <motion.div className="Sidebar" animate= {open? "open":"closed"}>
        <motion.div className="bg" variants={variants}>
            <Links/>
        </motion.div>
        <Togglebutton setOpen={setOpen}/>
    </motion.div>
  )
}

export default Sidebar