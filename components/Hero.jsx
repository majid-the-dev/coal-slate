import Image from "next/image";
import Link from "next/link";
import Graphic1 from "@/assets/hero-graphic-3.png";
import Element1 from "@/assets/hero-bg-element.png";

const Hero = () => {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center gap-7 px-4 md:px-10 overflow-hidden">
      {/* <p className="bg-red-100 text-red-500 text-sm rounded-full px-6 py-1">www.coalslate.com.ng</p> */}
      <h1 className="text-4xl lg:text-6xl text-center font-bold lg:leading-[4.5rem]">
        Igniting Minds, <br /> One Story at a Time
      </h1>
      <p className="text-gray-600 text-lg text-center mx-auto max-w-5xl hidden lg:block">
        We believe in the power of stories to shape the future. Our carefully
        crafted storybooks not only captivate young readers but also teach life
        lessons that resonate long after the final page is turned. With a
        commitment to educational excellence, we provide services that go beyond
        the written word, fostering creativity, curiosity, and growth in
        children.
      </p>
      <p className="text-gray-600 text-sm text-center mx-auto max-w-5xl block lg:hidden">
        We believe in the power of stories to shape the future. Our carefully
        crafted storybooks not only captivate young readers but also teach life
        lessons that resonate long after the final page is turned.
      </p>
      <Link
        href={"/"}
        className="hero-gradient text-white text-sm lg:text-lg font-medium rounded-full px-8 py-3"
      >
        See Projects
      </Link>
      {/* <Image
        src={Graphic1}
        height={700}
        width={700}
        className="absolute -right-20 -bottom-40"
        alt="graphics"
      /> */}
      <Image
        src={Element1}
        height={1500}
        width={1500}
        className="absolute opacity-25 scale-150 lg:scale-95"
        alt="graphics"
      />
    </div>
  );
};

export default Hero;
