import { useRef } from "react"
import "./Projects.scss"
import {motion, useScroll, useSpring, useTransform} from "framer-motion"

const items = [
    {
        id:1,
        title:"Revenue Management System for Municipal Corporation",
        img:"https://images.pexels.com/photos/6693655/pexels-photo-6693655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, rerum nostrum. Expedita officia ab aliquam architecto molestias id voluptates voluptate eius repellendus fuga. Minima, est. Necessitatibus at provident neque unde!"
    },
    {
        id:2,
        title:"Precision Flood Inundation Forecast Via Spatial Data Integration",
        img:"https://images.pexels.com/photos/6471926/pexels-photo-6471926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, rerum nostrum. Expedita officia ab aliquam architecto molestias id voluptates voluptate eius repellendus fuga. Minima, est. Necessitatibus at provident neque unde!"
    },
    {
        id:3,
        title:"Predictive Stock Market Analysis Using LSTM Networks",
        img:"https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, rerum nostrum. Expedita officia ab aliquam architecto molestias id voluptates voluptate eius repellendus fuga. Minima, est. Necessitatibus at provident neque unde!"
    },
    {
        id:4,
        title:"Smart Irrigation System Using Machine Learning and IOT",
        img:"https://images.pexels.com/photos/11678434/pexels-photo-11678434.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, rerum nostrum. Expedita officia ab aliquam architecto molestias id voluptates voluptate eius repellendus fuga. Minima, est. Necessitatibus at provident neque unde!"
    },
]

const Single = ({item})=>{
    const ref = useRef();
    const {scrollYProgress} = useScroll({
        target:ref,
        // offset:["start start", "end start"]
    })
    const y = useTransform(scrollYProgress,[0,1],[-100,50]);
    return(
        <section >
            <div className="container">
                <div className="wrapper">
                    <div className="imagecontainer"ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
               
                <motion.div className="textcontainer" style={{y}}>
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                    <button>See Demo</button>
                </motion.div>
                </div>
            </div>
        </section>
    )
}
const projects = () => {
    const ref = useRef();
    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["end end", "start start"],
    })
    const scaleX = useSpring(scrollYProgress,{
        stiffness:300,
        damping: 30,
    })
    
  return (
    <div className="Projects" ref={ref}>
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div style={{scaleX:scaleX}} className="progressbar"></motion.div>
        </div>
        {items.map((item)=>(
            <Single item={item} key = {item.id}/>
        ))}
    </div>
  )
}

export default projects