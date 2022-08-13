import styles from './style.module.scss'
import { useRef } from "react"
import { useDimensions } from "helpers/hookMobMenu"
import { motion, useCycle } from "framer-motion"
import { MobMenuBtn, MobMenuItems } from 'components'

const MobMenu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true)
  const containerRef = useRef(null)
  const { height } = useDimensions(containerRef)

  const sidebar = {
    open: (height = 225) => ({
      clipPath: `circle(${height * 2 + 200}px at 260px 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2
      }
    }),
    closed: {
      clipPath: "circle(30px at 260px 40px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

  return (
    <motion.nav
      className={styles.mobMenu}
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <motion.div className={styles.mobMenu__background} variants={sidebar} />
      <MobMenuItems handleClick={() => toggleOpen()} />
      <MobMenuBtn toggle={() => toggleOpen()} />
    </motion.nav>
  )
}

export default MobMenu

// const sidebar = {
//   open: (height = 1000) => ({
//     clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
//     transition: {
//       type: "spring",
//       stiffness: 20,
//       restDelta: 2
//     }
//   }),
//   closed: {
//     clipPath: "circle(30px at 40px 40px)",
//     transition: {
//       delay: 0.5,
//       type: "spring",
//       stiffness: 400,
//       damping: 40
//     }
//   }
// };

// export const MobMenu = () => {
//   const [isOpen, toggleOpen] = useCycle(false, true);
//   const containerRef = useRef(null);
//   const { height } = useDimensions(containerRef);

//   return (
//     <motion.nav
//       initial={false}
//       animate={isOpen ? "open" : "closed"}
//       custom={height}
//       ref={containerRef}
//     >
//       <motion.div className={styles.mobMenu__background} variants={sidebar} />
//       <MobMenuItems />
//       <MobMenuBtn toggle={() => toggleOpen()} />
//     </motion.nav>
//   );
// };