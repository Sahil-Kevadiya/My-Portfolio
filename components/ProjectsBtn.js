// next image
import Image from 'next/image';

// next link
import Link from 'next/link';

// icons
import { HiArrowRight } from 'react-icons/hi2';

const ProjectsBtn = () => {
  const handleButtonClick = () => {
    // Handle button click logic
    // You can navigate to '/work' or perform any other action
    console.log('handleButtonClick function called');
  };

  return (
    <div className="grid-container">
      <div className='mx-auto xl:mx-0'>
        <Link href='/work'>
          <div onClick={handleButtonClick} onTouchStart={handleButtonClick} className='relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group'>
            <Image src='/rounded-text.png' width={141} height={148} className='animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]' alt='' />
            <HiArrowRight className='absolute text-4xl transition-all duration-300' />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProjectsBtn;
