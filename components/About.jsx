import Image from "next/image";
import React from "react";
import { LuPlusCircle } from "react-icons/lu";
import Image1 from "@/assets/children-reading-1.jpg";

const About = () => {
  return (
    <div className="bg-gray-100 px-4 md:px-10 py-24 lg:py-32">
      <div className="grid grid-cols-2 gap-16">
        <div className="col-span-2 lg:col-span-1">
          <h1 className="text-4xl font-bold">
            The <span className="text-red-500">Heart</span> of Our Work
          </h1>
          <p className="text-gray-600 text-sm lg:text-lg mt-8">
            Our passion for education extends beyond the pages of our books. We
            are committed to creating dynamic and interactive experiences that
            enrich the learning journey. Through drama and play renditions of
            our stories, we bring characters and adventures to life, allowing
            children to engage with the material in a way that leaves a lasting
            impact.
          </p>
          <div className="flex flex-col gap-5 text-gray-600 mt-8">
            <p className="flex items-center gap-2 text-sm lg:text-lg">
              <LuPlusCircle className="text-red-500" /> Expertly Crafted
              Storybooks
            </p>
            <p className="flex items-center gap-2 text-sm lg:text-lg">
              <LuPlusCircle className="text-red-500" /> Interactive Learning
              Experiences
            </p>
            <p className="flex items-center gap-2 text-sm lg:text-lg">
              <LuPlusCircle className="text-red-500" /> Fostering Creativity
            </p>
            <p className="flex items-center gap-2 text-sm lg:text-lg">
              <LuPlusCircle className="text-red-500" />
              Holistic Educational Approach
            </p>
          </div>
        </div>
        <div className="col-span-2 lg:col-span-1">
          <div className="w-full h-full flex items-center justify-center lg:justify-end">
            <Image
              src={Image1}
              height={550}
              width={550}
              className="rounded-2xl"
              alt="children reading"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
