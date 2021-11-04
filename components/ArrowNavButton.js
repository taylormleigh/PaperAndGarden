import Link from 'next/link';
import {motion, useMotionValue, useTransform} from 'framer-motion';

const ArrowNavButton = ({handleNext, direction}) => {

  if (direction === "previous") {
    return (
      <motion.div 
        whileTap={{scale: 0.9}}
        transition={{ type: "spring", bounce: 0.65, duration: 1 }}
        className="arrowNavButton">
          <div id="backArrow" onClick={handleNext}>
          </div>
      </motion.div>
    )
  } else if (direction === "next") {
    return (
      <motion.div 
        whileTap={{scale: 0.9}}
        transition={{ type: "spring", bounce: 0.65, duration: 1 }}
        className="arrowNavButton">
          <div id="forwardArrow" onClick={handleNext}>
          </div>
      </motion.div>
    )
  } else {
    return (
      <Link href={direction}>
        <motion.div 
          whileTap={{scale: 0.9}}
          transition={{ type: "spring", bounce: 0.65, duration: 1 }}
          className="arrowNavButton">
            <div id="beginArrow">
            </div>
        </motion.div>
      </Link>
    )
  }
}

export default ArrowNavButton;