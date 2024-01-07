import Bulb from "../../components/Bulb";

//framer motion
import {motion} from 'framer-motion';
import {fadeIn} from '../../variants';

const Skills = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex itemsx-center">
      <circles />
      <div className="container mx:auto">
        <div className='flex flex-col xl:flex-row gap-x-8'>
          {/*text*/}
          <div className="text-center flex xl:w0[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2 variants={fadeIn('left',0.4)} initial='hidden' animate='show' exit='hidden'>
              My Projects <span className="text-accent">.</span>
            </motion.h2>
          </div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Skills;
