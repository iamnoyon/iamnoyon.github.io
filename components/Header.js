//next Image
import Image from "next/image";

// next Link
import Link from "next/link";

// components
import Socials from '../components/Socials';

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[50px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-2 py-2">
          {/* logo */}
          <Link href={'/'}>
            {/*<Image src={'/logo.png'} width={220} height={48} alt="" priority={true}/>*/}
            <div className="text-white text-4xl tracking-wide font-sora">
              <h1 className="font-extrabold">𝓜ah<span className="text-accent text-5xl stylish">ꎇ</span>
              <span className="font-extralight">ujar</span><span className="text-accent text-5xl">.</span></h1>
            </div>
          </Link>
          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
