import React, { useState } from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaRobot,
  FaDatabase,
  FaBrain,
} from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { motion } from "framer-motion";
import Countup from "react-countup";
import { fadeIn } from '..//../variants';

// data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          { icon: <FaHtml5 />, name: 'HTML' },
          { icon: <FaCss3 />, name: 'CSS' },
          { icon: <FaJs />, name: 'JavaScript' },
          { icon: <FaReact />, name: 'React' },
        ],
      },
      {
        title: 'Data Science',
        icons: [
          { icon: <GiArtificialIntelligence />, name: 'Artificial Intelligence' },
          { icon: <FaRobot />, name: 'Machine Learning' },
          { icon: <FaDatabase />, name: 'SQL Database' },
          { icon: <FaBrain />, name: 'Deep Learning' },
        ],
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'SSC - Prasad Vidya Sankul Junagadh',
        stage: '2018',
      },
      {
        title: 'HSC - G.G. Zadafiya Vidyalaya',
        stage: '2020',
      },
      {
        title: 'B.Tech(Artificial Intelligence) - ITM(SLS) Baroda University',
        stage: '2024',
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  const [hoveredTitle, setHoveredTitle] = useState("");
  const [hoveredIcon, setHoveredIcon] = useState("");

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left overflow-y-auto">
      <Circles />
      {/* avatar img */}
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="h2 text-accent"
          >
            About me!
          </motion.h2>
          <motion.p
            variants={fadeIn('right', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="max-w-[500px] mx-auto xl:mx-0 xl:mx-2 xl:mb-1 px-2 xl:px-0"
          >
            Hello Sahil Kevadiya! I am a
            21-year-old currently residing in the vibrant city of Surat. I am in
            my final year of B.Tech, specializing in Artificial Intelligence,
            where I dive deep into the fascinating world of cutting-edge
            technology.
          </motion.p>
          <motion.p
            variants={fadeIn('right', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="max-w-[900px] mx-auto xl:mx-0 xl:mx-2 xl:mb-1 px-2 xl:px-0"
          >
            I am always open to new experiences and knowledge, so if there is
            anything exciting you&apos;d&apos; like to share or discuss, feel free to
            reach out!
          </motion.p>
          {/* counter */}
          <motion.div
            variants={fadeIn('right', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after-absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <Countup start={0} end={6} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.5] max-w-[100px]">
                  Projects
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn('left', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-5 mx-auto xl:max-0 mb-4">
            {aboutData.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`${
                  index === itemIndex &&
                  'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                }
                cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white 
                after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            ))}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-7 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
              >
                {/* title */}
                <div
                  className="font-light mb-2 md:mb-0"
                >
                  {hoveredTitle || item.title}
                </div>
                <div className="hidden md:flex">-</div>
                <div>{item.stage}</div>
                <div className="flex gap-x-5">
                  {/* icon */}
                  {item.icons?.map((icon, iconIndex) => (
                    <div
                      key={iconIndex}
                      className="text-2xl text-white cursor-pointer relative group hover:text-accent"
                    >
                      <div
                        className='absolute pr-15 -bottom-full hidden group-hover:flex'
                        onMouseOver={() => setHoveredIcon(icon.name)}
                        onMouseOut={() => setHoveredIcon("")}
                      >
                        <div className='bg-white relative flex text-primary items-center p-[6px] rounded-[3px]'>
                          <div className='text-[12px] leading-none font-semibold capitalize'>
                            {icon.name}
                          </div>
                        </div>
                      </div>
                      {icon.icon}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
