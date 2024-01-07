//Links
import Link from "next/link";

//icons
import{RiInstagramLine, RiFacebookLine, RiLinkedinLine, RiGithubLine} from 'react-icons/ri'

const Socials = () => {
  return (
    <div className="flex item-center gap-x-5 text-lg">
      <Link href={'https://www.instagram.com/sahil_kevadiya_1710/'} className="hover:text-accent transition-all duration-300">
        <RiInstagramLine />
      </Link>
      <Link href={'https://www.facebook.com/sahil.kevadiya/'} className="hover:text-accent transition-all duration-300">
        <RiFacebookLine />
      </Link>
      <Link href={'https://www.linkedin.com/in/sahil-kevadiya-714331243/'} className="hover:text-accent transition-all duration-300">
        <RiLinkedinLine/>
      </Link>
      <Link href={'https://github.com/Sahil-Kevadiya'} className="hover:text-accent transition-all duration-300">
        <RiGithubLine />
      </Link>
    </div>
  )
};

export default Socials;
