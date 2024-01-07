import { motion } from 'framer-motion';

// Variants for animation
const transitionVariants = {
  initial: {
    x: '100%',
    width: '100%',
  },
  animate: {
    x: '0%',
    width: '0%',
  },
  exit: {
    x: ['0%', '100%'],
    width: ['0%', '100%'],
  },
};

// Array of background colors
const colors = ['#2e2257', '#3b2d71', '#4b3792'];

// Transition component
const Transition = () => {
  return (
    <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen overflow-hidden z-30'>
      {colors.map((color, index) => (
        <motion.div
          key={index}
          className={`absolute inset-0 bg-gradient-to-r from-transparent to-${color} z-${30 - 10 * index}`}
          variants={transitionVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ delay: 0.2 * index, duration: 0.6, ease: 'easeInOut' }}
        />
      ))}
    </motion.div>
  );
};

export default Transition;
