// next image
import Image from "next/image";

//next link
import Link from "next/link";

//icons
import {HiArrowRight} from 'react-icons/hi2';

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link 
      href={'/work'} 
      className="relative w-[120px] xl:w-[150px] h-[120px] xl:h-[150px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group">
        <Image 
          src={'/rounded-text.png'}
          width={111}
          height={118}
          alt=""
          className="animate-spin-slow w-full h-full max-w-[91px] xl:max-w-[111px] max-h-[98px] xl:max-h-[118px]"
          />
        <HiArrowRight className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300" />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
