import styles from './style.module.scss'
import { useEffect, useState } from 'react';
import {
  motion,
  useViewportScroll,
  useSpring,
  useTransform
} from "framer-motion";

export const CircleIndicator = () => {
  // const [isComplete, setIsComplete] = useState(false);
  const [valueScroll, setVsalueScroll] = useState(0);
  const { scrollYProgress } = useViewportScroll();
  // const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]) => will full count early that scroll max bottom
  const yRange = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });
  // console.log(pathLength)
  // useEffect(() => yRange.onChange(v => setIsComplete(v >= 1)), [yRange]);
  useEffect(() => yRange.onChange(v => setVsalueScroll(v)), [yRange]);
  // console.log(valueScroll)
  return (
    <div className={styles.circleIndicator}>
      <svg className={styles.progressIcon} >

        <line x1="0" x2={`${valueScroll * 100}%`} stroke="black" className={styles.progressIcon__line} />

      </svg>
    </div>

  )
}