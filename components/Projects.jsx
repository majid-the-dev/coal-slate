import Image from "next/image";
import Image1 from "@/assets/sticks-and-stones.png";
import Image2 from "@/assets/wbhnt.png";
import Image3 from "@/assets/teitc.png";
import Image4 from "@/assets/strange-cat.png";

const Projects = () => {
  return (
    <div className="px-4 md:px-10 py-24">
      <h1 className="text-4xl text-left lg:text-center font-bold">
        Recent <span className="text-red-500">Projects</span>
      </h1>
      {/* <p className="text-gray-600 text-lg text-center mx-auto max-w-4xl mt-8">
        We are proud to have completed a variety of projects that inspire,
        educate, and empower children through engaging storytelling and
        interactive experiences. Here are some of our recent accomplishments
      </p> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-7 mt-14">
        <div className="col-span-1">
          <div className="w-full">
            <div className="relative w-full h-72 rounded-3xl overflow-hidden">
              <Image
                src={Image1}
                alt="Sticks and stones"
                layout="fill"
                objectFit="cover"
                className="rounded-lg bottom-0"
              />
              <div class="absolute inset-0 bg-black/50 rounded-xl"></div>
            </div>
            <h1 className="text-lg font-bold line-clamp-1 mt-6">Sticks and Stones</h1>
            <p className="text-gray-600 text-sm mt-1">Published January 2023</p>
          </div>
        </div>
        <div className="col-span-1">
          <div className="w-full">
            <div className="relative w-full h-72 rounded-3xl overflow-hidden">
              <Image
                src={Image2}
                alt="Sticks and stones"
                layout="fill"
                objectFit="cover"
                className="rounded-lg bottom-0"
              />
              <div class="absolute inset-0 bg-black/50 rounded-xl"></div>
              {/* <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-xl"></div> */}
            </div>
            <h1 className="text-lg font-bold line-clamp-1 mt-6">Why Babies Have No Tail and Other Stories</h1>
            <p className="text-gray-600 text-sm mt-1">Published January 2023</p>
          </div>
        </div>
        <div className="col-span-1">
          <div className="w-full">
            <div className="relative w-full h-72 rounded-3xl overflow-hidden">
              <Image
                src={Image3}
                alt="Sticks and stones"
                layout="fill"
                objectFit="cover"
                className="rounded-lg bottom-0"
              />
              <div class="absolute inset-0 bg-black/50 rounded-xl"></div>
              {/* <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-xl"></div> */}
            </div>
            <h1 className="text-lg font-bold line-clamp-1 mt-6">The Egg In The Cup</h1>
            <p className="text-gray-600 text-sm mt-1">Published January 2023</p>
          </div>
        </div>
        <div className="col-span-1">
          <div className="w-full">
            <div className="relative w-full h-72 rounded-3xl overflow-hidden">
              <Image
                src={Image4}
                alt="Sticks and stones"
                layout="fill"
                objectFit="cover"
                className="rounded-lg bottom-0"
              />
              <div class="absolute inset-0 bg-black/50 rounded-xl"></div>
              {/* <div class="absolute inset-0 bg-gradient-to-t from-red-500/60 to-black rounded-xl"></div> */}
            </div>
            <h1 className="text-lg font-bold line-clamp-1 mt-6">My Grandmother&apos;s Strange Cat</h1>
            <p className="text-gray-600 text-sm mt-1">Published January 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
