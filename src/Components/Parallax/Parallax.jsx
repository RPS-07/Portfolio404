// import { useRef } from "react"
// import "./Parallax.scss"
// import {motion,  useScroll,useTransform} from "framer-motion"

// const Parallax = ({type}) => {
  
//   const ref = useRef()
//   const {scrollYProgress} = useScroll({
//     target:ref,
//     offset:["start start","end start"]
//   })

//   const yText = useTransform(scrollYProgress, [0,1], ['-100%', "500%"])
//   const yBg = useTransform(scrollYProgress, [0,1], ['-20%', "100%"])
//   return (
//     <div className="Parallax"
//     style={{background: type==="Services"?"linear-gradient(180deg, #0c0c1d,rgb(32, 151, 195))":"linear-gradient(180deg, #0c0c1d,rgb(166, 176, 176))",
//     }}
//     >
//         <motion.h1 style={{y:yText}}>{type === "Services" ? "What We Do?" : "What We Did?"}</motion.h1>
//         <motion.div className="mountains"></motion.div>
//         <motion.div style={{y:yBg}} className="planets"></motion.div>
//         <motion.div style={{x:yBg}} className="stars"></motion.div>
//     </div>
//   )
// }

// export default Parallax 
import { useRef } from "react";
import "./Parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
  // Create a unique ref for this page
  const ref = useRef();

  // Use `useScroll` with the specific ref
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Transform ranges specific to this page
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "300%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div
      ref={ref} // Assign the ref to the parent container
      className="Parallax"
      style={{
        background:
          type === "Services"
            ? "linear-gradient(180deg, #0c0c1d, rgb(32, 151, 195))"
            : "linear-gradient(180deg, #0c0c1d, rgb(166, 176, 176))",
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type === "Services" ? "What We Do?" : "What We Did?"}
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div className="planets" style={{ 
        y: yBg,
        backgroundImage: `url(${
        type === "Services" ? "/planets.png" : "/sun.png"
      }),`
      }}></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </div>
  );
};

export default Parallax;
