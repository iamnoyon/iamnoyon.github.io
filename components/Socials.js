//Links
import Link from "next/link";

//icons
import {
  RiInstagramLine,
  RiFacebookLine,
  RiTwitterLine,
  RiGithubLine,
  RiLinkedinLine,
  RiWhatsappLine} from 'react-icons/ri'

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-2xl lg:text-3xl">
      <Link href={''} className="hover:text-accent transition-all duration-300">
        <RiLinkedinLine/>
      </Link>
      <Link href={''} className="hover:text-accent transition-all duration-300">
        <RiGithubLine/>
      </Link>
      <Link href={''} className="hover:text-accent transition-all duration-300">
        <RiFacebookLine/>
      </Link>
      <Link href={''} className="hover:text-accent transition-all duration-300">
        <RiInstagramLine/>
      </Link>
      <Link href={''} className="hover:text-accent transition-all duration-300">
        <RiWhatsappLine/>
      </Link>
      <Link href={''} className="hover:text-accent transition-all duration-300">
        <RiTwitterLine/>
      </Link>
    </div>
  );
};

export default Socials;
