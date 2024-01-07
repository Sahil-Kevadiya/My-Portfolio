// Importing icons from react-icons/hi2
import {
  HiHome,
  HiDocumentText,
  HiAcademicCap,
  HiMiniUser,
  HiEnvelope,
} from 'react-icons/hi2';

// Importing Next.js Link and useRouter
import Link from 'next/link';
import { useRouter } from 'next/router';

// Navigation data with icons
export const navData = [
  { name: 'home', path: '/', icon: <HiHome /> },
  { name: 'about', path: '/about', icon: <HiMiniUser /> },
  // Uncomment and add other sections as needed
  // { name: 'services', path: '/services', icon: <HiRectangleGroup /> },
  // { name: 'Skills', path: '/Skills', icon: <HiAcademicCap /> },
  { name: 'Work', path: '/work', icon: <HiDocumentText /> },
  { name: 'contact', path: '/contact', icon: <HiEnvelope /> },
];

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <nav className='flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen'>
      {/* Navigation bar */}
      <div className='flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-auto py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full shadow-md'>

        {/* Mapping through navigation data */}
        {navData.map((link, index) => (
          <Link
            key={index}
            href={link.path}
          >
            {/* Tooltip */}
            <div className={`relative group ${link.path === pathname ? 'text-accent flex items-center hover:text-accent transition-all duration-300' : ''}`}>
              {/* Tooltip visible on group hover */}
              <div className='absolute pr-14 right-0 hidden xl:group-hover:flex'>
                <div className='bg-white relative flex text-primary items-center p-[6px] rounded-[3px]'>
                  <div className='text-[12px] leading-none font-semibold capitalize'>
                    {link.name}
                  </div>
                </div>
              </div>

              {/* Icon */}
              <div>{link.icon}</div>
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
