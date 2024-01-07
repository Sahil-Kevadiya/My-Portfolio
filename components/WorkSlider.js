// data
export const WorkSlide = {
    slides: [
      {
        images: [
          {
            title: 'Mobile Phone Directory',
            path: '/thumb1.jpg',
          },
          {
            title: 'Diamond Price Prediction',
            path: '/thumb2.jpg',
          },
          {
            title: 'Brain Tumor Detection',
            path: '/thumb3.jpg',
          },
          {
            title: 'Text Extraction',
            path: '/thumb4.jpg',
          },
        ],
      },
      {
        images: [
          {
            title: 'Mall Customer Segmentation',
            path: '/thumb4.jpg',
          },
          {
            title: 'Show symptoms of diabetes',
            path: '/thumb1.jpg',
          },
          {
            title: 'title',
            path: '/thumb2.jpg',
          },
          {
            title: 'title',
            path: '/thumb3.jpg',
          },
        ],
      },
    ],
  };
  
  // Import swiper react components
  import { Swiper, SwiperSlide } from 'swiper/react';
  
  // Import swiper styles
  import 'swiper/css';
  import 'swiper/css/free-mode';
  import 'swiper/css/pagination';
  
  // Import required modules
  import { Pagination } from 'swiper';
  
  // Icons
  import { BsArrowRight } from 'react-icons/bs'; 

  //next image
  import Image from 'next/image';


const WorkSlider = () => {
  const imageLinks = [
    ["https://github.com/Sahil-Kevadiya/Mobile-Phoen-Directory", "https://github.com/Sahil-Kevadiya/Diamond-Price-Prediction", 
    "https://github.com/Sahil-Kevadiya/Brain-Tumor-Detection", "https://github.com/Sahil-Kevadiya/Text-Extraction"],

    ["https://github.com/Sahil-Kevadiya/Mall-Customer-Segmentation", "https://github.com/Sahil-Kevadiya/Extract-text-from-PDF-and-show-symptoms-of-diabetes",
     "IMAGE_LINK_2_3", "IMAGE_LINK_2_4"],
    // Add more image links as needed
  ];
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className='h-[280px] sm:h-[480px]'
    >
      {WorkSlide.slides.map((slide, slideIndex) => {
        return (
          <SwiperSlide key={slideIndex}>
            <div className='grid grid-cols-2 grid-rows-4 gap-4 cursor-pointer'>
              {/* images */}
              {slide.images.map((image, imageIndex) => {
                const imageLink = imageLinks[slideIndex][imageIndex] || "#";
                return (
                  <div
                    className='relative rounded-lg overflow-hidden flex items-center justify-center group'
                    key={imageIndex}
                  >
                    <a href={imageLink} target="_blank" rel="noopener noreferrer">

                    <div className='flex flex-col items-center justify-center relative overflow-hidden group'>
                      {/* image */}
                      <Image src={image.path} width={500} height={300} alt={image.title} />
                      {/* overlay gradient */}
                      <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                      {/* title */}
                      <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                        <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                          {/* title part 1 */}
                          <div className='delay-100'>{image.title}</div>
                        </div>
                        {/* title part 2 */}
                        <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em] translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>
                          <div>Live Project</div>
                          {/* icon */}
                          <div className='text-xl group-hover:translate-y-0 transition-all duraion-300 delay-200'>
                            <BsArrowRight />
                          </div>
                        </div>
                      </div>
                    </div>
                    </a>  
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;

